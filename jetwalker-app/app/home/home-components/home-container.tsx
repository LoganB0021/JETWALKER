import HomeTitleCard from './home-title-card'
import JetWalkerLogoAnim from './jet-walker-logo-anim'
import GroundEffects from './ground-effects'
import RawHoney from './raw-honey'
import WallOfWords from './wall-of-words'
import NavBar from './nav-bar'

const HomeContainer = (): React.JSX.Element => {
    return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white">
            <HomeTitleCard/>
            <NavBar/>
            <JetWalkerLogoAnim/>
            <GroundEffects/>
        <div className="grid grid-cols-2 gap-2">
            <RawHoney href='https://open.spotify.com/album/4oSCL9CwfqPQ0B0btSnX6y'/>
            <WallOfWords/>
        </div>
    </div>
    );
  };

  export default HomeContainer;