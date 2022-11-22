import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import React from 'react';
import GoogleButton from "react-google-button"
import google from "../components/google.png"
import { auth } from '../firebase';
const style={
    wrapper: `flex justify-center`,
    button: `bg-blue-400	 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`
}

const signWithGoogle =()=>{
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth , provider)
}

const Signin = () => {
    return (
        <div className={style.wrapper}>
            <button className={style.button} onClick={signWithGoogle}>Sign in with  <img src={google} style={{display: "inline"}} /></button>
        </div>
    );
};

export default Signin;