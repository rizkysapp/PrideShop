import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const Dasbord = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [exp, setExp] = useState("");
  const history = useNavigate();

  useEffect(() => {
    refreshToken();
    getUsers();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:3000/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.userName);
      setExp(decoded.exp);
    } catch (error) {
      if (error.response) {
        history("/login");
      }
    }
  };

  console.log(token);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:3000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
  };

  return (
    <div>
      <Header />
      <p className="text-2xl font-extrabold mt-28">Dasbord {name}</p>
      <button onClick={getUsers}>check</button>
    </div>
  );
};

export default Dasbord;
