import Header from "../components/Header";
import ProductList from "../components/ProductList";
import MenuHome from "../components/MenuHome";

function Home() {
  return (
    <div className="relative">
      <Header />
      <MenuHome />
      <ProductList />
    </div>
  );
}

export default Home;
