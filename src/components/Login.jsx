import { useState } from "react"
import Header from "./Header"
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header/>
      <div>
        <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
        alt="logo" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto rounded-lg bg-opacity-80  right-0 left-0 text-white">
        <h1 className="font-bold py-4 text-3xl">{isSignInForm ?  "Sign In" : "Sign Up"}</h1>
        { !isSignInForm &&
        <input 
          type="text" 
          placeholder="Full Name" 
          className="p-2 my-2 w-full bg-gray-900 rounded-lg" 
        />}
        <input 
          type="email" 
          placeholder="Email Address"  
          className="p-2 my-2 w-full bg-gray-900 rounded-lg"
        />
        <input 
          type="password" 
        placeholder="Password" 
          className="p-2 my-2 w-full bg-gray-900 rounded-lg" 
        />
        <button 
        className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ?  "Sign In" : "Sign Up"}
          </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignForm}>
          {isSignInForm ?  "New to Netflix? SignUp Now" : "Already a Member? SignIn Now"}
        </p>
      </form>
    </div>
    
  )
}

export default Login
