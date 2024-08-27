import { Link,  useRouterState,  } from "@tanstack/react-router";
import { ReactNode } from "react";

const MenuLink = (e:{url:string, icon:ReactNode, name:string}) => {
    const pathname= useRouterState().location.pathname
  return <Link  to={e.url} data-current={e.url ===pathname} className='data-[current=true]:bg-white/20 data-[current=true]:text-white flex gap-3 items-center group-data-[open=false]:justify-center text-darkText-200 font-medium p-3 group-data-[open=true]:px-4 hover:bg-white/20 hover:text-white transition-all rounded-md'>
    {e.icon}
    <span className='capitalize transition-all group-data-[open=true]:block hidden'>
        {e.name}
    </span>
    </Link>
};

export default MenuLink;
