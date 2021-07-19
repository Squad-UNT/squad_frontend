import {Redirect} from 'react-router-dom';
import axios from 'axios';

function Changepwd({user, setUser}) {
    const page_style = {
        margin: "10% 35% 0 35%",
        backgroundImage: "linear-gradient(to bottom right, skyblue, pink)",
        borderRadius: "25px",
        padding: "4%",
        boxShadow: "0px 0px 100px skyblue"
    }

    const changepwdSubmit = e => {
        e.preventDefault();
        axios.post('login', {}).then(
        res => {
            if(res.status === 200){
                localStorage.clear();
                setUser(null);
            }
        }
        ).catch(
            err => {
            console.log(err);
        }
        )
    };
    
    if(!user){
        return <Redirect to={'/login'} />;
    }

    if(user && user.is_super_admin){
        return <Redirect to={'/'} />;
    }

    return ( 
        <div>
            <form className="text-center" style={page_style} onSubmit={changepwdSubmit}>
                <h3>Change Password</h3>
                <br/>
                <div className="form-group" style={{marginBottom:"10px"}}>
                    <input type="password" className="form-control" placeholder="Enter Old Password" required/>
                </div>
                <div className="form-group" style={{marginBottom:"10px"}}>
                    <input type="password" className="form-control" placeholder="Enter New Password" required/>
                </div>
                <div className="form-group" style={{marginBottom:"15px"}}>
                    <input type="password" className="form-control" placeholder="Conform New Password" required/>
                </div>
                <button type="submit" className="btn btn-success btn-block">Change Password</button>
            </form>
        </div>
    );
}
    
export default Changepwd;