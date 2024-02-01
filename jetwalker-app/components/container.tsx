import { TitleCard } from '@/components/TitleCard'
import { TheJetWalker } from '@/components/TheJetWalker'
import { Box } from '@/components/jetwalkerdotcom'
import { GroundEffects } from '@/components/groundeffects'
import { RawHoney } from '@/components/rawhoney'
import { WallOfWords } from '@/components/wallOfwords'
import { NavBarLinks } from './NavBar'

export const Container = (): JSX.Element => {
    return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white">
            <TitleCard/>
            <NavBarLinks/>
            <TheJetWalker/>
            <GroundEffects/>
        <div className="grid grid-cols-2 gap-2">
            <RawHoney href='https://open.spotify.com/album/4oSCL9CwfqPQ0B0btSnX6y'/>
            <WallOfWords/>
        </div>
    </div>
    );
  };