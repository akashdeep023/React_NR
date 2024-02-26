import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
	const mainMovies = useSelector((store) => store.movies?.nowPlayingMovies);
	if (!mainMovies) return;
	const { title, overview, id } = mainMovies[13];
	return (
		<div className="bg-black">
			<VideoTitle title={title} description={overview} />
			<VideoBackground videoId={id} />
		</div>
	);
};

export default MainContainer;
