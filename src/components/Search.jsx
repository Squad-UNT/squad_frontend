import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Search.css";

function Search() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const updateSearch = (e) => {
        setSearch(e.target.value);
        setData([search, search, search]);
      };
    return ( 
        <div>
        <input className="search_style" type="text" placeholder="Search..." onChange={updateSearch} />
        <div className="search_dropdown_style">
            {data.map((element) => (
                <a href="http://localhost:3000/" className="nav-link text-body search_dropdown_item_style">{element}</a>     
            ))}
        </div>
        <div className="container text-center" style={{marginTop:"5%"}}>
        <div className="row">
            <div className="col-1"></div>
            <div className="col-4 stores_style">
                <Link className="navbar-brand text-dark" to="/retail"><h2>Retail Stores</h2></Link>  
            </div>
            <div className="col-2"></div>
            <div className="col-4 stores_style">
                <Link className="navbar-brand text-dark" to="/dining"><h2>Dining Halls</h2></Link>
            </div>
        </div>
        </div>
        </div>
    );
}
    
export default Search;