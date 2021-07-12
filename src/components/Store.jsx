import "./Hall.css";
import Item from "./Item";

function Store({title="Store Name"}) {
      
  return (
    <div className="text-center">
        <br />
        <h1>{title}</h1>
        <br />
        <h1><u>MENU</u></h1>
        <div className="cards">
            <Item />
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
