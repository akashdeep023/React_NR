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
 **/

// import abc from "abc"; => default import abc = exports default abc;
// import {xyz} from "xyz"; => name import xyz = export const xyz = "xyz";
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
// import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from "./components/Profile";
// import ProfileClass from "./components/ProfileClass";

const Cart = lazy(() => import("./components/Cart"));
// Chunking
// Code splitting
// Dynamic Bundling
// Lazy loading
// On Demand Loading
// Dynamic Import

const AppLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
				children: [
					{
						path: "profile",
						element: <Profile />,
						// element: <ProfileClass />,
					},
				],
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/cart",
				element: (
					<Suspense fallback={<h1>Shimmer effect on card</h1>}>
						<Cart />
					</Suspense>
				),
			},
			{
				path: "/restaurant/:resId",
				element: <RestaurantMenu />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
