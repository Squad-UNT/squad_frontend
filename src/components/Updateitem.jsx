import {Redirect, useHistory} from 'react-router-dom';
import axios from 'axios';

function Updateitem({user}) {
    const page_style = {
        margin: "3% 35% 0 35%",
        backgroundImage: "linear-gradient(to bottom right, skyblue, pink)",
        borderRadius: "25px",
        padding: "3% 5% 3% 5%",
        boxShadow: "0px 0px 100px skyblue"
    }
    let history = useHistory();
    const UpdateitemSubmit = e => {
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
    
    if(!user){
        return <Redirect to={'/login'} />;
    }

    if(user && user.is_super_admin){
        return <Redirect to={'/'} />;
    }

    return ( 
        <div>
            <form className="text-center" style={page_style} onSubmit={UpdateitemSubmit}>
                <h3>Update Item in Menu</h3>
                <br/>
                <div className="form-group" style={{marginBottom:"10px"}}>
                    <input type="text" className="form-control" placeholder="Item Name" required/>
                </div>
                <div className="form-group" style={{marginBottom:"10px"}}>
                    <input type="number" className="form-control" placeholder="Item Price" required/>
                </div>
                <div className="form-group" style={{marginBottom:"10px"}}>
                    <input type="number" className="form-control" placeholder="Item Calories" required/>
                </div>
                <div className="form-group" style={{marginBottom:"10px"}}>
                    <label>Upload new Item Image</label>
                    <input type="file" className="form-control" required/>
                </div>
                <div className="form-group" style={{marginBottom:"10px"}}>
                    <textarea className="form-control" rows="2" placeholder="Item Ingredients" required></textarea>
                </div>
                <div className="form-check-inline">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="optradio" checked/>Item Available
                    </label>
                </div>
                <div className="form-check-inline" style={{marginBottom:"10px"}}>
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="optradio" />Item Not Available
                    </label>
                </div>
                <div className="form-group" style={{marginBottom:"10px"}}>
                    <input type="text" className="form-control" placeholder="Item Location"/>
                </div>
                <div className="form-group" style={{marginBottom:"15px"}}>
                    <textarea className="form-control" rows="3" placeholder="Item Description"></textarea>
                </div>
                <button type="submit" className="btn btn-success btn-block">Update Item</button>
            </form>
        </div>
    );
}
    
export default Updateitem;