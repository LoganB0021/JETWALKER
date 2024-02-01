import { TitleCard } from '@/app/components/TitleCard'
import { TheJetWalker } from '@/app/components/TheJetWalker'
import { Box } from '@/app/components/jetwalkerdotcom'
import { GroundEffects } from '@/app/components/groundeffects'
import { RawHoney } from '@/app/components/rawhoney'
import { WallOfWords } from '@/app/components/wallOfwords'
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