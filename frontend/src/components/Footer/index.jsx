import { Link } from "react-router-dom";
import SFooter from "./style";

function Footer() {
  return (
    <SFooter>
      <div className="container-footer">
        <p className="text">
          <Link to="/legalnotice">Legal Notice</Link>
        </p>
        <p>
          <Link to="/contact">Contact</Link>
        </p>
      </div>
    </SFooter>
  );
}

export default Footer;
