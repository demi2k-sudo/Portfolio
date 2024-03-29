import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";
import transition from "../components/transition";
import "./styles/about.css";
import Aos from "aos";
import 'aos/dist/aos.css';
const About = () => {
	useEffect(() => {
		Aos.init({duration:2000});
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container" data-aos = 'fade-up'>
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
							</div>

							<div className="about-left-side" data-aos = 'fade-up'>
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="https://firebasestorage.googleapis.com/v0/b/portfolio-215a2.appspot.com/o/about.jpg?alt=media&token=1d0b0f04-26a0-4db3-88bd-6b93bc1964f8"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials " data-aos = 'fade-up'>
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile" data-aos = 'fade-up'>
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default transition(About);
