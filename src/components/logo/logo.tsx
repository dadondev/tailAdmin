/** @format */

import { Link } from "@tanstack/react-router";
import React from "react";

const Logo = () => {
	return (
		<Link
			to='/'
			className='text-3xl text-white font-semibold flex gap-3 items-center justify-center'>
			<img
				src='/logo.png'
				alt='logo'
				className='inline-block'
			/>
			TailAdmin
		</Link>
	);
};

export default Logo;
