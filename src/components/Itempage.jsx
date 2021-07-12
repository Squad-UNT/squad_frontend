function Itempage() {
    return ( 
        <div>
        <div className="container" style={{marginTop:"5%"}}>
        <div className="row">
            <div className="col-1"></div>
            <div className="col-4">
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVzVekznLhvE___KitgzkrFVBa1UHjGhKMwvPexLDHDFMTAH934qkxMVQLBI-aMe1vJV0&usqp=CAU"
            alt="{data.country}"
            width="100%"
            height="auto"
            />
            </div>
            <div className="col-4">
                <h2 className="text-center">Item Name</h2>
                <br />
                <p>ingredents</p>
                <p>price</p>
                <p>cals</p>
                <p>availability</p>
                <h5>description</h5>
                <p>Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.</p>
            </div>
        </div>
        </div>
        </div>
    );
}
    
export default Itempage;