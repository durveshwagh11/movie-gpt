import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/Firebase';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const toggleSignForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validate the form data
    const message = checkValidData(email, password);
    setErrorMessage(message);
    if (message) return;

    setLoading(true);

    try {
      if (!isSignInForm) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg"
        });
        navigate('/browse');
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user);  
        navigate('/browse');
      }
    } catch (error) {
      setErrorMessage(error.code + " - " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background"
        />
      </div>
      <form onSubmit={handleFormSubmit} className="relative w-3/12 mx-auto p-12 bg-black rounded-lg bg-opacity-80 text-white mt-36">
        <h1 className="font-bold py-4 text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm &&
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-900 rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />}
        <input
          type="email"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-900 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-900 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <p className='text-red-500 font-bold'>{errorMessage}</p>}
        <button
          type="submit"
          className="p-4 my-6 bg-red-600 w-full rounded-md hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 active:scale-95 disabled:bg-gray-500"
          disabled={loading}
        >
          {loading ? "Processing..." : isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignForm}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already a Member? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
