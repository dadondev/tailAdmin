/** @format */

import { createFileRoute } from "@tanstack/react-router";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar/sidebar";
import Settings from "../pages/settings";

export const Route = createFileRoute("/settings")({
	component: () => (
		<Layout>
			<Sidebar />
			<Settings />
		</Layout>
	),
});
