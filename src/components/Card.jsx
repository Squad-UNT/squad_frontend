import {Link} from 'react-router-dom';

function Card() {
    const card_style = {
        textAlign: "center",
        backgroundImage: "linear-gradient(to bottom right, pink, skyblue)",
        width: "20%",
        margin: "1%",
        padding: "1%",
        borderRadius: "15px",
        boxShadow: "0px 0px 50px skyblue"
    }
    return (
      <div style={card_style}>
        <Link to="store/:id" className="text-dark" style={{textDecoration: "none"}}>
        <img
        src="https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-shop-store-cartoon-illustration-image_1433180.jpg"
        alt="{data.country}"
        style={{borderRadius: "15px"}}
        width="100%"
        height="auto"
        />
        <hr />
        <h4>Store Name</h4>
        <p>Store Entry Price</p>
        <p>Store Timings</p>
        <p>Store Location</p>
        </Link>
      </div>
    );
  }
  
  export default Card;