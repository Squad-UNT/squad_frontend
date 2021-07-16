import "./Hall.css";
import Card from "./Card";
import {Link} from 'react-router-dom';

function Hall({title, user}) {
  let add_store;
  if(user && user.email === "admin@admin"){
    add_store = (
      <div style={{marginLeft: "80%"}}>
        <Link to="/add-store">
            <button className="btn btn-success" type="button">Add Store</button>
        </Link>
        <br />
      </div>
    )
  } else {
    add_store = (
      <br />
    )
  }
  return (
    <div className="text-center">
        <br />
        <h1>{title}</h1>
        {add_store}
        <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  );
}

export default Hall;
