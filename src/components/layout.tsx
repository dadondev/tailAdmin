import { ReactNode } from "@tanstack/react-router";
import {  useSelector } from "react-redux";

const Layout = ({children}:{children:ReactNode}) => {
    const {open} =  useSelector((state:{sidebar:{open:boolean}})=> state.sidebar)

  return <>
  <div data-open={open} className="h-full grid sm:data-[open=true]:grid-cols-[250px_1fr] sm:grid-cols-[60px_1fr] transition-all">
    {children}
  </div>

  </>;
};

export default Layout;
