import { Link } from "react-router-dom";

function Pagenotfound() {
    const title_style = {
        backgroundImage: "linear-gradient(to bottom right, pink, skyblue)",
        margin: "5% 20%",
        padding: "2%",
        borderRadius: "15px",
        boxShadow: "0px 0px 100px skyblue",
        fontFamily: "Courier New"
      }
    return ( 
        <div className="text-center" style={title_style}>
            <h1 style={{fontSize:"80px"}}>Oooooooops!</h1>
            <h1 style={{fontSize:"150px"}}>404</h1>
            <h2>PAGE NOT FOUND!</h2>
            <Link className="stores_style text-dark" to="/">
                <h3>Back To Home</h3>
            </Link>
        </div>
    );
}
    
export default Pagenotfound;