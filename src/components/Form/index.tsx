// styles
import './Form.css';

// hooks
import { useState } from 'react';

// components
import InputField from '../InputField';
// import DropdownList from '../DropdownList';
import Button from '../Button';
import DropdownList from '../DropdownList';

const Form = (props: any) => {
    // states
    const [name, setName] = useState('');
    const [ID, setID] = useState('');
    const [team, setTeam] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // sending professional data to App.js state
        props.registeredPlayers({
            name,
            ID,
            team
        });
        setName('');
        setID('');
        setTeam('');
    };

    const platform = ['Playstation', 'Xbox', 'Computer']

    return (
        <section className='form'>
            <form onSubmit={handleSubmit}>
                <h2>fill in the fields to find other players!</h2>
                <InputField
                    label='User name'
                    placeholder='Put your name here'
                    required={true}
                    value={name}
                    changed={(value: any) => {setName(value)}}
                />
                <InputField
                    label='ID Activision'
                    placeholder='Put your ID here'
                    required={true}
                    value={ID}
                    changed={(value: any) => {setID(value)}}
                />
                <DropdownList
                    label='Platform'
                    platform={platform}
                    placeHolder="Select your platform"
                    value={team}
                    changed={(value: any) => setTeam(value)}
                />
                <Button>
                    Register
                </Button>
            </form>
        </section>
    );
};

export default Form;