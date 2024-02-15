import JetWalkerDotComBoard from "./home/home-components/jet-walker-dot-com-board";
import { playSound } from "./howler/test-howler";

export default function Home() {

  console.log("Home function")

  playSound("/100,000 (Unfinished).wav");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white">
      <JetWalkerDotComBoard href="/home"/>
    </div>
  )
}
