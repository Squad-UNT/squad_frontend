import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return ( 
        <div>
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
    
export default Home;