
import { MdDelete, MdEdit } from "react-icons/md";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useNavigate } from "@tanstack/react-router";

const SingleCard = ({category, id, title, price, description, images}:cardI) => {
    const navigate = useNavigate()
  return <div className="border rounded-md p-3 max-w-[278px]">
    <div className="max-w-[250px] max-h-[250px] mb-2">
        <img src={images[0]} alt="image" width={250} height={250} className="rounded-md hover:object-cover transition-all"/>
    </div>
    <Separator className="mb-2"/>
    <article>
        <div className="grid grid-cols-[auto_auto_1fr] gap-1">
            <h1 className="text-darkText-100">Sarlavha:</h1>
            <p className="truncate">{title}</p>
        </div>
          <div className="grid grid-cols-[auto_auto_1fr] gap-1">
            <h1 className="text-darkText-100">Izoh:</h1>
            <p className="truncate">{description}</p>
        </div>
            <div className="grid grid-cols-[auto_auto_1fr] gap-1">
            <h1 className="text-darkText-100">Kategoriya:</h1>
            <p className="truncate">{category.name}</p>
        </div>
        <div className="grid grid-cols-[auto_auto_1fr] gap-1">
            <h1 className="text-darkText-100">Narx:</h1>
            <p className="truncate">$ {price}</p>
        </div>
        <Separator  className="my-2"/>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Button className="p-3" variant={"outline"}><MdEdit/></Button>
            <Button className="p-3" variant={"outline"}><MdDelete/></Button></div>
          <Button variant={"link"} onClick={()=>navigate({to:"/products/"+id})}>Show</Button>
        </div>
    </article>
  </div>;
};

export default SingleCard;

export interface cardI {
category:{
    id:number, name:string, image:string
},
id:number, name:string, images:string[],
price:number,
title:string,
description:string
}