function Footer(){
    return(
<div className="container-fluid bg-warning pt-5">
    <div className="row pb-5">
        <div className="col-lg-4 text-center pb-5">
            <h4>Create your brand logo</h4>
            <p className="pb-5">No cost logo</p>
            <h5> service terms</h5>
        </div>
        <div className="col-lg-4 text-center pb-5">
        <h4>Help</h4>
            <p className="pb-5">Have query? Ask for help</p>
            <h5>Regulations</h5>
        </div>
        <div className="col-lg-4 text-center pb-5">
        <h4>Tutorials</h4>
            <p>Check out our free tutorials</p>
            
        </div>
    </div>
    <div className="row pb-5">
        <div className="col-lg-6 parent-left pb-5">
            <div className="leftdiv bg-danger divmargin"></div>
            <div className="leftdiv bg-success"></div>
           
        </div>
        <div className="col-lg-4 parent-right pb-5">
            <div className="leftdiv bg-danger"></div>
            <div className="leftdiv bg-success divmargin"></div>
        </div>
    </div>
</div>
    )
}
export default Footer;