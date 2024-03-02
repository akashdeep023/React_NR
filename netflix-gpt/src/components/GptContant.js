import React from "react";
import { useSelector } from "react-redux";
import MoviesPlayer from "./MoviesPlayer";

const GptContant = () => {
	const { gptSearchNames, gptSearchMovies } = useSelector(
		(store) => store.gpt
	);
	if (!gptSearchNames) return null;
	return (
		<div className="min-h-screen px-[5%] py-[2%]">
			<div className=" w-full min-h-screen p-4 backdrop-blur-lg relative">
				{gptSearchNames.map((moviesName, idx) => (
					<MoviesPlayer
						key={moviesName}
						title={moviesName}
						movies={gptSearchMovies[idx]}
					/>
				))}
			</div>
		</div>
	);
};

export default GptContant;
