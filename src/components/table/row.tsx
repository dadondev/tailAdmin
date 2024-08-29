/** @format */

import { MdDelete, MdEdit } from "react-icons/md";
import { Button } from "../ui/button";
import { TableCell, TableRow } from "../ui/table";
import { cardI } from "../cards/card";
import { useDispatch } from "react-redux";
import { preferModal } from "../../redux/model.slice";

const Row = (props: cardI) => {
	const dispatch = useDispatch();
	const { category, title, description, price, id, images } = props;
	const handleEdit = () => {
		dispatch(preferModal({ product: props, type: "edit" }));
	};
	const handleDelete = () => {
		dispatch(preferModal({ product: props, type: "delete" }));
	};
	return (
		<TableRow>
			<TableCell className='font-medium'>
				<img
					src={images[0]}
					alt={"product logo"}
					width={60}
				/>
			</TableCell>
			<TableCell>{id}</TableCell>
			<TableCell>{title}</TableCell>
			<TableCell>{description.slice(0, 100)}</TableCell>
			<TableCell>$ {price}</TableCell>
			<TableCell>{category.name}</TableCell>
			<TableCell className='text-right text-white [&>*]:hover:text-white flex gap-2 justify-end items-center min-h-full'>
				<Button
					variant={"ghost"}
					onClick={() => handleEdit()}
					className='bg-yellow-400 hover:bg-yellow-300'>
					<MdEdit size={20} />
				</Button>
				<Button
					variant={"ghost"}
					onClick={() => handleDelete()}
					className='bg-red-400 hover:bg-red-300'>
					<MdDelete size={20} />
				</Button>
			</TableCell>
		</TableRow>
	);
};

export default Row;
