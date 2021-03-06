import React, { useState } from 'react';
import { images } from '../../constants';
import './Navbar.scss';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import cv from '../../assets/CV_Mariano_Dunand.pdf';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<img src={images.logo} alt={images.logo} />
			</div>
			<ul className="app__navbar-links">
				{['home', 'about', 'skills', 'work', 'contacto'].map((item) => (
					<li className="app__flex p-text" key={`link-${item}`}>
						<div />
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>
			<div className="app__navbar-menu">
				<HiMenuAlt4 onClick={() => setToggle(true)} />

				{toggle && (
					<motion.div
						whileInView={{ x: [300, 0] }}
						transition={{ duration: 0.85, ease: 'easeOut' }}
					>
						<HiX onClick={() => setToggle(false)} />
						<ul>
							{['home', 'about', 'work', 'skills', 'contacto'].map((item) => (
								<li key={item}>
									<a href={`#${item}`} onClick={() => setToggle(false)}>
										{item}
									</a>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</div>
			<div>
				<button className="app__navbar__button">
					<a href={cv} target="_blank">
						Descargar CV
					</a>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
