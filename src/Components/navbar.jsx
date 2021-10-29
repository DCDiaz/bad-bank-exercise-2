import { NavLink } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

function NavBar() {
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark stroke">
      <div className="container-xl">
        <a className="navbar-brand" href="/"><img src="./bank.png" alt="Bank logo"/> First National Bad Bank</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item" data-tip="Bad Bank Home Page">
              <NavLink exact to="/" className="nav-link" activeClassName="active-link">Home</NavLink>
              <ReactTooltip place="bottom" type="dark" effect="solid"/>
            </li>
            <li className="nav-item" data-tip="Create a new Bad Bank account">
              <NavLink to="/CreateAccount/" className="nav-link" activeClassName="active-link">Create Account</NavLink>
            </li>
            <li className="nav-item" data-tip="Log in to your Bad Bank account">
              <NavLink to="/login/" className="nav-link" activeClassName="active-link">Log In</NavLink>
            </li>
            <li className="nav-item" data-tip="Deposit funds to your account">
              <NavLink to="/deposit/" className="nav-link" activeClassName="active-link">Deposit</NavLink>
            </li>
            <li className="nav-item" data-tip="Withdraw funds from your account">
              <NavLink to="/withdraw/" className="nav-link" activeClassName="active-link">Withdraw</NavLink>
            </li>
            <li className="nav-item" data-tip="View everyone's private data">
              <NavLink to="/alldata/" className="nav-link" activeClassName="active-link">All Data</NavLink>
            </li> 
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default NavBar;