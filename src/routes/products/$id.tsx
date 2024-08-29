/** @format */

import { createFileRoute } from "@tanstack/react-router";
import Products from "../../pages/products";
import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar/sidebar";

export const Route = createFileRoute("/products/$id")({
	// In a loader
	component: PostComponent,
});

function PostComponent() {
	return (
		<Layout>
			<Sidebar />
			<Products />
		</Layout>
	);
}
