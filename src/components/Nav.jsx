import {Link} from 'react-router-dom';

function Nav() {
    return ( 
        <nav className="navbar navbar-expand-sm bg-success navbar-dark sticky-top">
            <div class="container-fluid">
                <Link style={{marginLeft: "2%"}} to="/">
                <img
        src="https://webassets.unt.edu/unt-foundation/images/unt_lettermark.svg"
        alt="{data.country}"
        width="30%"
        height="auto"
        /></Link>
                <div class="d-flex" style={{marginRight: "2%"}}>
                    <Link to="/login">
                        <button className="btn btn-dark justify-content-end" type="button">Log-In</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
    
export default Nav;