import Head from "next/head";
import { useState } from "react";
import SignIn from "./SignIn";

const Login = () => {
    const [signIn, setSignIn] = useState(false)
  return (
    <div
      className="relative h-full"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/77c2f28b-b041-49dd-ac18-428925dea6be/PK-en-20220516-popsignuptwoweeks-perspective_alpha_website_medium.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <Head>
        <title>Netflix - Login</title>
      </Head>
      <div>
        <img
          src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=800&fit=crop&crop=faces&auto=format%2Ccompress"
          alt=""
          className="fixed left-0 w-[150px] object-contain pl-5 pt-5"
        />
        <button
          className="fixed right-[20px] object-contain mt-5  py-[5px] px-[20px] font-semibold text-lg text-white bg-[#e50914]"
          onClick={() => setSignIn(true)}
        >
          Sign In
        </button>
        <div
          className="w-full h-[100vh] z-10"
          style={{
            background: "rgba(0,0,0,0.5)",
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%),`,
          }}
        />
        <div className="absolute top-[30%] mx-auto w-full text-center z-10 text-white p-5">
                  {signIn ? (
                  <SignIn />
                  ): (
                  <>
            <h1 className="text-5xl mb-5">
              Unlimited movies, TV shows and more.
            </h1>
            <h2 className="text-3xl font-normal mb-[30px]">
              Watch anywhere, Cancel anytime
            </h2>
            <h3 className="text-xl mb-5">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="h-[30px]">
              <form>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="max-w-[600px] w-[40%] p-4 outline-none"
                />
                <button
                  className="px-4 py-4 text-basse border-none bg-[#e50914]"
                  onClick={() => setSignIn(true)}
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
          )}
                     
        </div>
      </div>
    </div>
  );
}

export default Login
