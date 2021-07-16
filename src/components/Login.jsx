import {Link, Redirect, useHistory} from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';

function Login({user, setUser}) {
    const page_style = {
        margin: "10% 35% 0 35%",
        backgroundImage: "linear-gradient(to bottom right, skyblue, pink)",
        borderRadius: "25px",
        padding: "4%",
        boxShadow: "0px 0px 100px skyblue"
    }
    const [error, setError] = useState((<div></div>));
    const creds = {
        email: null,
        password: ""
    };
    let history = useHistory();
    const LoginSubmit = e => {
        e.preventDefault();
        if(creds.password.length < 8){
            setError((<div className="alert alert-danger">
                    Invalid Email or Password!
                </div>));
        } else {
        axios.post('login', creds).then(
        res => {
            if(res.status === 200){
                localStorage.setItem('user', JSON.stringify(creds));
                setUser(creds);
                history.goBack();
            }
        }
        ).catch(
            err => {
                console.log(err);
        }
        )
        }
    };

    if(user){
        return <Redirect to={'/'} />;
    }

    return ( 
        <div>
            <form className="text-center" style={page_style} onSubmit={LoginSubmit}>
                <h3>Log In</h3>
                <br/>
                {error}
                <div className="form-group" style={{marginBottom:"10px"}}>
                    <input type="email" className="form-control" placeholder="Enter Email" onChange={e=> creds.email = e.target.value} required/>
                </div>
                <div className="form-group" style={{marginBottom:"15px"}}>
                    <input type="password" className="form-control" placeholder="Enter Password" onChange={e=> creds.password = e.target.value} required/>
                </div>
                <button type="submit" className="btn btn-success btn-block">Log In</button>
                <p className="forgot-password" style={{marginTop:"5px"}}>
                    <Link to="/forgot-password">Forgot password?</Link>
                </p>
            </form>
        </div>
    );
}
    
export default Login;