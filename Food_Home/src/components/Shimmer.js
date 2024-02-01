const Shimmer = () => {
	return (
		<>
			<div className="search-shimmer"></div>
			<div className="main-card">
				{Array(20)
					.fill("")
					.map((elem, idx) => {
						return (
							<div className="shimmer card" key={"shimmer-menu"+idx}>
								<div className="img img-shimmer"></div>
								<div className="box-shimmer big-shimmer"></div>
								<div className="box-shimmer"></div>
								<div className="box-shimmer"></div>
								<div className="box-shimmer"></div>
							</div>
						);
					})}
			</div>
		</>
	);
};
export const ShimmerMenu = () => {
	return(
		<div id="res-menu">
			<div id="res-menu-box">
				<div id="res-menu-name" className="shimmer-menu">
                    <div>
						<div></div>
						<div></div>
						<div></div>
						<br/>
						<div></div>
						{/* <br></br> */}
						<div></div>
                    </div>
                    <div className="shimmer-box-menu">
                    </div>
                </div>
                <div id="res-menu-price" className="shimmer-box-menu">
                    <h4>&nbsp;</h4>
				</div>
				<div id="res-menu-img" className="shimmer-box-menu"></div>
				{/* <img id="res-menu-img" src="" /> */}
			</div>
			<div id="res-menu-off">
				{Array(4).fill("").map((item, idx) => {
					return(
						<div id="res-menu-offbox" key={"res-off"+idx}>
							<div className="shimmer-box-menu">&nbsp;</div>
							<div className="shimmer-box-menu">&nbsp;</div>
						</div>
					)
				})}
			</div>
			<div id="res-menu-cardbox">
				<div id="res-menu-cardb">
						<div className="shimmer-box-menu">&nbsp;</div>
					{Array(10).fill("").map((item, i) => {
						return (
							<div id="res-menu-cardele" key={"res-menu-card"+i}>
								<div>
									<div className="shimmer-box-menu">&nbsp;</div>
									<div className="shimmer-box-menu">&nbsp;</div>
									<div className="shimmer-box-menu">&nbsp;</div>
								</div>
								<div className="menu-img shimmer-box-menu"></div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Shimmer;
