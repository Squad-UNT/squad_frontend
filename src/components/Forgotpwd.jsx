function Forgotpwd() {
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
                <h3>Forgot Password</h3>
                <br/>
                <div className="form-group" style={{marginBottom:"15px"}}>
                    <input type="email" className="form-control" placeholder="Enter email" required/>
                </div>
                <button type="submit" className="btn btn-success btn-block">Submit</button>
            </form>
        </div>
    );
}
    
export default Forgotpwd;