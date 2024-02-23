import React, {useEffect} from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import {addUser, removeUser } from "../utils/userSlice";
const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/browse",
		element: <Browse />,
	},
]);

const Body = () => {
	const userStore = useSelector((store) => store.user)
	const dispatch = useDispatch()
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName,photoURL } = user;
				dispatch(addUser({uid: uid, email: email, displayName: displayName , photoURL: photoURL}))

			} else {
				dispatch(removeUser());
			}
		  });
	}, [])
	return (
		<div>
			<RouterProvider router={appRouter} />
		</div>
	);
};

export default Body;
