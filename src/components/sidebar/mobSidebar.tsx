
import { useDispatch, useSelector } from "react-redux";
import { Sheet, SheetContent,  SheetHeader } from "../ui/sheet";
import { toggleSheet } from "../../redux/sidebar.slice";
import { AvatarMenu } from "../avatar-menu/component";
import {  BsShop } from "react-icons/bs";
import MenuLink from "./menuLink";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineWarehouse } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const MobSidebar = () => {
    const {sheet} = useSelector((e:{sidebar:{
        sheet:false
    }})=>e.sidebar)
    const dispatch = useDispatch()
  return <Sheet open={sheet} onOpenChange={()=>dispatch(toggleSheet())} >
  <SheetContent className="bg-menu text-white">
    <SheetHeader className="mb-10">
     
    </SheetHeader>
    <div className="group flex flex-col justify-between h-full pb-10" data-open="true">
      <div>
          {menus.map((e, i)=>< MenuLink {...e} key={i} />)}
      </div>
      <div className="flex gap-3 items-center">
        <AvatarMenu/> <span>Sozlamalar</span>
      </div>
    </div>
  </SheetContent>
</Sheet>
};

export default MobSidebar;




const menus = [
    {
        name:"dashboard",
        icon:<RxDashboard />,
        url:"/"
    },
   {
    name: "Sotuv bolimi",
    icon:<RiMoneyDollarCircleLine />,
       url:"/sale"
   },
    {
        name:"magazin",
        icon:<BsShop />,
           url:"/store"

    },
    {
        name:"omborxona",
        icon:<MdOutlineWarehouse />,
            url:"/warehouse"
    },
    {
        name:"Sozlamalar",
        icon:<IoSettingsOutline />,
         url:"/settings"
    }
]