function Header() {
    const header_style = {
        margin: 0,
        padding: '1%',
        color: "white",
        backgroundSize: "100%",
        backgroundPosition: "center center",
        backgroundImage: `url("https://agc.creativelive.com/agc/courses/5138-1.jpg")`
    };
    return ( 
        <div className="jumbotron text-center" style={header_style}>
            <h1>SQUAD fOOD APP</h1>
            <h4>Single place to search for food!</h4> 
        </div>
    );
}
    
export default Header;