/** @format */

import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/model.slice";
import { Button } from "../ui/button";
import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "../ui/dialog";
import { PUT_PRODUCT } from "../../lib/api";
import { cardI } from "../cards/card";
import { deleteProductByID } from "../../redux/cards.slice";

const DeleteModal = () => {
	const { id } = useSelector(
		(state: { modal: { product: cardI } }) => state.modal.product
	);
	const dispatch = useDispatch();
	const handleCancel = () => {
		dispatch(closeModal());
	};
	const deleteProduct = async () => {
		const resp = await fetch(PUT_PRODUCT + id);
		handleCancel();
		const data = await resp.json();
		if (data.id) dispatch(deleteProductByID(data.id));
	};
	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle className='text-center'>
					Siz mahsulotni o'chirmoqdasiz!
				</DialogTitle>
				<DialogDescription className='text-center'>
					Iltimos e'tiborli bo'ling o'chirilgan ma'lumotlarni qayta tiklab
					bo'lmaydi!
				</DialogDescription>
			</DialogHeader>
			<div className='flex justify-between'>
				<Button
					variant={"ghost"}
					type='button'
					onClick={handleCancel}>
					Bekor qilish
				</Button>
				<Button
					variant={"destructive"}
					type='button'
					onClick={deleteProduct}>
					O'chirish
				</Button>
			</div>
		</DialogContent>
	);
};

export default DeleteModal;
