const Shimmer = () => {
	return (
		<div>
			<div className="main-home-shimmer">
				<div class="outer_circle">
					<div class="inner_circle">
						<i class="fa-solid fa-pizza-slice fa-fade"></i>
					</div>
				</div>
				<h2>Looking for great food near you ...</h2>
			</div>
			<div className="body-box-res body-box">
				{/* <div className="search-box-shimmer">
					<div className="search-shimmer"></div>
				</div> */}
				<div className="main-card">
					{Array(20)
						.fill("")
						.map((elem, idx) => {
							return (
								<div
									className="shimmer card"
									key={"shimmer-menu" + idx}
								>
									<div className="img-box img-shimmer"></div>
									<div className="box-shimmer big-shimmer"></div>
									<div className="box-shimmer"></div>
									<div className="box-shimmer"></div>
									<div className="box-shimmer"></div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};
const ShimmerOther = () => {
	return (
		<>
			<div className="body-box-res body-box">
				<div className="search-box-shimmer">
					<div className="search-shimmer"></div>
				</div>
				<div className="main-card">
					{Array(20)
						.fill("")
						.map((elem, idx) => {
							return (
								<div
									className="shimmer card"
									key={"shimmer-menu" + idx}
								>
									<div className="img-box img-shimmer"></div>
									<div className="box-shimmer big-shimmer"></div>
									<div className="box-shimmer"></div>
									<div className="box-shimmer"></div>
									<div className="box-shimmer"></div>
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
};
export const ShimmerMenu = () => {
	return (
		<div id="res-menu">
			<div id="res-menu-box">
				<div id="res-menu-name" className="shimmer-menu">
					<div>
						<div></div>
						<div></div>
						<div></div>
						<br />
						<div></div>
						<div></div>
					</div>
					<div className="shimmer-box-menu"></div>
				</div>
				<div id="res-menu-price" className="shimmer-box-menu">
					<h4>&nbsp;</h4>
				</div>
				<div id="res-menu-img" className="shimmer-box-menu"></div>
			</div>
			<div id="res-menu-off">
				{Array(4)
					.fill("")
					.map((item, idx) => {
						return (
							<div id="res-menu-offbox" key={"res-off" + idx}>
								<div className="shimmer-box-menu">&nbsp;</div>
								{/* <div className="shimmer-box-menu">&nbsp;</div> */}
							</div>
						);
					})}
			</div>
			<div id="res-menu-cardbox">
				<div id="res-menu-cardb">
					<div className="shimmer-box-menu">&nbsp;</div>
					{Array(10)
						.fill("")
						.map((item, i) => {
							return (
								<div
									id="res-menu-cardele"
									key={"res-menu-card" + i}
								>
									<div>
										<div className="shimmer-box-menu">
											&nbsp;
										</div>
										<div className="shimmer-box-menu">
											&nbsp;
										</div>
										<div className="shimmer-box-menu">
											&nbsp;
										</div>
									</div>
									<div className="menu-img shimmer-box-menu"></div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default Shimmer;
