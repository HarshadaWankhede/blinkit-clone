import "../assets/styles/landingpage.css";
import UserLogin from "./Users/UserLogin";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landingpage">
      <div className="landing-container">
       
        <div className="form-box">
          <UserLogin />
        </div>

        <div className="forgotten-pswd">
          <Link to="/forgot">Forgotten Password?</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
