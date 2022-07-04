import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {
	const abouts = [
		// {
		// 	title: 'Fullstack Developer',
		// 	description:
		// 		'Mis conocimientos me permiten desarrollar y trabajar tanto en el frontend como en el backend',
		// 	imgUrl: images.about01,
		// },
		{
			title: 'Frontend Development',
			description: 'React, redux, redux-toolkit',
			imgUrl: images.about02,
		},
		{
			title: 'Backend  Development',
			description: 'Express.js, Sequelize.js, PostreSQL',
			imgUrl: images.about03,
		},
		{
			title: 'Web Design',
			description: 'CSS, SASS, HTML5',
			imgUrl: images.about04,
		},
	];

	return (
		<>
			<h2 className="head-text">
				Se que un <span>buen desarrollo</span> <br />
				significa <span>un buen negocio.</span>
			</h2>

			<div className="app__profiles">
				{abouts.map((about, index) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: 'tween' }}
						className="app__profile-item"
						key={about.title + index}
					>
						<img src={about.imgUrl} alt={about.title} />
						<h2 className="bold-text" style={{ marginTop: 20 }}>
							{about.title}
						</h2>
						<p className="p-text" style={{ marginTop: 10 }}>
							{about.description}
						</p>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(About, 'app__about'),
	'about',
	'app__whitebg',
);

// export default About;
