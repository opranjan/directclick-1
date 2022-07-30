
import './ProjectCompleted.css'


function ProjectCompleted(props){

    return(
 
        <div>
        <div className='pclayout'>
         <div className="iconcontainer">
            <img src={props.actionicon} alt="" />
            </div>
            <h2>{props.numberof }</h2>
           <p>{props.actiontype} </p> 
        </div>
    </div>

    );
}

export default ProjectCompleted