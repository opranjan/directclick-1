import './Pricing.css'



function Pricing(props){
    return(
        <div>
        <div className="pricingdetailContainer">

        <div className="Pricingdetails">
        <div className="pricingcontent">
            <h3 className='pricingtitle'>{props.basicwdpricetitle}</h3>
            <div className='price'>
            <h4 > Rs.{props.basicwdprice}</h4>
            </div>
            <ul>
                <li>Duration : 10 Working Days</li>
                <li>Space : 10 GB</li>
                <li> Domain : yes</li>
                <li> RAM : 2 GB</li>
            </ul>
            {/* <button>Learn more</button> */}

        </div>
        </div>




        <div className="Pricingdetails">
        <div className="pricingcontent">
            <h3 className='pricingtitle'>{props.businesswdpricetitle}</h3>
            <div className='price'>
            <h4 > Rs.{props.businesswdprice}</h4>
            </div>
            <ul>
                <li>Duration : 18 Working Days</li>
                <li>Space : 10 GB</li>
                <li> Domain : yes</li>
                <li> RAM : 4 GB</li>
            </ul>
            {/* <button>Learn more</button> */}

        </div>
        </div>





        <div className="Pricingdetails">
        <div className="pricingcontent">
            <h3 className='pricingtitle'>{props.newswdpricetitle}</h3>
            <div className='price'>
            <h4 > Rs.{props.newswdprice}</h4>
            </div>
            <ul>
                <li>Duration : 14 Working Days</li>
                <li>Space : 50 GB Shared Web Hosting Space</li>
                <li> Domain : yes</li>
                <li> RAM : 4 GB</li>
            </ul>
            {/* <button>Learn more</button> */}

        </div>
        </div>




        <div className="Pricingdetails">
        <div className="pricingcontent">
            <h3 className='pricingtitle'>{props.ecommercewdpricetitle}</h3>
            <div className='price'>
            <h4 > Rs.{props.ecommercewdprice}</h4>
            </div>
            <ul>
                <li>Duration : 15 Working Days</li>
                <li>Space : 25 GB</li>
                <li> Domain : yes</li>
                <li> RAM : 6 GB</li>
            </ul>
            {/* <button>Learn more</button> */}

        </div>
        </div>









        </div>
        </div>
    )
}

export default Pricing;