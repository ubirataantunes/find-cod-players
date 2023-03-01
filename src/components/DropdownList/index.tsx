// styles
import "./DropdownList.css";

const DropdownList = (props: any) => {
  return (
    <div className="dropdown-list">
      <label>{props.label}</label>
      <select
        onChange={(e) => props.changed(e.target.value)}
        value={props.value}
      >
        <option value="">Select platform</option>
        <option value="battle">Battle.net</option>
        <option value="xbl">Xbox Live</option>
        <option value="psn">PlayStation Network</option>
      </select>
    </div>
  );
};

export default DropdownList;
