import { useState } from "react";
import logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => {
	return (
		<a href="/">
			<img className="w-24" alt="logo" src={logo} />
		</a>
	);
};
const Header = () => {
	const [isLogin, setIsLogin] = useState(false);
	const isOnline = useOnline();
	return (
		// <> == React.Fragment
		<>
			<div className="flex justify-between px-3 items-center  shadow">
				<Title />
				<ul className="flex gap-3 text-blue-700 font-bold ">
					<li className="hover:text-orange-500 ">
						<Link to="/">Home</Link>
					</li>
					<li className="hover:text-orange-500 ">
						<Link to="/about">About</Link>
					</li>
					<li className="hover:text-orange-500 ">
						<Link to="/contact">Contact</Link>
					</li>
					<li className="hover:text-orange-500 ">
						<Link to="cart">Cart</Link>
					</li>
					{isLogin ? (
						<button className="hover:text-green-600 "
							id="login"
							onClick={() => {
								setIsLogin(false);
							}}
						>
							{isOnline ? "🟢" : "🔴"} Login
						</button>
					) : (
						<button className="hover:text-orange-500 "
							id="login"
							onClick={() => {
								setIsLogin(true);
							}}
						>
							{isOnline ? "🟢" : "🔴"} Logout
						</button>
					)}
				</ul>
			</div>
			<div id="header-margin"></div>
		</>
	);
};
export default Header;
