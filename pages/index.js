
import Login from '../components/Login';
import HomePage from '../components/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { login, logout, selectUser } from '../features/userSlice';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/router';

export default function Home() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const router = useRouter();
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          uid: user.uid,
          email: user.email
        })
        );
      } else {
        dispatch(logout);
        router.push('/')
      }
    })
  }, [onAuthStateChanged]);
  return (
    
    <>
      {user ? (
        <HomePage />
      ) : (
          <Login />
          
      )}
    
    </>
 
  );
}
