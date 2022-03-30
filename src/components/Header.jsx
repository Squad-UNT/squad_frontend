// This file contains code to header display.

function Header() {
    const header_style = {
        margin: 0,
        padding: '0.5%',
        color: "white",
        backgroundSize: "100%",
        backgroundPosition: "center center",
        backgroundImage: `url("https://s1.1zoom.me/big0/954/Chili_pepper_Garlic_Spices_557130_1280x853.jpg")`,

    };
    return ( 
        <div className="jumbotron text-center" style={header_style}>
            <h1 style={{fontFamily: "Allerta Stencil"}}>UNT Foodpedia</h1>
            <h4><i>Single place to search for food!</i></h4> 
        </div>
    );
}
    
export default Header;