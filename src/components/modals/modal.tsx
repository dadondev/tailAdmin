/** @format */

import { useDispatch, useSelector } from "react-redux";
import { Dialog } from "../ui/dialog";
import { cardI } from "../cards/card";
import EditModal from "./editModal";
import { closeModal } from "../../redux/model.slice";
import DeleteModal from "./delete.modal";

const modals = {
	edit: <EditModal />,
	delete: <DeleteModal></DeleteModal>,
};

const Modal = () => {
	const { modalT, open } = useSelector(
		(state: {
			modal: { modalT: "" | "edit" | "delete"; open: boolean; product: cardI };
		}) => state.modal
	);
	const dispatch = useDispatch();
	return (
		<Dialog
			open={open}
			onOpenChange={() => dispatch(closeModal())}>
			{modalT.length > 0 && modalT === "delete" ? modals.delete : modals.edit}
		</Dialog>
	);
};

export default Modal;
