import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Layaot, Styles } from "../styles/Style";

const MenuHome = () => {
  return (
    <>
      <section className="py-8 bg-gray-100 mt-16">
        <div className={`px-32 ${Styles.flexBatween}`}>
          <button className={Layaot.btnCatagory}>
            <FontAwesomeIcon className=" text-2xl" icon="fa-solid fa-ticket" />
            promo
          </button>
          <button className={Layaot.btnCatagory}>
            <FontAwesomeIcon className=" text-2xl" icon="fa-solid fa-shirt" />
            isFashion
          </button>
          <button className={Layaot.btnCatagory}>
            <FontAwesomeIcon className=" text-2xl" icon="fa-solid fa-mobile-screen-button" />
            alektronik
          </button>
          <button className={Layaot.btnCatagory}>
            <FontAwesomeIcon className=" text-2xl" icon="fa-solid fa-kitchen-set" />
            dapur
          </button>
          <button className={Layaot.btnCatagory}>
            <FontAwesomeIcon className=" text-2xl" icon="fa-solid fa-mosque" />
            barokah
          </button>
          <button className={Layaot.btnCatagory}>
            <FontAwesomeIcon className=" text-2xl" icon="fa-solid fa-money-check-dollar" />
            voucer
          </button>
          <button className={Layaot.btnCatagory}>
            <FontAwesomeIcon className=" text-2xl" icon="fa-solid fa-truck-fast" />
            COD
          </button>
        </div>
      </section>
    </>
  );
};

export default MenuHome;
