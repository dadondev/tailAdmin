/** @format */

import MenuAccardion from "./menuAccardion";
import MenuLink from "./menuLink";

type MenuAccardionT = {
	name: string;
	icon: string;
	children: {
		type: "pro" | "simple";
		children: string;
		to: string;
	}[];
};

const accordionDatas: MenuAccardionT[] = [
	{
		name: "Dashboard",
		icon: "/menu.png",
		children: [
			{
				children: "eCommerce",
				type: "pro",
				to: "/",
			},
			{
				children: "Analytics",
				type: "simple",
				to: "/",
			},
			{
				children: "Marketing",
				type: "pro",
				to: "/",
			},
			{
				children: "CRM",
				type: "pro",
				to: "/",
			},
		],
	},
	{
		name: "Task",
		icon: "/list.png",
		children: [
			{
				children: "List",
				type: "pro",
				to: "/",
			},
			{
				children: "Kanban",
				type: "pro",
				to: "/",
			},
		],
	},
	{
		name: "Forms",
		icon: "/capital-latter.png",
		children: [
			{
				children: "Form Elements",
				type: "simple",
				to: "/",
			},
			{
				children: "Form Layout",
				type: "pro",
				to: "/",
			},
			{
				children: "Form Validation",
				type: "pro",
				to: "/",
			},
		],
	},
	{
		name: "Pages",
		icon: "/page.png",
		children: [
			{
				children: "Settings",
				type: "simple",
				to: "/",
			},
			{
				children: "File Manager",
				type: "pro",
				to: "/",
			},
			{
				children: "Data Tables",
				type: "pro",
				to: "/",
			},
			{
				children: "Error Page",
				type: "pro",
				to: "/",
			},
			{
				children: "Pricing Tables",
				type: "pro",
				to: "/",
			},
			{
				children: "Mail Success",
				type: "pro",
				to: "/",
			},
		],
	},
	{
		name: "UI Elements",
		icon: "/layout.png",
		children: [
			{
				children: "Alearts",
				type: "simple",
				to: "/",
			},
			{
				children: "Buttons",
				type: "simple",
				to: "/",
			},
			{
				children: "Buttons Group",
				type: "pro",
				to: "/",
			},
			{
				children: "Badge",
				type: "pro",
				to: "/",
			},
			{
				children: "Breadcrumb",
				type: "pro",
				to: "/",
			},
			{
				children: "Cards",
				type: "pro",
				to: "/",
			},
			{
				children: "Dropdowns",
				type: "pro",
				to: "/",
			},
			{
				children: "Modals",
				type: "pro",
				to: "/",
			},
			{
				children: "Tabs",
				type: "pro",
				to: "/",
			},
			{
				children: "Tooltips",
				type: "pro",
				to: "/",
			},
			{
				children: "Popovers",
				type: "pro",
				to: "/",
			},
			{
				children: "Accordion",
				type: "pro",
				to: "/",
			},
			{
				children: "Notifications",
				type: "pro",
				to: "/",
			},
			{
				children: "Pagination",
				type: "pro",
				to: "/",
			},
			{
				children: "Progress",
				type: "pro",
				to: "/",
			},
			{
				children: "Carousel",
				type: "pro",
				to: "/",
			},
			{
				children: "Images",
				type: "pro",
				to: "/",
			},
			{
				children: "Videos",
				type: "pro",
				to: "/",
			},
		],
	},
	{
		name: "Authentication",
		icon: "/login.png",
		children: [
			{
				children: "Sign In",
				type: "simple",
				to: "/",
			},
			{
				children: "Sign Up",
				type: "simple",
				to: "/",
			},
			{
				children: "Reset Password",
				type: "pro",
				to: "/",
			},
		],
	},
];

const Menu = () => {
	return (
		<div className='h-full'>
			<div className='mb-6'>
				<h1 className='text-darkColorSecondary font-medium text-sm uppercase'>
					MENU
				</h1>
				<div className='mt-4 grid gap-2'>
					<MenuAccardion
						{...accordionDatas[0]}
						active
					/>
					<MenuLink
						children={"Calendar"}
						icon='/calendar.png'
						to='/'
					/>
					<MenuLink
						children={"Profile"}
						icon='/user.png'
						to='/'
					/>
					<MenuAccardion
						{...accordionDatas[1]}
						active={false}
					/>
					<MenuAccardion
						{...accordionDatas[2]}
						active={false}
					/>
					<MenuLink
						children={"Tables"}
						icon='/table.png'
						to='/'
					/>
					<MenuAccardion
						{...accordionDatas[3]}
						active={false}
					/>
				</div>
			</div>
			<div className='mb-6'>
				<h1 className='text-darkColorSecondary font-medium text-sm uppercase'>
					Support
				</h1>
				<div className='mt-4 grid gap-2'>
					<MenuLink
						children={"Messages"}
						icon='/msg.png'
						to='/'
						badge='5'
					/>
					<MenuLink
						children={"Inbox"}
						icon='/user.png'
						to='/'
						badge='Pro'
					/>
					<MenuLink
						children={"Invoice"}
						icon='/invoice.png'
						to='/'
						badge='Pro'
					/>
				</div>
			</div>
			<div className='mb-6'>
				<h1 className='text-darkColorSecondary font-medium text-sm uppercase'>
					Others
				</h1>
				<div className='mt-4 grid gap-2'>
					<MenuLink
						children={"Chart"}
						icon='/chart.png'
						to='/'
					/>
					<MenuAccardion
						{...accordionDatas[4]}
						active={false}
					/>
					<MenuAccardion
						{...accordionDatas[5]}
						active={false}
					/>
				</div>
			</div>
		</div>
	);
};

export default Menu;
