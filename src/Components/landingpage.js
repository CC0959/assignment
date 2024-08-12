import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



const Landpage=()=>{
 return( 
      <div className="container-fluid bg-danger">
        <div className="row pt-5">
        <div className=" pt-5 pb-3 col-lg-12 "><FontAwesomeIcon icon={faBars} className="text-warning fs-1 menu"/>
        </div>
         <div className="row pt-5">
         <div className="pt-5 col-lg-12 text-center"><span className="text-warning text-center logo-size">Logo </span><span className="text-info text-center logo-size mr-2">Mart</span>
         </div>
         <div className="row pb-3">
          <div className="col-lg-12 text-center">
          <h6 className="text-info fs-5 pt-4">Create a fashionable  and unique <br/> brandnew logo for businesses</h6>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscab<br/>
         <span className="pl-1"> sit amet dolor ipsum social</span> </p>
         <button className="rad btn-info mt-5 text-danger fs-5 fw-bold pt-3 pb-3">Custom Logo</button>
          </div>
         </div>
          </div>
        </div>
      </div>
    )
  };
  export default Landpage;
  
      