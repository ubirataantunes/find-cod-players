// styles
import "./Form.css";

// hooks
import { useState } from "react";

// components
import InputField from "../InputField";
// import DropdownList from '../DropdownList';
import Button from "../Button";
import DropdownList from "../DropdownList";
import axios from "axios";

type User = {
  username: string;
  platform: string;
  level: number;
  kdRatio: number;
  wins: number;
  gamesPlayed: number;
  winPercentage: number;
};

const API_BASE_URL = "https://api.tracker.gg/api/v2/warzone/";

async function searchUsers(username: string, platform: string): Promise<User[]> {
  const response = await axios.get(`${API_BASE_URL}/standard/profile/${platform}/${username}`);
  const { data } = response.data;

  return data.segments.map((segment: any) => ({
    username: segment.attributes.displayName,
    platform: segment.attributes.platformSlug,
    level: segment.stats.level.value,
    kdRatio: segment.stats.kdRatio.value,
    wins: segment.stats.wins.value,
    gamesPlayed: segment.stats.gamesPlayed.value,
    winPercentage: segment.stats.wins.value / segment.stats.gamesPlayed.value
  }));
}

const Form = (props: any) => {
  // states
  const [username, setUsername] = useState("");
  const [platform, setPlatform] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  const handleSearch = async (e: any) => {
    e.preventDefault();
    // sending professional data to App.js state
    props.registeredPlayers({
      username,
      platform,
    });
    setUsername("");
    setPlatform("");

    const result = await searchUsers(username, platform);
    setUsers(result);
  };

  // const handleSubmit = (e: any) => {
   
  // };

  return (
    <section className="form">
      <form onSubmit={handleSearch}>
        <h2>fill in the fields to find other players!</h2>
        <InputField
          label="ID Activision"
          placeholder="Put your ID here"
          required={true}
          value={username}
          changed={(value: any) => {
            setUsername(value);
          }}
        />
        <DropdownList
          label="Platform"
          platform={platform}
          placeHolder="Select your platform"
          changed={(value: any) => setPlatform(value)}
        />
        <Button>Register</Button>
      </form>
      {users.map(user => (
        <div key={user.username}>
          <h2>{user.username}</h2>
          <p>Platform: {user.platform}</p>
          <p>Level: {user.level}</p>
          <p>K/D Ratio: {user.kdRatio.toFixed(2)}</p>
          <p>Wins: {user.wins}</p>
          <p>Games Played: {user.gamesPlayed}</p>
          <p>Win Percentage: {(user.winPercentage * 100).toFixed(2)}%</p>
        </div>
      ))}
    </section>
  );
};

export default Form;
