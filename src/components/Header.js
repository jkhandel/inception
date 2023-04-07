import { LOGO_URL } from "../utils/constants";
const Header = (props) => {
  
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Home</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;