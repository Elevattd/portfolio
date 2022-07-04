import React from 'react';
import './Work.scss';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';

const Work = () => {
	const projects = [
		{ title: '', url: 'http://', imgUrl: '', description: '' },
		{ title: '', url: 'http://', imgUrl: '', description: '' },
		{ title: '', url: 'http://', imgUrl: '', description: '' },
	];

	return (
		<div className="app__profiles">
			{projects.map((project, index) => (
				<motion.div
					whileInView={{ opacity: 1 }}
					whileHover={{ scale: 1.1 }}
					transition={{ duration: 0.5, type: 'tween' }}
					className="app__profile-item"
					key={project.title + index}
				>
					<img src={project.imgUrl} alt={project.title} />
					<h2 className="bold-text" style={{ marginTop: 20 }}>
						{project.title}
					</h2>
					<p className="p-text" style={{ marginTop: 10 }}>
						{project.description}
					</p>
				</motion.div>
			))}
		</div>
	);
};

export default AppWrap(MotionWrap(Work, 'app__work'), 'work', 'app__whitebg');

// export default AppWrap(Work, 'work');
