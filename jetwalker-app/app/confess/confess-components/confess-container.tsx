import NavBar from "@/app/home/home-components/nav-bar";
import  ConfessTitleCard from "./confess-title-card";

const ConfessContainer = (): React.JSX.Element => {
    return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white">
        <ConfessTitleCard/>
        <NavBar/>
    </div>
    );
  };

  export default ConfessContainer;