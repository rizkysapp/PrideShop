import { Link } from "react-router-dom";
import { MenuLink } from "../constants/index";
import { Layaot } from "../styles/Style";

const NavLink = () => {
  return (
    <nav className="flex space-x-8 capitalize">
      {MenuLink.map((menu, i) => {
        return (
          <Link key={i} to={menu.to} className={`${Layaot.menuLink}`}>
            {menu.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLink;
