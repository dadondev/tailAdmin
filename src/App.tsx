/** @format */

import { useEffect, useState } from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "./components/ui/table";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { singleProductT } from "./types/types";
import { Button } from "./components/ui/button";
import {
	ArrowLeftIcon,
	ArrowRightIcon,
	HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import SheetSide from "./components/sheet/sheetSide";

export const BASE_URL = "https://api.escuelajs.co/api/v1/";

const App = () => {
	const [loading, setLoading] = useState(false);
	const [offset, setOffset] = useState(0);
	const [limit] = useState(10);
	const [open, setOpen] = useState(false);
	const [data, setData] = useState<singleProductT[]>([]);
	const getData = async () => {
		const url = BASE_URL + `products?offset=${offset}&limit=${limit}`;
		const resp = await fetch(url);
		const data = await resp.json();
		setData(data);
	};
	const deleteData = async (id: number) => {
		const url = BASE_URL + `products/${id}`;
		const resp = await fetch(url, {
			method: "DELETE",
		});
		const data = await resp.json();
		return data;
	};
	const handleDelete = (id: number) => {
		setData((array) => {
			return array.filter((prod) => prod.id !== id);
		});
		deleteData(id).then(() => {
			console.log("ok");
		});
	};
	const handleClick = async (type: "back" | "right") => {
		try {
			if (type === "back") {
				setLoading(true);
				setOffset(offset - limit);
				await getData();
				return;
			} else if (type === "right") {
				setOffset(offset + limit);
				setLoading(true);
				await getData();
				return;
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		getData();
	}, []);
	return (
		<div className='max-h-full w-full overflow-auto px-3'>
			<Button
				onClick={() => setOpen(true)}
				className='absolute bottom-5 right-5 z-20 w-14 h-14 rounded-full'>
				<HamburgerMenuIcon
					width={30}
					height={30}
				/>
			</Button>
			<SheetSide
				open={open}
				setOpen={setOpen}
			/>
			<div className='max-w-[1000px] w-full mx-auto pt-4'>
				<Table className='w-[1000px] overflow-auto'>
					<TableCaption>A list of your recent invoices.</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead>Image</TableHead>
							<TableHead className='w-[100px]'>ID</TableHead>
							<TableHead>Category</TableHead>
							<TableHead>Title</TableHead>
							<TableHead className='text-right'>Price</TableHead>
							<TableHead className='text-right'>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{data.map((e) => (
							<TableRow key={e.id}>
								<TableCell className='font-medium'>
									<img
										width={50}
										height={50}
										src={e.images[0]}
										alt={e.title}
									/>
								</TableCell>
								<TableCell className='font-medium'>{e.id}</TableCell>
								<TableCell>{e.category.name}</TableCell>
								<TableCell>{e.title}</TableCell>
								<TableCell className='text-right'>$ {e.price}.00</TableCell>
								<TableCell className='text-right flex justify-end gap-2'>
									<Button
										className='inline-block border-none'
										variant={"outline"}>
										<FiEdit2 />
									</Button>
									<Button
										onClick={() => handleDelete(e.id)}
										className='inline-block border-none text-red-500'
										variant={"outline"}>
										<FiTrash />
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
					<TableFooter className='min-w-full flex justify-between mx-auto mt-3'>
						<Button
							disabled={loading}
							onClick={() => handleClick("back")}>
							<ArrowLeftIcon />
						</Button>
						<Button
							disabled={loading}
							onClick={() => handleClick("right")}>
							<ArrowRightIcon />
						</Button>
					</TableFooter>
				</Table>
			</div>
		</div>
	);
};

export default App;
