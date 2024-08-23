/** @format */

import { createRootRoute, Outlet } from "@tanstack/react-router";
import Sidebar from "../components/sidebar/sidebar";
import Header from "@/components/header/header";

export const Route = createRootRoute({
	component: () => (
		<div className='h-full w-full grid lg:grid-cols-[280px_1fr]'>
			<Sidebar />
			<div className='h-full grid grid-rows-[auto_1fr]'>
				<Header />
				<Outlet />
			</div>
		</div>
	),
});
