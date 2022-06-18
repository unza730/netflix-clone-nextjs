import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../lib/firebase';
import { useRouter } from 'next/router'
const Header = () => {
    const [show, setShow] = useState()
   
    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => {
            window.removeEventListener("scroll", transitionNavbar);
        };
    }, [])
    const router = useRouter();
    return (
      <>
        <div
          className={`fixed top-0 w-full h-12  z-[10] items-center transition-all duration-500  ease-in ${
            show && "bg-black"
          }`}
        >
          <div className="flex justify-center bg-gray-800 items-center">
            <img
              src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=800&fit=crop&crop=faces&auto=format%2Ccompress"
              alt=""
              className="fixed top-2 left-[20px] h-8 object-contain"
            />
            <img
              src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=800&fit=crop&crop=faces&auto=format%2Ccompress"
              alt=""
              className="fixed top-2 right-[20px] h-8 object-contain"
           onClick={() =>router.push('/profile') }
                    />
          </div>
        </div>
      </>
    );
            
}

export default Header
