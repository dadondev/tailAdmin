/** @format */

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { GET_CATEGORIES } from "../../lib/api";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import {
	FileInput,
	FileUploader,
	FileUploaderContent,
	FileUploaderItem,
} from "../inputs/fileUpload";
import { Button } from "../ui/button";
import { DropzoneOptions } from "react-dropzone";

const FormRow = ({
	label,
	name,
	value,
	type,
	fileConfigure,
}: {
	name: string;
	value: string;
	label: string;
	type: string;
	fileConfigure?: {
		files: File[];
		setFile: Dispatch<SetStateAction<File[]>>;
	};
}) => {
	const [datas, setDatas] = useState<string[]>([]);
	const getDatas = async () => {
		const resp = await fetch(GET_CATEGORIES);
		const datas = await resp.json();
		const unique = new Set(["salom"]);
		datas.map((e: { name: string }) => unique.add(e.name));
		setDatas(Array.from(unique.values()).filter((e) => e !== "salom"));
	};
	const dropzoneConfig: DropzoneOptions = {
		accept: {
			"image/*": [".jpg", ".jpeg", ".png", ".gif"],
		},
		maxFiles: 1,
		maxSize: 4 * 1024 * 1024,
		multiple: true,
	};
	useEffect(() => {
		getDatas();
	}, []);
	return (
		<div className='grid gap-2'>
			<Label children={label} />
			{type === "select" ?
				<Select
					defaultValue={value}
					name={name}>
					<SelectTrigger className='w-full'>
						<SelectValue placeholder='Select a fruit' />
					</SelectTrigger>
					<SelectContent className='max-w-[400px]'>
						<SelectGroup className='max-w-full'>
							{datas.length > 0 &&
								datas.map((e, i) => (
									<SelectItem
										className='truncate max-w-[400px]'
										key={i}
										value={e}>
										{e}
									</SelectItem>
								))}
						</SelectGroup>
					</SelectContent>
				</Select>
			: type === "file" && fileConfigure ?
				<FileUploader
					value={fileConfigure.files}
					onValueChange={(file) => (!file ? "" : fileConfigure.setFile(file))}
					dropzoneOptions={dropzoneConfig}
					className='relative max-w-full space-y-1'>
					<FileInput className='border border-dashed border-gray-500'>
						<Button
							type='button'
							variant={"outline"}
							className='w-full h-full'>
							Upload a file
						</Button>
					</FileInput>
					<FileUploaderContent className='h-48'>
						{fileConfigure.files.map((_, i) => {
							return (
								<FileUploaderItem
									key={i}
									index={i}>
									Picture {i + 1}
								</FileUploaderItem>
							);
						})}
					</FileUploaderContent>
				</FileUploader>
			:	<Input
					name={name}
					type={type}
					defaultValue={value}
					min={0}
				/>
			}
		</div>
	);
};

export default FormRow;
