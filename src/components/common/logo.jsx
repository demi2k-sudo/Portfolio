import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

import "./styles/logo.css";

const Logo = (props) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<img src="https://firebasestorage.googleapis.com/v0/b/portfolio-215a2.appspot.com/o/logo.jpg?alt=media&token=6ee84ccf-aa21-4ebc-bad6-68cdd56939b1" alt="logo" className="logo" width={width} />
	);

	return (
		<React.Fragment>
			{link ? <Link to="/">{imageElement}</Link> : imageElement}
		</React.Fragment>
	);
};

export default Logo;
