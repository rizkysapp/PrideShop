import { Styles } from "../styles/Style";
import { useState } from "react";

const Checkout = (props) => {
  const [numItem, setNumItem] = useState(0);

  if (numItem < 0) {
    setNumItem(0);
  }

  return (
    <div className={`${props.action} flex-col fixed top-16 right-1 z-20`}>
      <div className="bg-slate-700 text-slate-50 w-60 rounded-md shadow-xl py-2 px-5">
        <h1 className="text-center mb-5 border-b text-xl capitalize font-semibold">check out</h1>
        <div>
          <div className={Styles.flexBatween}>
            <h3 className=" text-lg capitalize font-medium">product 1</h3>
            <div className="flex  border gap-2 px-2 rounded-md text-sm">
              <button className=" border-r pr-2" onClick={() => setNumItem(numItem - 1)}>
                -
              </button>
              <span>{numItem}</span>
              <button className=" border-l pl-2" onClick={() => setNumItem(numItem + 1)}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
