import { Link } from "react-router-dom";

function ButtonJustO({ children, type = "", directon = "" }) {
  return (
    <div className="btn">
      <div className="btn-out">
        <Link to={directon} className={`btn-inner ${type}`}>
          {children}
        </Link>
      </div>
    </div>
  );
}

export default ButtonJustO;
