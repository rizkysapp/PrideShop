import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Layaot } from "../styles/Style";

const NavbarSearch = (props) => {
  return (
    <div className={`${props.action} py-5 w-full order-1 shadow-md border-b`}>
      <div className="relative text-center w-1/2">
        <input className={Layaot.inputSearch} />
        <button>
          <FontAwesomeIcon className="absolute top-2 right-3 text-lg text-slate-50" icon="fa-solid fa-magnifying-glass" />
        </button>
      </div>
    </div>
  );
};

export default NavbarSearch;
