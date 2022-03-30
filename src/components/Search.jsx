import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Search.css";
import axios from 'axios';

function Search() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState({item_name: [], item_ingredients: []});
    const updateSearch = (value) => {
        setSearch(value);
        axios.post('search', {search_key: value}).then(
            res => {
                if(res.status === 200) {
                    setData(res.data);
                }
            }
            ).catch(
                (error) => { console.log(error); }
            )
      };
    let search_dropdown;
    if(search !== ""){
        search_dropdown = (<div className="search_dropdown_style">
            <h5 className="search_dropdown_label_style">Results for Search by Item Name</h5>
            {data.item_name.length ? (data.item_name.map((element) => (
                <Link to={`/store/item/${element.item_id}`} className="nav-link text-body search_dropdown_item_style">
                    <div className="row">
                    <div className="col-1" style={{padding: "0 0 0 0.9%"}}>
                    <img
                        src={element.item_image ? element.item_image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVzVekznLhvE___KitgzkrFVBa1UHjGhKMwvPexLDHDFMTAH934qkxMVQLBI-aMe1vJV0&usqp=CAU"}
                        alt={element.item_image}
                        style={{borderRadius: "50%"}}
                        width="70%"
                        height="auto"
                    />
                    </div>
                    <div className="col-11" style={{padding: "0"}}>{element.item_name}</div>
                    </div>
                </Link>
            ))): (<p className="text-center">No Items Found...</p>)}
            <h5 className="search_dropdown_label_style">Results for Search by Item Ingredient</h5>
            {data.item_ingredients.length ? (data.item_ingredients.map((element) => (
                <Link to={`/store/item/${element.item_id}`} className="nav-link text-body search_dropdown_item_style">
                <div className="row">
                <div className="col-1" style={{padding: "0 0 0 0.9%"}}>
                <img
                    src={element.item_image ? element.item_image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVzVekznLhvE___KitgzkrFVBa1UHjGhKMwvPexLDHDFMTAH934qkxMVQLBI-aMe1vJV0&usqp=CAU"}
                    alt={element.item_image}
                    style={{borderRadius: "50%"}}
                    width="70%"
                    height="auto"
                />
                </div>
                <div className="col-11" style={{padding: "0"}}>{element.item_name}</div>
                </div>
                </Link>     
            ))): (<p className="text-center">No Items Found...</p>)}
        </div>)
    } else {
        search_dropdown = (<div className="search_dropdown_style"></div>)
    }
    return ( 
        <div>
        <input className="search_style" type="text" placeholder="Search for Item by Name or Ingredient..." onChange={(e) => updateSearch(e.target.value)} />
        {search_dropdown}
        <div className="container text-center" style={{marginTop:"5%"}}>
        <div className="row">
            <Link className="stores_style text-dark" to="/retail" style={{marginLeft: "10%", width:"30%", marginRight: "20%"}}>
                <div style={{margin:"5%"}}>
                    <img
                    src={"https://pluspng.com/img-png/shop-png-black-and-white-shop-icon-it-s-an-icon-for-finding-local-shopping-the-logo-is-a-square-png-50-px-1600.png"}
                    alt="Retail Stores"
                    width="62%"
                    height="auto"
                    />
                <br/><br/>
                <h1>Retail Stores</h1>
                </div>
            </Link>
            <Link className="stores_style text-dark" to="/dining" style={{width:"30%", marginRight: "10%"}}>
            <div style={{margin:"5%"}}>
                    <img
                    src={"https://cdn.onlinewebfonts.com/svg/img_532743.png"}
                    alt="Dining Halls"
                    width="80%"
                    height="auto"
                    />
                <br/><br/>
                <h1>Dining Halls</h1>
                </div>
            </Link>
        </div>
        </div>
        </div>
    );
}
    
export default Search;