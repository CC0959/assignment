import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faFile} from '@fortawesome/free-solid-svg-icons';
import { faFileContract } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faClosedCaptioning } from '@fortawesome/free-solid-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
function AssetList(){
    return(
        <div className="container-fluid ml-5">
        <div className="parent pt-5">
           <div className="left-child">
            <div className="image-holder">
             <div className="imagebox1"></div>
            <div className="imagebox2"></div>
            <div className="showbtn"><button className=" newbtn btn bg-warning p-2 rounded"><FontAwesomeIcon icon={faTag} />Asset details</button></div>
            </div>

           </div>
           <div className="right-child">
            <h1>Get awesome logos <br/>only on logomart</h1>
            <p>Start your venture with our more than 10,000<br/> <b>readymade</b> services.</p>
            <div className="mt-3 mb-2"><FontAwesomeIcon icon={faFile} className="icon-spacing" /><span className="text-size">starter files</span></div>
            <div className="mt-1"><FontAwesomeIcon icon={faFileContract} className="icon-spacing"/><span className="text-size">starter icons</span></div>
            <div className="mt-1"><FontAwesomeIcon icon={faIdCard} className="icon-spacing"/><span className="text-size">profile cards</span></div>
            <div  className="mt-1" ><FontAwesomeIcon icon={faExclamation} className="icon-spacing" /><span className="text-size">animated logos</span></div>
            <div className="mt-1"><FontAwesomeIcon icon={faAddressCard}className="icon-spacing" /><span className="text-size">profile templates</span></div>
            <div className="mt-1"><FontAwesomeIcon icon={faClosedCaptioning} className="icon-spacing"/><span className="text-size">video files</span></div>
            <div className="mt-1"><FontAwesomeIcon icon={faLaptop} className="icon-spacing"/><span className="text-size">guide files</span></div>
            <div className="mt-1"><FontAwesomeIcon icon={faAward} className="icon-spacing"/><span className="text-size">PPT templates</span></div>
           </div>
        </div>
        </div>   
    )
}
export default AssetList;