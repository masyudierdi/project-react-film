import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import SuperHero from "./components/SuperHero";
import "./style/landingPage.css";

function App() {
   return (
      <div>
         {/* intro section */}
         <div className="myBG">
            <NavigationBar />
            <Intro />
         </div>
         {/* end of intro */}
         {/* trending section */}
         <div className="trending">
         <Trending/>
         </div>
         {/* end trending */}
         {/* superhero */}
         <div className="superhero">
            <SuperHero/>
         </div>
         {/* superhero end */}
      </div>
   );
}

export default App;
