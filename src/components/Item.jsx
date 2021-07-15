import {Link} from 'react-router-dom';

function Item() {
    const card = {
        textAlign: "center",
        backgroundImage: "linear-gradient(to bottom right, pink, skyblue)",
        width: "20%",
        margin: "1%",
        borderRadius: "15px",
        boxShadow: "0px 0px 50px skyblue",
        padding: "1%"
    }
    return (
      <div style={card}>
        <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVzVekznLhvE___KitgzkrFVBa1UHjGhKMwvPexLDHDFMTAH934qkxMVQLBI-aMe1vJV0&usqp=CAU"
        alt="{data.country}"
        style={{borderRadius: "15px"}}
        width="100%"
        height="auto"
        />
        <p>Item name</p>
        <p>ingredents</p>
        <p>price</p>
        <p>cals</p>
        <Link to="item/:id">view</Link>
      </div>
    );
  }
  
  export default Item;