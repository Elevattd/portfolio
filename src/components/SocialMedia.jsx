import React from 'react';
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
	return (
		<div className="app__social">
			<div>
				<a
					href="http://www.instagram.com/marianoo9"
					target="_blank"
					rel="noreferrer"
				>
					<BsInstagram />
				</a>
			</div>
			<div>
				<a href="https://github.com/Elevattd">
					<BsGithub />
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/mariano-dunand"
					target="_blank"
					rel="noreferrer"
				>
					<BsLinkedin />
				</a>
			</div>
		</div>
	);
};

export default SocialMedia;
