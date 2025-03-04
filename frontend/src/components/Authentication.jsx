import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../api/authentication';
import { emailRegex, passwordRegex } from '../utlities/validation';

export const PageType = {
  LOGIN: 0,
  REGISTRATION: 1,
};

const initialErrorState = {
  email: '',
  password: '',
  api: '',
};

const Authentication = ({ pageType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(initialErrorState);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors((prev) => ({ ...prev, email: '' }));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrors((prev) => ({ ...prev, password: '' }));
  };

  const validateForm = () => {
    const newErrors = { ...initialErrorState };
    let isValid = true;

    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (!passwordRegex.test(password)) {
      newErrors.password =
        'Password must be at least 8 characters long and contain at least one letter, one number, and one special character';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;

    try {
      let result;
      if (pageType === PageType.LOGIN) {
        result = await loginUser({
          user: {
            email,
            password,
          },
        });
      } else {
        result = await registerUser({
          user: {
            email,
            password,
          },
        });
      }

      handleResponse(result);
    } catch (error) {
      console.error('Unexpected error:', error);
      setErrors((prev) => ({ ...prev, api: 'An unexpected error occurred. Please try again.' }));
    }
  };

  const handleResponse = (result) => {
    if (result.error) {
      setErrors((prev) => ({ ...prev, api: result.error }));
    } else {
      console.log('Success:', result);
      navigate('/');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold text-center mb-6">
        {pageType === PageType.LOGIN ? 'Login' : 'Register'}
      </h1>

      <form onSubmit={handleSubmitForm} className="space-y-4">
        <div>
          {pageType === PageType.LOGIN ? (
            <p>
              Not a user?{' '}
              <Link to="/register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </p>
          ) : (
            <p>
              Already a user?{' '}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
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
            value={password}
            onChange={handlePasswordChange}
            className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
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
