import {Link} from 'react-router-dom';

function Login() {
    const page_style = {
        margin: "10% 35% 0 35%",
        backgroundImage: "linear-gradient(to bottom right, skyblue, pink)",
        borderRadius: "25px",
        padding: "4%",
        boxShadow: "0px 0px 100px skyblue"
    }
    return ( 
        <div>
            <form className="text-center" style={page_style}>
                <h3>Log In</h3>
                <br/>
                <div className="form-group" style={{marginBottom:"10px"}}>
                    <input type="email" className="form-control" placeholder="Enter email" required/>
                </div>
                <div className="form-group" style={{marginBottom:"15px"}}>
                    <input type="password" className="form-control" placeholder="Enter password" required/>
                </div>
                <button type="submit" className="btn btn-success btn-block">Submit</button>
                <p className="forgot-password" style={{marginTop:"5px"}}>
                    <Link to="/forgot-password">Forgot password?</Link>
                </p>
            </form>
        </div>
    );
}
    
export default Login;