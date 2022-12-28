import React from 'react';
import logo from '../../Asset/logo.png';
const Footer = () => {
    return (
<footer className="px-4 py-8 dark:bg-gray-800 dark:text-gray-400">
	<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
			<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
				<img src={logo} alt="" className='w-24' />
			</div>
			<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
				<li>
					<a rel="noopener noreferrer" href="#"><span>Privacy  · Terms  · Advertising  · Ad Choices   · Cookies  ·   · Meta © 2022</span></a>
				</li>
				
			</ul>
		</div>
		
	</div>
</footer>
    );
};

export default Footer;