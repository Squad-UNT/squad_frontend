import React, { useState } from "react";
import {Link, useLocation} from 'react-router-dom';
import "./Nav.css";
import axios from 'axios';
import logo from "./logo.png"

function Nav({user, setUser}) {
    const [search, setSearch] = useState("");
    let location = useLocation();
    const [pathname, setPathname] = useState(location.pathname);
    if(pathname !== location.pathname){
        setPathname(location.pathname);
        setSearch("");
    }
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
        search_dropdown = (<div className="row container-fluid" style={{fontSize: "20px", margin: "0", padding: "0", position: "absolute"}}>
            <div className="col-4"></div>
            <div className="col-4" style={{backgroundColor: "#198754", padding: "0px 15px 15px 15px", borderRadius: "0px 0px 25px 25px"}}>
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
        </div>
        </div>)
    } else {
        search_dropdown = (<div></div>)
    }

    let buttons;
    const LogoutSubmit = e => {
        e.preventDefault();
        localStorage.clear();
        setUser(null);
    };
    if(user && user.is_super_admin) {
        buttons = (
                <ul className="navbar-nav" style={{float:"right"}}>
                    <li className="nav-item">
                        <span className="navbar-brand" style={{fontSize: "24px"}}>Hi {user.email}!</span>
                    </li>
                    <li className="nav-item">
                        <Link to="/add-store">
                        <button className="btn btn-dark justify-content-end" type="button">Add Store</button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">
                        <button className="btn btn-dark justify-content-end" type="button" style={{marginLeft:"5px"}} onClick={LogoutSubmit}>Log Out</button>
                        </Link>
                    </li>      
                 </ul>
        )
    } else if(user) {
        buttons = (
            <ul className="navbar-nav" style={{float:"right"}}>
                <li className="nav-item">
                    <span className="navbar-brand" style={{fontSize: "24px"}}>Hi {user.email}!</span>
                </li>
                <li className="nav-item">
                    <Link to="/change-password">
                    <button className="btn btn-dark justify-content-end" type="button">Change Password</button>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/">
                    <button className="btn btn-dark justify-content-end" type="button" style={{marginLeft:"5px"}} onClick={LogoutSubmit}>Log Out</button>
                    </Link>
                </li>      
             </ul>
    )
    } else {
        buttons = (
            <Link to="/login">
            <button className="btn btn-dark justify-content-end" style={{float:"right"}} type="button">Log In</button>
            </Link>
        )
    }
    return ( 
        <div>
        <nav className="navbar navbar-expand-sm bg-success navbar-dark sticky-top" style={{padding:"5px", margin:"0px"}}>
            <div className="row container-fluid" style={{padding:"0px", margin:"0px"}}>
                <Link className='col-2' to="/">
                <img
                src={logo}
                alt="Foodpedia"
                width="100%"
                height="auto"
                />
                </Link>
                <div className='col-2'></div>
                <input className="col-4 search_style" type="text" placeholder="Search for Item by Name or Ingredient..." value={search} onChange={(e) => updateSearch(e.target.value)} />
                <div className="col-4">
                    {buttons}
                </div>
            </div>
        </nav>
        {search_dropdown}
        </div>
    );
}
    
export default Nav;