import Picture from "./lady-photo/Pictute"
import Questions from "./text/Questions";
import Cube from "../../images/illustration-box-desktop.svg";
import "./MainContainer.css"
function MainContainer() {
    return ( 
        <main className="main">
         <img src={Cube} alt="box" className="box" />
            <Picture/>
            <Questions/>
        </main>
     );
}

export default MainContainer;