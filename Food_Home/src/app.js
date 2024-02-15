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
import React, { Suspense, lazy, useState } from "react";
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
import Login from "./components/Login";
// import ProfileClass from "./components/ProfileClass";

const Cart = lazy(() => import("./components/Cart"));
// Chunking
// Code splitting
// Dynamic Bundling
// Lazy loading
// On Demand Loading
// Dynamic Import

import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
// import RestaurantCollectionsInfo from "./components/RestaurantCollectionsInfo";
const RestaurantCollectionsInfo = lazy(() =>
	import("./components/RestaurantCollectionsInfo")
);
import Shimmer from "./components/Shimmer";
import SearchBox from "./components/SearchBox";
import { Toaster } from "react-hot-toast";

const AppLayout = () => {
	// useContext ----------------------------------------------------------------
	const [user, setUser] = useState({
		name: "Akash deep",
		email: "ad3500476@example.com",
	});
	return (
		<Provider store={store}>
			<UserContext.Provider value={{ user: user, setUser: setUser }}>
				<Toaster
					position="bottot-center"
					reverseOrder={false}
					gutter={30}
					containerClassName="toaster-container"
					toastOptions={{
						className: "toaster-toast",
						duration: 1500,
					}}
				/>
				<Header />
				<Outlet />
				<Footer />
			</UserContext.Provider>
		</Provider>
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
				path: "/search",
				element: <SearchBox />,
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
					<Suspense fallback={<Shimmer />}>
						<Cart />
					</Suspense>
				),
			},
			{
				path: "/restaurant/:resId",
				element: <RestaurantMenu />,
			},
			{
				path: "/collections/:resId",
				element: (
					<Suspense fallback={<Shimmer />}>
						<RestaurantCollectionsInfo />
					</Suspense>
				),
			},
			{
				path: "/login",
				element: <Login />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
