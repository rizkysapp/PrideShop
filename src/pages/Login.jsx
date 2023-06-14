import { Link, useNavigate } from "react-router-dom";
import { Layaot, Styles } from "../styles/Style";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const history = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    console.log("klik");
    try {
      await axios.post("http://localhost:3000/login", {
        email: email,
        password: password,
      });
      history("/dasbord");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <section className={`h-screen ${Styles.flexCenter}`}>
      <div className={Layaot.borLogin}>
        <form className="space-y-6" action="#" onSubmit={login}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our PrideShop</h5>
          <div>
            <label className={Styles.label}>Your email</label>
            <input type="email" id="email" className={Styles.input} placeholder="name@company.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className={Styles.label}>Your password</label>
            <input type="password" id="password" placeholder="••••••••" className={Styles.input} value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="text-red-800 text-sm">
            <p>{msg}</p>
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className={Styles.checkbox} required />
              </div>
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <a href="lost" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
              Lost Password?
            </a>
          </div>
          <button type="submit" className={Layaot.btnPageLogin}>
            Login to your account
          </button>
          <div className="text-center text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link to="/signup" className="text-blue-700 hover:underline dark:text-blue-500">
              Create account
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
