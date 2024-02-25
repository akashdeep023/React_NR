import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {APP_LOGO} from '../utils/constants';
const Header = () => {
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
				navigate("/error");
			});
	};
	const dispatch = useDispatch();
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, photoURL } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					})
				);
				navigate("/browse");
			} else {
				dispatch(removeUser());
				navigate("/");
			}
		});
		return () => unsubscribe();
	}, []);
	return (
		<div className="absolute sm:px-[10%] px-3 filter flex justify-between items-center w-full">
			<img
				className="w-40 sm:w-48 contrast-200"
				src={APP_LOGO}
				alt="logo"
			/>
			{user?.photoURL && (
				<div className="flex gap-4 items-center">
					<img
						className="h-12 w-12 rounded-lg"
						src={user.photoURL}
						alt="userLogo"
					/>
					<span
						className="ml-2 text-gray-400 font-bold cursor-pointer hover:text-white"
						onClick={handleSignOut}
					>
						Logout
					</span>
				</div>
			)}
		</div>
	);
};

export default Header;
