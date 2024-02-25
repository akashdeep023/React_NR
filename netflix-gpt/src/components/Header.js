import React from "react";
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import {useNavigate} from "react-router-dom"
import { useSelector } from "react-redux";
const Header = () => {
	const navigate = useNavigate();
	const user = useSelector((store)=>store.user)
	const handleSignOut = () => {
		signOut(auth).then(() => {
			// Sign-out successful.
			navigate("/");
		  }).catch((error) => {
			  // An error happened.
			  navigate("/error")
		  });
	}
	return (
		<div className="absolute sm:px-[10%] px-3 filter flex justify-between items-center w-full">
			<img
				className="w-40 sm:w-48 contrast-200"
				src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
				alt="logo"
			/>
			{user && <div className="flex gap-4 items-center">
				<img className="h-14 w-14 rounded-lg" src={user.photoURL || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"} alt="userLogo" />
				<span className="ml-2 text-gray-400 font-bold cursor-pointer hover:text-white" onClick={handleSignOut}>Logout</span>
			</div>}
		</div>
	);
};

export default Header;
