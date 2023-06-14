import axios from "axios";

export const getProducts = async () => {
  const product = await axios.get("https://hplussport.com/api/products");
  return product.data
}

