import { useState } from "react";
import logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";

const Title = () => {
	return (
		<a href="/">
			<img className="logo" alt="logo" src={logo} />
		</a>
	);
};
const Header = () => {
	const [isLogin, setIsLogin] = useState(false);
	return (
		// <> == React.Fragment
		<>
			<div className="header">
				<Title />
				<ul className="nav-items">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<Link to="cart">Cart</Link>
					</li>
				</ul>
				{isLogin ? (
					<button
						id="login"
						onClick={() => {
							setIsLogin(false);
						}}
					>
						Login
					</button>
				) : (
					<button
						id="login"
						onClick={() => {
							setIsLogin(true);
						}}
					>
						Logout
					</button>
				)}
			</div>
			<div id="header-margin"></div>
		</>
	);
};
export default Header;
