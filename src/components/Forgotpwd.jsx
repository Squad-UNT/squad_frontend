function Forgotpwd() {
    const page_style = {
        margin: "10% 35% 0 35%",
        backgroundImage: "linear-gradient(to bottom right, skyblue, pink)",
        borderRadius: "50px",
        padding: "4%"
    }
    return ( 
        <div>
            <form className="text-center" style={page_style}>
                <h3>Forgot Password</h3>
                <br/>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter email" required/>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        </div>
    );
}
    
export default Forgotpwd;