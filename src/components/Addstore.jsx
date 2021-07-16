import {Redirect, useHistory} from 'react-router-dom';
import axios from 'axios';

function Addstore({user}) {
    const page_style = {
        margin: "7% 35% 0 35%",
        backgroundImage: "linear-gradient(to bottom right, skyblue, pink)",
        borderRadius: "25px",
        padding: "3% 5% 3% 5%",
        boxShadow: "0px 0px 100px skyblue"
    }
    let history = useHistory();
    const AddstoreSubmit = e => {
        e.preventDefault();
        axios.post('login', {}).then(
        res => {
            if(res.status === 200){
                history.goBack();
            }
        }
        ).catch(
            err => {
            console.log(err);
        }
        )
    };

    if(user && user.email !== "admin@admin"){
        return <Redirect to={'/'} />;
    }
    
    if(!user){
        return <Redirect to={'/login'} />;
    }

    return ( 
        <div>
            <form className="text-center" style={page_style} onSubmit={AddstoreSubmit}>
                <h3>Add Store</h3>
                <br/>
                <div className="form-group" style={{marginBottom:"10px"}}>
                    <input type="email" className="form-control" placeholder="Store Admin Email" required/>
                </div>
                <hr />
                <div className="form-group" style={{marginBottom:"10px"}}>
                    <input type="text" className="form-control" placeholder="Store Name" required/>
                </div>
                <div className="form-group" style={{marginBottom:"10px"}}>
                    <input type="number" className="form-control" placeholder="Store Entry Price" required/>
                </div>
                <div className="form-group" style={{marginBottom:"10px"}}>
                    <label>Upload Store Image</label>
                    <input type="file" className="form-control" required/>
                </div>
                <div className="form-group" style={{marginBottom:"10px"}}>
                    <textarea className="form-control" rows="2" placeholder="Store Timings" required></textarea>
                </div>
                <div className="form-check-inline">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="optradio" checked/>Retail Store
                    </label>
                </div>
                <div className="form-check-inline" style={{marginBottom:"10px"}}>
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="optradio" />Dining Hall
                    </label>
                </div>
                <div className="form-group" style={{marginBottom:"15px"}}>
                    <input type="text" className="form-control" placeholder="Store Location" required/>
                </div>
                <button type="submit" className="btn btn-success btn-block">Add Item</button>
            </form>
        </div>
    );
}
    
export default Addstore;