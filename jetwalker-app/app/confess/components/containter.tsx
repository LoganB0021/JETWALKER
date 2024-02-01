import { NavBarLinks } from "@/app/components/NavBar";
import { TitleCard } from "./titleCard";

export const Container = () => {
    return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white">
        <TitleCard/>
        <NavBarLinks/>
    </div>
    );
  };