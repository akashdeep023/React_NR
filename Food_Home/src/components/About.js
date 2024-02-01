import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import React from "react";

// const About = () => {
// 	const [showProfile, setShowProfile] = useState(false);
// 	return (
// 		<div className="body-box">
// 			<h1>About</h1>
// 			{
// 				showProfile ? <Link to="/about" onClick={()=>{setShowProfile(false)}}>Hide Profile</Link> :
// 				<Link to="profile" onClick={()=>{setShowProfile(true)}}>Show Profile</Link>
// 			}
// 			<Outlet />
// 			<Profile/>
// 		</div>
// 	);
// };
class About extends React.Component {
	constructor(props) {
		super(props);
		console.log("About Constructor")
        this.state = {
            showProfile: false
		};
	}
	componentDidMount() {
        console.log("About ComponentDidMount");
	}
	componentDidUpdate(prevProps, prevState) {
        console.log("About ComponentDidUpdate");
	}
	componentWillUnmount() {
        console.log("About ComponentWillUnmount");
    }
	render() {
		console.log("About Render")
		return (
			<div className="body-box">
				<h1>About Page</h1>
				{
					this.state.showProfile ? <Link to="/about" onClick={() => { this.setState({ showProfile: false }) }}>Hide Profile</Link> :
						<Link to="profile" onClick={() =>  { this.setState({ showProfile: true }) }}>Show Profile</Link>
				}
				<Outlet />
				{/* <ProfileClass /> */}
			</div>
		);
	}
};
export default About;
