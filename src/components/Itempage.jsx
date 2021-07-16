import {Link, useHistory} from 'react-router-dom';

function Itempage({user}) {
    const item = {
        textAlign: "center",
        backgroundImage: "linear-gradient(to bottom right, pink, skyblue)",
        padding: "5%",
        margin: "7% 10% 0 10%",
        borderRadius: "25px",
        boxShadow: "0px 0px 100px skyblue"
    }
    let update_item;
    let history = useHistory();
    const onDelete = () => {
        history.goBack();
    }
    if(user){
        update_item = (
            <div className="col-12" style={{marginTop: "3%"}}>
                <div className="row">
                <div className="col-6">
                <Link to="/update-item/:id">
                    <button className="btn btn-success" type="button">Update Item</button>
                </Link>
                </div>
                <div className="col-6">
                    <button className="btn btn-danger" type="button" onClick={onDelete}>Delete Item</button>
                </div>
                </div> 
            </div>
        )
      }
    return ( 
        <div className="container">
        <div className="row" style={item}>
            <div className="col-6">
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVzVekznLhvE___KitgzkrFVBa1UHjGhKMwvPexLDHDFMTAH934qkxMVQLBI-aMe1vJV0&usqp=CAU"
            alt="{data.country}"
            style={{borderRadius: "25px"}}
            width="100%"
            height="auto"
            />
            </div>
            <div className="col-6">
                <h2 className="text-center">Item Name</h2>
                <br />
                <p>Item Price</p>
                <p>Item Calories</p>
                <p>Item Ingredients</p>
                <p>Item Location</p>
                <p><strong>Item Description: </strong>
                Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.</p>
            </div>
            {update_item}
        </div>
        </div>
    );
}
    
export default Itempage;