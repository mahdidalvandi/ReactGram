import React from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
//to run our Firebase and put Them on a state 
import Signin from './Signin';
import LogOut from './LogOut';
const style = {
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading:`text-blue-400 text-3xl`,
    head:` text-sky-400 text-xs	`
}
const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    return (
        <div className={style.nav}>
            <div>
            <h2 className={style.heading}>React Gram</h2>
            <span className={style.head}>by Mahdi Dalvandi</span>
            </div>
        
         {user ?<LogOut /> : <Signin />}
        </div>
    );
};

export default Navbar;