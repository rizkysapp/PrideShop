import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavLink from "./NavLink";
import { Layaot, Styles } from "../styles/Style";
import NavbarSearch from "./NavbarSearch";
import Checkout from "./Checkout";

function Header() {
  const navigate = useNavigate();
  const [iconSearch, setIconSearch] = useState(false);
  const [iconCheckout, setIconCheckout] = useState(false);

  const btnsearch = () => {
    setIconSearch(!iconSearch);
  };

  const checkoutMenu = () => {
    setIconCheckout(!iconCheckout);
  };

  const btnLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <header className={Styles.header}>
        <div className={Styles.navbar}>
          <div className={`space-x-1 cursor-pointer ${Styles.flexCenter}`}>
            <FontAwesomeIcon icon="fa-brands fa-uncharted" className=" text-2xl text-amber-700" />
            <h1 className={Layaot.logoNav}>
              pride<span>shop</span>
            </h1>
          </div>
          <NavLink />
          <div className="flex space-x-3 items-center">
            <button type="button" onClick={btnLogin} className={`mr-3 ${Layaot.btnLogin}`}>
              <a href="login">login</a>
            </button>
            <button className={`py-1 px-3 ${Layaot.btnNavbar}`} onClick={btnsearch}>
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>
            <button className={`py-1 px-3 ${Layaot.btnNavbar}`} onClick={checkoutMenu}>
              <FontAwesomeIcon className="hover:-rotate-6" icon="fa-solid fa-cart-shopping" />
            </button>
          </div>
        </div>
        <NavbarSearch action={iconSearch ? Styles.flexCenter : "hidden"} />
        <Checkout action={iconCheckout ? Styles.flexCenter : "hidden"} />
      </header>
    </>
  );
}

export default Header;
