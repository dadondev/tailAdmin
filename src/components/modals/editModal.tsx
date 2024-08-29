/** @format */

import { useDispatch, useSelector } from "react-redux";
import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "../ui/dialog";
import { cardI } from "../cards/card";
import FormRow from "./formRow";
import { Button } from "../ui/button";
import { FormEvent, useState } from "react";
import { PUT_PRODUCT } from "../../lib/api";
import { updateProduct } from "../../redux/cards.slice";
import { closeModal } from "../../redux/model.slice";

const EditModal = () => {
	const { product } = useSelector(
		(state: { modal: { product: cardI } }) => state.modal
	);
	const [files, setFile] = useState<File[]>([]);
	const dispatch = useDispatch();

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		const form = new FormData(event.currentTarget);
		const datasName = ["title", "description", "price", "category", "file"];
		let datasObj = {};
		datasName.forEach((name) => {
			if (name === "file") {
				datasObj = { ...datasObj, images: files };
				return;
			}
			datasObj = { ...datasObj, [name]: form.get(name) };
		});
		const resp = await fetch(PUT_PRODUCT + product.id, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
			method: "PUT",
			body: JSON.stringify(datasObj),
		});

		const data = await resp.json();
		dispatch(updateProduct(data));
		dispatch(closeModal());
	}

	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle className='text-center'>Tahrirlash</DialogTitle>
				<DialogDescription className='text-center'>
					Iltimos tahrirlash jarayonida e'tiborli bo'ling!
				</DialogDescription>
			</DialogHeader>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit(e);
				}}
				className='grid gap-3'>
				<FormRow
					label={"Sarlavha"}
					name='title'
					type='text'
					value={product.title}
				/>
				<FormRow
					label={"Izoh"}
					name='description'
					type='text'
					value={product.description}
				/>
				<FormRow
					label={"Narxi"}
					name='price'
					type='number'
					value={product.price + ""}
				/>
				<FormRow
					label={"Kategoriya"}
					name='category'
					type='select'
					value={product.category ? product.category.name : ""}
				/>
				<FormRow
					label={"Kategoriya"}
					name='file'
					type='file'
					value={product.category ? product.category.name : ""}
					fileConfigure={{
						files,
						setFile,
					}}
				/>
				<Button
					variant={"default"}
					type='submit'>
					Yuborish
				</Button>
			</form>
		</DialogContent>
	);
};

export default EditModal;
