
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../lib/firebase';

const SignIn = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((authUser) => {
            console.log(authUser);
        }).catch((err) => {
            alert(err.message);
            console.log(err.message);
        });
        setEmail("");
        setPassword("");
    };
    const register = (e) => {
      e.preventDefault();
    //   console.log("uu");
      createUserWithEmailAndPassword(auth, email, password).then((authUser) => {
          console.log(authUser);
        }).catch((err) => {
          alert(err.message);
          console.log(err);
        });
      setEmail("");
      setPassword("");
    };
  return (
    <div
      className="max-w-[400px] p-[70px] mx-auto rounded-lg"
      style={{ background: `rgba(0,0,0,0.7)` }}
    >
      <form className="grid">
        <h1 className="text-left font-semibold text-xl mb-[25px]">Sign In</h1>
        <input
          value={email}
          type="email"
          placeholder="Email"
          className="outline-none h-[40px] p-2 mb-3 text-black rounded-md"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          className="outline-none  h-[40px] p-2 mb-3 text-black rounded-md"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-3 border-none mt-5 text-base rounded-md bg-[#e50914]"
          onClick={signIn}
        >
          Sign In
        </button>
        <h4 className="text-left space-x-2 mt-[30px]">
          <span className="text-gray-500">New to Netflix?</span>
          <span onClick={register} className="cursor-pointer hover:underline">
            Sign up now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignIn
