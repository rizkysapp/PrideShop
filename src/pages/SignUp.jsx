import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layaot, Styles } from "../styles/Style";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const history = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      history("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <section className={`h-screen ${Styles.flexCenter}`}>
      <div className={Layaot.borLogin}>
        <form className="space-y-6" onSubmit={Register}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign up to our PrideShop</h5>
          <div>
            <label className={Styles.label}>Your name</label>
            <input type="name" className={Styles.input} placeholder="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label className={Styles.label}>Your email</label>
            <input type="email" className={Styles.input} placeholder="name@company.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className={Styles.label}>Password</label>
            <input type="password" placeholder="••••••••" value={password} className={Styles.input} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div>
            <label className={Styles.label}>Confirm password</label>
            <input type="password" placeholder="••••••••" value={confPassword} className={Styles.input} onChange={(e) => setConfPassword(e.target.value)} required />
            <p className=" text-red-800 text-sm">{msg}</p>
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input id="terms" aria-describedby="terms" type="checkbox" className={Styles.checkbox} required="" />
            </div>
            <div className="ml-3 text-sm">
              <label className="font-light text-gray-500 dark:text-gray-300">
                I accept the <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500">Terms and Conditions</Link>
              </label>
            </div>
          </div>
          <button type="submit" className={Layaot.btnPageLogin}>
            Create in account
          </button>
          <div className="text-left text-sm font-medium text-gray-500 dark:text-gray-300">
            Already have an account?
            <Link className="text-blue-700 hover:underline dark:text-blue-500" to="/login">
              Login here
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
