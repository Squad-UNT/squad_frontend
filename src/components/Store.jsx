import "./Hall.css";
import Item from "./Item";
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from "react";

function Store({user}) {
  const title_style = {
    backgroundImage: "linear-gradient(to bottom right, pink, skyblue)",
    margin: "1%",
    padding: "1%",
    borderRadius: "15px",
    boxShadow: "0px 0px 50px skyblue"
  }
  const { id } =useParams();
  let add_item;
  if(user && !user.is_super_admin && parseInt(id) === user.store_id){
    add_item = (
      <div style={{marginTop: "7%"}}>
        <Link to="/add-item">
            <button className="btn btn-success" type="button">Add Item</button>
        </Link>
      </div>
    )
  } else {
    add_item = ( <br /> )
  }

  const [data, setData] = useState({items: []});
  const updateData = () => {
      axios.post('getitems', {store_id: id}).then(
        res => {
            if(res.status === 200) setData(res.data);
        }
        ).catch(
            (error) => { console.log(error); }
        )
  };

  useEffect(() => {
    updateData();
  }, []);
  return (
    <div className="text-center">
        <br />
        <div className="row" style={title_style}>
            <div className="col-3"></div>
            <div className="col-1">
            <img
            src={data.store ? data.store.store_image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVzVekznLhvE___KitgzkrFVBa1UHjGhKMwvPexLDHDFMTAH934qkxMVQLBI-aMe1vJV0&usqp=CAU"}
            alt={data.item_image}
            style={{borderRadius: "15px"}}
            width="100%"
            height="auto"
            />
            </div>
            <div className="col-5" style={{textAlign: "left"}}>
                <h2>{data.store ? data.store.store_name : "Loading..." }</h2>
                <p><strong>{data.store ? data.store.hall_price ? "$" + data.store.hall_price + "  |  " : "" : ""}</strong>
                {data.store ? data.store.store_timing : ""}<br />
                {data.store ? data.store.store_location : ""}</p>
            </div>
            <div className="col-3" style={{textAlign: "left"}}>{add_item}</div>
        </div>
        <h1><u>MENU</u></h1>
        <div className="cards">
        {data.items.map((entry) => (
          <Item data={entry} />
        ))}
        </div>
    </div>
  );
}

export default Store;
