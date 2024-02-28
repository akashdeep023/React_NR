import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
	const mainMovies = useSelector((store) => store.movies?.nowPlayingMovies);
	if (!mainMovies)
		return (
			<div className="bg-black text-white h-screen text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold flex justify-center items-center p-4">
				<h2 className="text-center">
					Use VPN otherwise movies won't show up...
				</h2>
			</div>
		);
	const { title, overview, id } = mainMovies[13];
	return (
		<div className="bg-black">
			<VideoTitle title={title} description={overview} />
			<VideoBackground videoId={id} />
		</div>
	);
};

export default MainContainer;
