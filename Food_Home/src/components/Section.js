import { useState } from "react";

const Section = ({ title, description, isVisibal, setIsVisible }) => {
	// Lifting the state up ----------------------------------------------------------------
	// const [isVisibal, setIsVisible] = useState(false);
	return (
		<div className="section-box">
			<div>
				<h2 className="section-title">{title}</h2>
				{isVisibal ? (
					<>
						<button
							className="section-btn"
							onClick={() => setIsVisible(false)}
						>
							Hide
						</button>
					</>
				) : (
					<button
						className="section-btn"
						onClick={() => setIsVisible(true)}
					>
						Show
					</button>
				)}
			</div>
			<p className={`section-des ${isVisibal ? "visible" : "hidden"}`}>
				{isVisibal && description}
			</p>
		</div>
	);
};
export default Section;
