import { useRouteError ,Link } from "react-router-dom";
const Error = () => {
    const { status, statusText } = useRouteError();
	return (
		<div>
			<h1>Oops!!</h1>
			<h2>Something went wrong.</h2>
			<h3>{status + " " + statusText}</h3>
			<Link to="/">Back Home</Link>
		</div>
	);
};
export default Error;
