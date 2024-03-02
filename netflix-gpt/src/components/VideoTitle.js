import React from "react";

const VideoTitle = ({ title, description }) => {
	return (
		<div className="absolute top-0 left-0 z-20 flex flex-col justify-center bottom-0 w-full pl-10 aspect-video bg-gradient-to-t from-black from-10%">
			<div className="sm:w-1/4 md:1/3 w-2/3">
				<h1
					className="sm:text-5xl text-3xl font-bold mb-2"
					style={{ filter: "drop-shadow(2px 4px 1.5px black)" }}
				>
					{title}
				</h1>
				<p
					className="max-h-24 h-fit line-clamp-4 mb-3 text-sm text-white"
					style={{ filter: "drop-shadow(2px 4px 1.5px black)" }}
				>
					{description}
				</p>
				<button className="px-3 sm:px-4 py-1 sm:py-2 bg-white text-black rounded-md cursor-pointer border border-slate-500 font-semibold text-base sm:text-lg">
					▶️ Play
				</button>
				<button className="px-3 sm:px-5 py-1 sm:py-2 bg-black/30 rounded-md cursor-pointer border border-slate-500 font-semibold text-base sm:text-lg ms-2">
					More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
