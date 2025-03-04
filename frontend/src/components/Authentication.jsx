import PropTypes from 'prop-types';
import { useState } from 'react';
import { emailRegex,passwordRegex } from '../utlities/validation';
import { Link } from 'react-router-dom';
import { loginUser, registerUser } from "../api/authentication";
import { useNavigate } from 'react-router-dom';

export const PageType = {
  LOGIN: 0,
  REGISTRATION: 1,
};

const InitialErrorState = {
  email: "",
  password: "",
  api: ""
}

const Authentication = ({ pageType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(InitialErrorState);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors((prev) => ({ ...prev, email: "" }));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrors((prev) => ({ ...prev, password: "" }));
  };

  const validateForm = () => {
    const newErrors = { ...InitialErrorState };
    let isValid = true;

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must be at least 8 characters long and contain at least one letter and one number and one spacial character";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    const newErrors = { ...errors };
    if (isValid) {
      if(pageType === PageType.LOGIN){
        const result = loginUser({
          "user":{
              "email":email,
              "password":password
          }
      });
        if(result.error){
          newErrors.api = result.error;
          setErrors(newErrors);
        }
        else
        {
          navigate('/');
        }
      }
      else{
        const result = registerUser({
          "user":{
              "email":email,
              "password":password
          }
      });
        console.log(result);
        if(result.error){
          newErrors.api = result.error;
          setErrors(newErrors);
        }
        else
        {
          navigate('/');
        }
      }
    }
  };

  return (
    <div className="w-full mx-auto max-w-md px-6 py-8 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold text-center mb-6">
        {pageType === PageType.LOGIN ? 'Login' : 'Register'}
      </h1>
      
      <form onSubmit={handleSubmitForm} className="flex flex-col space-y-4">
        <div>
          {pageType === PageType.LOGIN ? (
            <p>
              Not a user? 
              <Link to="/register" className="text-blue-500 hover:underline mx-1">Register</Link>
            </p>
          ) : (
            <p>
              Already a user? 
              <Link to="/login" className="text-blue-500 hover:underline mx-1">Login</Link>
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">User Name</label>
          <input
            type="text"
            placeholder="Enter username"
            value = {email}
            onChange={handleEmailChange}
            className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value = {password}
            onChange={handlePasswordChange}
            className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">
          {pageType === PageType.LOGIN ? 'Login' : 'Register'}
        </button>
        {errors.api && <p className="text-red-500 text-sm text-center">{errors.api}</p>}
      </form>
    </div>
  );
};

Authentication.propTypes = {
  pageType: PropTypes.number.isRequired,
};

export default Authentication;
