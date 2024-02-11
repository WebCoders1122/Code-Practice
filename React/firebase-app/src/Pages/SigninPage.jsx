import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

let auth = getAuth(app);

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log("Sign in Success"))
      .catch((err) => console.log(err));
  };
  return (
    <div className='signin_page'>
      <h1 className='heading text-3xl font-bold m-4 mt-10'>Sign in Form</h1>
      <label
        htmlFor='sign-in-email'
        className=' text-xl font-bold drop-shadow-lg m-2'>
        Email:
      </label>
      <input
        className='bg-slate-50 border py-2 px-4 m-1 rounded-md text-gray-600 font-semibold'
        type='email'
        id='sign-in-email'
        placeholder='Your Email...'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <br />
      <label
        htmlFor='sign-in-password'
        className=' text-xl font-bold drop-shadow-lg m-2'>
        Password:
      </label>
      <input
        className='bg-slate-50 border py-2 px-4 m-1 rounded-md text-gray-600 font-semibold'
        type='password'
        id='sign-in-password'
        placeholder='Your Password...'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <br />
      <button
        onClick={signInUser}
        className='bg-slate-600 text-white text-2xl font-bold py-2 px-5 m-3 rounded-lg'>
        Sign In
      </button>
    </div>
  );
};

export default SigninPage;
