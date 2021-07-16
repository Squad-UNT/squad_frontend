import {Link} from 'react-router-dom';

function Item() {
    const item_style = {
        textAlign: "center",
        backgroundImage: "linear-gradient(to bottom right, skyblue, pink)",
        width: "20%",
        margin: "1%",
        borderRadius: "15px",
        boxShadow: "0px 0px 50px skyblue",
        padding: "1%"
    }
    return (
      <div style={item_style}>
      <Link to="item/:id" className="text-dark" style={{textDecoration: "none"}}>
        <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVzVekznLhvE___KitgzkrFVBa1UHjGhKMwvPexLDHDFMTAH934qkxMVQLBI-aMe1vJV0&usqp=CAU"
        alt="{data.country}"
        style={{borderRadius: "15px"}}
        width="100%"
        height="auto"
        />
        <hr />
        <h4>Item Name</h4>
        <p>Item Price</p>
        <p>Item Calories</p>
        <p>Item Ingredients</p>
        <p>Item Location</p>
      </Link>
      </div>
    );
  }
  
  export default Item;