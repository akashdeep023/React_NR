import { useEffect, useState } from "react";

const Profile = () => {
	const [count, setCount] = useState(0);
	const [user, setUser] = useState({
		name: "Akash Deep",
		login: "akashdeep023",
		bio: "WEB - DEVELOPER ( MERN STACK ) | |  JAVA | PYTHON | DSA  |",
		location: "PATNA, BIHAR",
		html_url: "https://github.com/akashdeep023",
		avatar_url: "https://avatars.githubusercontent.com/u/126412088?v=4",
		followers: 28,
		following: 5,
	});
    /*
     *   Without dependencies array then run every time - })
     *   With dependencies array then run one time - },[])
     *   Use state in dependencies array then run one time -},[count])
     */
	useEffect(() => {
        console.log("Function useEffect");
        const getUserData =async () => {
            const data = await fetch("https://api.github.com/users/akashdeep023")
            const json = await data.json();
            console.log(json);
            if (json.name) {
                setUser(json);
            }
        }
        getUserData()

		// const timer = setInterval(() => {
		// 	console.log("setInterval");
		// }, 1000);
		// return () => clearInterval(timer); //Unmounting
	}, []);
	console.log("Function Render");
	return (
		<div>
            <h1>Profile Page</h1>
            <a href={user.html_url} target="_blank">Github Link</a>
            <h2>{user.name} ({user.login})</h2>
            <h3>{ user.bio }</h3>
            <h3>{user.location}</h3>
            <h3>followers: { user.followers || "--" } || following: { user.following || "--" }</h3>
            <img src={user.avatar_url} />
            <br/>
			<button onClick={() => setCount(count + 1)}>Count: {count}</button>
		</div>
	);
};
export default Profile;
