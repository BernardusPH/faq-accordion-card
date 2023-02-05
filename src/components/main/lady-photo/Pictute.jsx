
import MobileMainPic from "../../../images/illustration-woman-online-mobile.svg";
import desktopMainPic from "../../../images/illustration-woman-online-desktop.svg";
import "./Picture.css"
function Picture() {
    
    return ( 
        <div className="picture-container">
           
            
            <picture className="main-pic">
                <source  srcSet={desktopMainPic} media="(min-width:740px)" />
                <img src={MobileMainPic} alt="lady on screen" />
            </picture>
            
        </div>
     );
}

export default Picture;