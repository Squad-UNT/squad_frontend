// This file contains code to display store.

import {Link} from 'react-router-dom';

function Card({data}) {
    const card_style = {
        textAlign: "center",
        backgroundImage: "linear-gradient(to bottom right, pink, skyblue)",
        width: "30%",
        margin: "2% 1%",
        padding: "1%",
        borderRadius: "15px",
        boxShadow: "0px 0px 20px skyblue"
    }
    return (
      <div style={card_style}>
        <Link to={`store/${data.store_id}`} className="text-dark row" style={{textDecoration: "none"}}>
        <div className='col-4'>
        <img
        src={data.store_image ? data.store_image : "https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-shop-store-cartoon-illustration-image_1433180.jpg"}
        alt={data.store_image}
        style={{borderRadius: "15px"}}
        width="100%"
        height="130px"
        />
        </div>
        <div className='col-8'>
        <h4>{data.store_name}</h4>
        <p><strong>{data.hall_price ? "$" + data.hall_price : ""}</strong><br/>{data.store_timing}<br/>{data.store_location}</p>
        </div>
        </Link>
      </div>
    );
  }
  
  export default Card;