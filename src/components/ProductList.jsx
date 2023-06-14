import Product from "./Product";

const ProductList = () => {
  return (
    <section className="flex-col mt-14">
      <div className="text-center ">
        <h1 className=" text-3xl capitalize font-bold font-serif text-slate-900">products</h1>
        <p className="text-xs font-extralight text-slate-800">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="overflow-x-scroll px-10 py-10 h-[420px] flex justify-between gap-20 mt-16">
        <Product />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default ProductList;
