
import './Serviceslayout.css'
import { Link } from "react-router-dom";



function Serviceslayout(props){
    return(
        
        <div className="servicelayoutContainer">

        <div className='services_layout'>
        <div className="servisecontent">
            <img src={props.wpicon} alt="Website" />
            <h3 className='servicetitle'> {props.wptitle}</h3>
            <p className='servicedescription'>{props.wpdescription}</p>
            <button><Link to='/software' className='wordpressbtn' >Know More</Link></button>

        </div>
        </div>

        <div className='services_layout'>
        <div className="servisecontent">
            <img src={props.websiteicon} alt="Website" />
            <h3 className='servicetitle'> {props.websitetitle}</h3>
            <p className='servicedescription'>{props.websitedescription}</p>
            <button><Link to='/website' className='wordpressbtn' >Know More</Link></button>

        </div>
        </div>


        <div className='services_layout'>
        <div className="servisecontent">
            <img src={props.mobileappicon} alt="Website" />
            <h3 className='servicetitle'> {props.mobileapptitle}</h3>
            <p className='servicedescription'>{props.mobileappdescription}</p>
            <button><Link to='/app' className='wordpressbtn' >Know More</Link></button>

        </div>
        </div>


        <div className='services_layout'>
        <div className="servisecontent">
            <img src={props.dmarketingicon} alt="Website" />
            <h3 className='servicetitle'> {props.dmarketingtitle}</h3>
            <p className='servicedescription'>{props.dmarketingdescription}</p>
            <button > Know More</button>

        </div>
        </div>



        <div className='services_layout'>
        <div className="servisecontent">
            <img src={props.cwritingicon} alt="Website" />
            <h3 className='servicetitle'> {props.cwritingtitle}</h3>
            <p className='servicedescription'>{props.cwritingdescription}</p>
            <button onClick={props.serviceKnowmorebnt}> Know More</button>

        </div>
        </div>


        <div className='services_layout'>
        <div className="servisecontent">
            <img src={props.hostingicon} alt="Website" />
            <h3 className='servicetitle'> {props.hostingtitle}</h3>
            <p className='servicedescription'>{props.hostingdescription}</p>
            <button> Know More</button>

        </div>
        </div>
        </div>
        
    )
}

export default Serviceslayout;