
import { ChangeEvent, useEffect, useState } from "react";
import SingleCard, { cardI } from "./card";
import { getDatas } from "../../actions";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, clearST, giveAllDatas, search } from "../../redux/cards.slice";
import PaginationCard from "./paginationCard";

const Cards = () => {
    const [datas, setDatas ] = useState<cardI[]>([])
   const { currentPagesCards, filter, searchCards, searchText } = useSelector((state:{
    cards:{
        currentPagesCards:cardI[],
        filter:"all"|"cost"|"category",
        searchCards:cardI[],
        searchText:string
    }
   })=>state.cards)
    const dispatch = useDispatch()
    useEffect(()=>{
        getDatas().then((e)=>{
            dispatch(giveAllDatas(e))
        })
    },[])
    useEffect(()=>{
        if(filter === "all") {
            setDatas(currentPagesCards)
        }
    },[currentPagesCards, filter])
    function handleChange(e:ChangeEvent<HTMLInputElement>){
        const text = e.currentTarget.value
        if(text ==="")dispatch(clearST())
        dispatch(search(text))
    }



  return <div className="pt-5">
    <div className="flex justify-between flex-col [&>*]:min-w-full sm:[&>*]:min-w-[auto] items-center gap-2 sm:gap-0 sm:flex-row mb-5">
        <Input type="text" placeholder="Search..." className="w-auto" onChange={handleChange}/>
      <div className="sm:[&>*]:max-w-[120px]">
          <Select onValueChange={(value)=>dispatch(changeFilter(value))}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="cost">Cost</SelectItem>
                <SelectItem value="category">Category</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
      </div>
    </div>
    <div className="flex flex-wrap justify-center gap-10 mb-5">
        {searchText!== ""? searchCards.length > 0? searchCards.map((e:cardI)=><SingleCard {...e} key={e.id}/>) : <div>
            <img src="/search.svg" className="max-w-[300px] mx-auto" alt="nothin search"/>
            <h1 className="text-2xl text-center font-medium">Not Found</h1>
        </div>: datas&& datas.map((e:cardI)=><SingleCard {...e} key={e.id}/>)}
    </div>
<PaginationCard/>
  </div>;
};

export default Cards;
