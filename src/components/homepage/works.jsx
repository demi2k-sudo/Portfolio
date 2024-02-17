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
								src="https://firebasestorage.googleapis.com/v0/b/portfolio-215a2.appspot.com/o/isro.png?alt=media&token=eaf5d4f4-f527-415c-a020-654d0406eee6"
								alt="ISRO"
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
								src="https://firebasestorage.googleapis.com/v0/b/portfolio-215a2.appspot.com/o/mlsa.png?alt=media&token=92c703c5-d991-4321-878a-96f44f4df0d1"
								alt="MLSA"
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
