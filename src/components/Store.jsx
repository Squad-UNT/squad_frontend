import "./Hall.css";
import Item from "./Item";
import {Link} from 'react-router-dom';

function Store({title="Store Name", user}) {
  let add_item;
  if(user && !user.is_super_admin){
    add_item = (
      <div style={{marginLeft: "80%"}}>
        <Link to="/add-item">
            <button className="btn btn-success" type="button">Add Item</button>
        </Link>
      </div>
    )
  } else {
    add_item = (
      <br />
    )
  }
  return (
    <div className="text-center">
        <br />
        <h1>{title}</h1>
        {add_item}
        <h1><u>MENU</u></h1>
        <div className="cards">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    </div>
  );
}

export default Store;
