import React, { useEffect, useRef, useState } from 'react';
import './Work.scss';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import { SiVercel } from 'react-icons/si';
import { ImGithub } from 'react-icons/im';

const Work = () => {
	const carousel = useRef();
	const projects = [
		{
			title: 'Pokemon App',
			url: 'https://app-pokedex-pi.vercel.app/',
			imgUrl: images.pokemon,
			description: 'Futura description',
		},
		{
			title: 'yoVoy!',
			url: 'http://',
			imgUrl: images.yovoy,
			description: 'Futura description',
		},
		{
			title: 'ReduxToolKit Crud',
			url: 'http://',
			imgUrl: images.rtkCcrud,
			description: 'Futura description',
		},
		{
			title: 'Netflix Clone',
			url: 'http://',
			imgUrl: images.netflix,
			description: 'Futura description',
		},
	];

	return (
		<div>
			<h2 className="head-text">
				Proyectos <span>realizados</span>
			</h2>
			<motion.div ref={carousel} className="slider-container">
				<motion.div
					drag="x"
					dragConstraints={{ left: -700, right: 0 }}
					className="slider"
				>
					{projects.map((project, index) => (
						<motion.div
							whileInView={{ opacity: 1 }}
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.5, type: 'tween' }}
							className="app__work-item"
							key={project.title + index}
						>
							<div className="Card_bg">
								<img
									src={project.imgUrl}
									draggable="false"
									alt={project.title}
								/>
								<div className="Card_bg_li">
									<a href={project.url}>
										<ImGithub size={50} />
									</a>
									<a href={project.url}>
										<SiVercel size={50} />
									</a>
								</div>
								{/* <div className="Card_bg_li">
									<a href={project.url}>
										<ImGithub size={60} />
									</a>
								</div> */}
							</div>
							<h2 className="bold-text" style={{ marginTop: 20 }}>
								{project.title}
							</h2>
							<p className="p-text" style={{ marginTop: 10 }}>
								{project.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

// return (
// 	<div className="app__profiles">
// 		{projects.map((project, index) => (
// 			<a href={project.url}>
// 				<motion.div
// 					whileInView={{ opacity: 1 }}
// 					whileHover={{ scale: 1.1 }}
// 					transition={{ duration: 0.5, type: 'tween' }}
// 					className="app__profile-item"
// 					key={project.title + index}
// 				>
// 					<img src={project.imgUrl} alt={project.title} />
// 					<h2 className="bold-text" style={{ marginTop: 20 }}>
// 						{project.title}
// 					</h2>
// 					<p className="p-text" style={{ marginTop: 10 }}>
// 						{project.description}
// 					</p>
// 				</motion.div>
// 			</a>
// 		))}
// 	</div>
// );
// };

export default AppWrap(MotionWrap(Work, 'app__work'), 'work', 'app__whitebg');

// export default AppWrap(Work, 'work');
