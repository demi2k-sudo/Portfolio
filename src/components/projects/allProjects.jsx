import React, { useEffect } from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";
import Aos from "aos";
import 'aos/dist/aos.css';

const AllProjects = () => {
	useEffect(() => {
		Aos.init({duration:2000});
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index} data-aos='fade-up'>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
