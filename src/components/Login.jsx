import {Link} from 'react-router-dom';

function Login() {
    const page_style = {
        margin: "10% 35% 0 35%",
        backgroundImage: "linear-gradient(to bottom right, skyblue, pink)",
        borderRadius: "50px",
        padding: "4%"
    }
    return ( 
        <div>
            <form className="text-center" style={page_style}>
                <h3>Log In</h3>
                <br/>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter email" required/>
                </div>
                <br/>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Enter password" required/>
                </div>
                <br />
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    <Link to="/forgot-password">Forgot password?</Link>
                </p>
            </form>
        </div>
    );
}
    
export default Login;