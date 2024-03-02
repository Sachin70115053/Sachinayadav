import { clubsData } from "../data"
import "./Cards.css"
import {Link} from 'react-router-dom'




const Cards=()=>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };




    return(


        <div className="outer">
            <div className="inner">
            <Slider {...settings}>
                {clubsData.map((d)=>(
                    <div>

                        <div className="mp">
                            <img className="image" src={d.img} />
                        </div>

                        <div className="description">
                        <p>{d.title}</p>

                     <Link to='/abinay'>
                        <button>Read More</button>
                        </Link>
                        
                        </div>


                         
                    </div>
                ))}

                </Slider> 

            </div>


        </div>



    )
    
}

export default  Cards