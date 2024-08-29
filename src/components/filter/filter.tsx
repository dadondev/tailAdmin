/** @format */

import { ChangeEvent } from "react";
import { Input } from "../ui/input";

import { useDispatch } from "react-redux";
import { clearST, search } from "../../redux/cards.slice";

const Filter = () => {
	const dispatch = useDispatch();
	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const text = e.currentTarget.value;
		if (text === "") dispatch(clearST());
		dispatch(search(text));
	}
	return (
		<div className='mb-5 flex justify-between pt-2 pl-px'>
			<Input
				type='text'
				placeholder='Search...'
				className='w-auto'
				onChange={handleChange}
			/>
		</div>
	);
};

export default Filter;
