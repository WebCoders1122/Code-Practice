import React, { useState } from "react";
import { app } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      console.log(value)
    );
  };
  return (
    <div className='signup_page'>
      <label
        htmlFor='email'
        className=' text-xl font-bold drop-shadow-lg m-2'>
        Email:
      </label>
      <input
        className='bg-slate-50 border py-2 px-4 m-1 rounded-md text-gray-600 font-semibold'
        type='email'
        id='email'
        placeholder='Your Email...'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <br />
      <label
        htmlFor='password'
        className=' text-xl font-bold drop-shadow-lg m-2'>
        Password:
      </label>
      <input
        className='bg-slate-50 border py-2 px-4 m-1 rounded-md text-gray-600 font-semibold'
        type='password'
        id='password'
        placeholder='Your Password...'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <br />
      <button
        onClick={createUser}
        className='bg-slate-600 text-white text-2xl font-bold py-2 px-5 m-3 rounded-lg'>
        Sign Up
      </button>
    </div>
  );
};

export default SignUpPage;
