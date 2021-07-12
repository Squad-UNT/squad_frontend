import {Link} from 'react-router-dom';

function Card() {
    const card = {
        textAlign: "center",
        backgroundImage: "linear-gradient(to bottom right, pink, skyblue)",
        width: "20%",
        margin: "1%",
        padding: "1%"
    }
    return (
      <div style={card}>
        <img
        src="https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-shop-store-cartoon-illustration-image_1433180.jpg"
        alt="{data.country}"
        width="100%"
        height="auto"
        />
        <p>store name</p>
        <p>location</p>
        <Link to="store/:id">view</Link>
      </div>
    );
  }
  
  export default Card;