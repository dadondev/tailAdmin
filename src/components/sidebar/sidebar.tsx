import { Link } from '@tanstack/react-router';
import { BsLayoutSidebar, BsShop } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../../redux/sidebar.slice';
import { RxDashboard } from 'react-icons/rx';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { MdOutlineWarehouse } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import MenuLink from './menuLink';
import { AvatarMenu } from '../avatar-menu/component';
import MobSidebar from './mobSidebar';

const Sidebar = () => {
     const dispatch = useDispatch()
    function handleClick (){
        dispatch(toggleSidebar())
    }
    const {open} = useSelector((state:{sidebar:{open:boolean}})=>state.sidebar)
  return <div className='w-full h-full sticky top-0'>
      <MobSidebar/>
    <div data-open={open} className="h-full w-full bg-menu group hidden sm:flex flex-col transition-all group-data-[open=true]:items-center max-h-dvh sticky top-0 group-data-[open=true]:max-w-[250px]">
    <Link className="flex justify-center pt-10" to='/'>
        <img src={open ? "/logo.svg":"/single-logo.svg"} alt="logo" />
    </Link>
    <div className='mt-10 group-data-[open=true]:px-6 transition-all px-2 flex flex-col flex-1 justify-between pb-5'>
<nav><p className='text-darkText-200 text-sm font-medium transition-all hidden group-data-[open=true]:block'>Menu</p>

<div className='grid pt-6'>
    {menus.map((e, i)=>< MenuLink {...e} key={i}/>)}

</div>
</nav>
<div className='flex group-data-[open=false]:justify-center flex-col gap-3 group-data-[open=false]:items-center'>
    <AvatarMenu/>
    <button type='button' onClick={handleClick} className='text-darkText-100 font-medium text-sm flex gap-2 items-center [&>span]:hidden group-data-[open=true]:[&>span]:block transition-all'>
        <BsLayoutSidebar size={24}/>
        <span>Qisqartirish</span>
    </button>
</div>
  </div>
    </div>
  </div>;
};

export default Sidebar;


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