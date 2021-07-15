import {Link} from 'react-router-dom';

function Nav({user, setUser}) {
    let buttons;
    const LogoutSubmit = e => {
        e.preventDefault();
        localStorage.clear();
        setUser(null);
    };
    if(user) {
        buttons = (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <span className="navbar-brand" style={{fontSize: "25px"}}>Hi {user.email}!</span>
                    </li>
                    <li className="nav-item">
                        <Link to="/change-password">
                        <button className="btn btn-dark justify-content-end" type="button">Change Password</button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">
                        <button className="btn btn-dark justify-content-end" type="button" style={{marginLeft:"5px"}} onClick={LogoutSubmit}>Log Out</button>
                        </Link>
                    </li>      
                 </ul>
        )
    } else {
        buttons = (
            <Link to="/login">
            <button className="btn btn-dark justify-content-end" type="button">Log In</button>
            </Link>
        )
    }
    return ( 
        <nav className="navbar navbar-expand-sm bg-success navbar-dark sticky-top">
            <div className="container-fluid">
                <Link style={{marginLeft: "2%"}} to="/">
                <img
        src="https://webassets.unt.edu/unt-foundation/images/unt_lettermark.svg"
        alt="{data.country}"
        width="30%"
        height="auto"
        /></Link>
                <div className="d-flex" style={{marginRight: "2%"}}>
                    {buttons}
                </div>
            </div>
        </nav>
    );
}
    
export default Nav;