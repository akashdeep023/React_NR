import { useState, useContext } from "react";
// import logo from "../assets/img/foodvilla.png";
import logo from "../assets/img/Aahar-Anek.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
	return (
		<a href="/">
			<img className="logo" alt="logo" src={logo} />
		</a>
	);
};
const Header = () => {
	const [isLogin, setIsLogin] = useState(false);
	const isOnline = useOnline();

	// useContext --------------------------------
	const { user } = useContext(UserContext);

	// Redux Store --------------------------------
	// const cartItem = useSelector((store) => store.cart.items); // ya
	const cartItem = useSelector((store) => {
		return store.cart.items;
	});
	return (
		// <> == React.Fragment
		<>
			<div className="header">
				<Title />
				{/* useContest ----- */}
				<span>
					<b>Hi</b> {user.name}
				</span>
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
					<li className="cart-item-count">
						<Link to="cart">
							Cart <i className="fa-solid fa-cart-shopping"></i>
							<span>{cartItem.length}</span>
						</Link>
					</li>
					{isLogin ? (
						<button
							id="login"
							onClick={() => {
								setIsLogin(false);
							}}
						>
							{isOnline ? "🟢" : "🔴"} Login
						</button>
					) : (
						<button
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
