function Header() {
    const header_style = {
        margin: 0,
        padding: '1%',
        fontStyle: "italic",
        backgroundImage: `url("https://comps.canstockphoto.com/100-favorite-food-icons-set-cartoon-eps-vector_csp51500343.jpg")`,

    };
    return ( 
        <div className="jumbotron text-center" style={header_style}>
            <h1 style={{backgroundColor: "skyblue", margin: "0 37% 0 37%"}}>SQUAD fOOD APP</h1>
            <h4 style={{backgroundColor: "skyblue", margin: "0 35% 0 35%"}}>Single place to search for food!</h4> 
        </div>
    );
}
    
export default Header;