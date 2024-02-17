import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./isro.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">ISRO Propulsion Complex</div>
							<div className="work-subtitle">
								Data Science Intern
							</div>
							<div className="work-duration">2023 Aug (2 weeks)</div>
						</div>

						<div className="work">
							<img
								src="./mlsa.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Microsoft Learn</div>
							<div className="work-subtitle">
								Student Ambassador - Beta
							</div>
							<div className="work-duration">2023 Nov - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
