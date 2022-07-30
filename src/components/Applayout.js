
import './Applayout.css'




function Applayout(props){
    return(
        <div >
        <div className='appservicelayout'>
        <div className="appserviseheading">
            <img src={props.serviceicon} alt="Website" />
            <h3> {props.apptitle}</h3>
        </div>
        <div>
        <p className='appservicedescription'> {props.appdescription}</p>
        </div>
        </div>
        </div>
    )
}

export default Applayout;