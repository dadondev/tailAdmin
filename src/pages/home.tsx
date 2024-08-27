import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Cards from "../components/cards/cards";
import { Button } from "../components/ui/button";
import { useDispatch } from "react-redux";
import { toggleSheet } from "../redux/sidebar.slice";

const Home = () => {
    const dispatch = useDispatch()
   
  return <div className="h-full px-5 pt-3">
    <h1 className="text-2xl ">Dashboard</h1>
    <Cards/>
      <Button onClick={()=>dispatch(toggleSheet())} className="text-xl fixed bottom-7 right-7 sm:hidden"><HamburgerMenuIcon/></Button>
  </div>;
};

export default Home;
