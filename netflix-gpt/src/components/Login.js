import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import {
	checkValidSignInFrom,
	checkValidSignUpFrom,
} from "../utils/validate.js";

const Login = () => {
	const [isSignIn, setIsSignIn] = useState(true);
	const [errorMsg, setErrorMsg] = useState(null);
	const fullName = useRef(null);
	const email = useRef(null);
	const password = useRef(null);
	const toggleForm = () => {
		// Toggle SignUp/SignIn
		setIsSignIn(!isSignIn);
	};
	const handleSignInFormValidation = () => {
		const message = checkValidSignInFrom(
			email.current.value,
			password.current.value
		); // Validate Form
		setErrorMsg(message); // Set error message
	};
	const handleSignUpFormValidation = () => {
		const message = checkValidSignUpFrom(
			fullName.current.value,
			email.current.value,
			password.current.value,
		); // Validate Form
		console.log(message);
		setErrorMsg(message); // Set error message
	};
	return (
		<div className="bg-black/50">
			<Header />
			<div className="min-h-screen w-full h-full ">
				<img
					className="relative w-full min-h-screen z-[-10] object-cover object-left-top"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
					alt="bgImg"
				/>
			</div>
			<div className="w-full flex justify-center ">
				<form
					className="absolute px-16 py-12 text-white font-bold w-[450px] bg-black/60 top-20 left-auto rounded-md flex flex-col gap-4"
					onSubmit={(event) => event.preventDefault()}
				>
					<h1 className="rounded-sm text-4xl font-bold text-white mb-4">
						{isSignIn ? "Sign In" : "Sign Up"}
					</h1>
					{!isSignIn && (
						<input
							ref={fullName}
							type="text"
							placeholder="Full Name"
							className="rounded-md w-full h-full p-4 font-semibold bg-black/50 border border-gray-200/50"
						/>
					)}
					<input
						ref={email}
						type="text"
						placeholder="Email Address"
						className="rounded-md w-full h-full p-4 font-semibold bg-black/50 border border-gray-200/50"
					/>
					<input
						ref={password}
						type="password"
						placeholder="Password"
						className="rounded-md w-full h-full p-4 font-semibold bg-black/50 border border-gray-200/50"
					/>
					{errorMsg && <p className="text-red-500">{errorMsg}</p>}
					<button
						type="submit"
						className="rounded-sm w-full h-full p-2 my-4 bg-red-600 hover:bg-red-700 active:bg-red-900"
						onClick={
							isSignIn
								? handleSignInFormValidation
								: handleSignUpFormValidation
						}
					>
						{isSignIn ? "Sign In" : "Sign Up"}
					</button>
					{isSignIn && (
						<p className="text-center font-semibold">
							Forgot password?
						</p>
					)}
					<p className=" font-normal text-gray-300/80">
						{isSignIn ? "New to Netflix?" : "Already registered?"}{" "}
						<b
							href="#"
							className="text-white font-bold cursor-pointer"
							onClick={toggleForm}
						>
							{isSignIn ? "Sign up now." : "Sign in now"}
						</b>
					</p>
					<p className="font-light text-sm text-gray-300/80">
						This page is protected by Google reCAPTCHA to ensure
						you're not a bot.{" "}
						<b href="#" className="text-blue-800 font-semibold">
							Learn more.
						</b>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
