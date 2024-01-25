/***
 * Parcel ----------------------------------------------------------------
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Faat build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatable with older versions of browsers
 * HTTPS on dev
 * port Number
 * Consistent Hashing Alogorithm
 * Zero Config
 * Tree Shaking -Removing un-wanted
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTML (DOM)

// const heading = React.createElement(
// 	"h1",
// 	{ key: "h1" },
// 	"Hello Akash with React packages"
// );

// // console.log(heading) // heading is a object
// const heading2 = React.createElement(
// 	"h2",
// 	{ key: "h2" },
// 	"Hello Akash with React Owesomes"
// );
// const container = React.createElement("div", { id: "container" }, [
// 	heading,
// 	heading2,
// ]);

// JSX -------
// JSX => React.createElement => Object => HTML (DOM) (babel does all the conversion)
const heading = (
	<h1 id="h1" key="h1">
		Hello JSX
	</h1>
);

// React Component
// Functional component - new way of writing component
// Class component - old way of writing component

// Title component is Functional component
// const Title = () => <h1 id="title">Hello JSX Function</h1>;
const Title = () => {
	return <h1 id="title">Hello JSX Function component</h1>;
};

// HeaderComponent is Functional Component
const HeaderComponent = function () {
	return (
		<div>
			{/* JSX used */}
			{heading}
			{/* Functional Component used */}
			<Title />
			{/* {Title()} */}
			{/* <Title></Title> */}
			<h2>HeaderComponent</h2>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);
root.render(<HeaderComponent />);
