const Title = () => {
	return (
		<a href="/">
			<img
				className="logo"
				alt="logo"
				src="https://img.freepik.com/free-vector/food-house-logo-template-design_460848-17086.jpg?w=826&t=st=1705943466~exp=1705944066~hmac=41e5d9489a2ce1827a485b789385e4333e727460504681f1488b802dd2a157a3"
			/>
		</a>
	);
};
const Header = () => {
	return (
		// <> == React.Fragment
		<div className="header">
			<Title />
			<ul className="nav-items">
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</div>
	);
};
export default Header;