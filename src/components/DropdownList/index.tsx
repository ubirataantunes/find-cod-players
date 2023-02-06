// styles
import './DropdownList.css';

const DropdownList = (props: any) => {


    return (
        <div className='dropdown-list'>
            <label>{props.label}</label>
            <select onChange={e => props.changed(e.target.value)} value={props.value}>
                <option value=""></option>
                {
                    props.items.map((item: any) => <option key={item}>{item}</option>)
                }
            </select>
        </div>
    );
};

export default DropdownList;