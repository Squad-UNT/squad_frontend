import {Link} from 'react-router-dom';

function Item({data}) {
    const item_style = {
        textAlign: "center",
        backgroundImage: "linear-gradient(to bottom right, skyblue, pink)",
        width: "30%",
        margin: "2% 1%",
        borderRadius: "15px",
        boxShadow: "0px 0px 20px skyblue",
        padding: "1%"
    }
    return (
      <div style={item_style}>
      <Link to={`item/${data.item_id}`} className="text-dark row" style={{textDecoration: "none"}}>
      <div className='col-4'>
        <img
        src={data.item_image ? data.item_image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVzVekznLhvE___KitgzkrFVBa1UHjGhKMwvPexLDHDFMTAH934qkxMVQLBI-aMe1vJV0&usqp=CAU"}
        alt={data.item_image}
        style={{borderRadius: "15px"}}
        width="100%"
        height="120px"
        />
      </div>
      <div className='col-8'>
        <h4>{data.item_name}</h4>
        <p><strong>{data.item_price ? "$" + data.item_price  + " | " : ""}{data.item_calories} Cals{data.available_at ? " | " + data.available_at : ""}</strong></p>
        <div style={{alignment: "right"}}><button type="text" class={data.item_availability ? "btn btn-success btn-sm" : "btn btn-danger btn-sm"} style={{borderRadius: "50px", fontSize:"10px"}}>{data.item_availability ? "available" : "unavailable"}</button></div>
      </div>
      </Link>
      </div>
    );
  }
  
  export default Item;