import { Link } from "react-router-dom";
import SFooter from "./style";

function Footer() {
  return (
    <SFooter>
      <div className="containerFooter">
        <p className="text">
          <Link to="/legalnotice">Legal Notice</Link>
        </p>
        <p>
          <Link to="/">Home Page</Link>
        </p>
      </div>
    </SFooter>
  );
}

export default Footer;
