import "./Mentors.css" 
import {Link} from 'react-router-dom'

 const Mentors=()=>{
  return( <div className="Mentor-block">

        <div className="block">
        <Link to='/yourpersonal'>

            <h3 className="text">Your Mentors</h3>
            </Link>

        </div>

        <div className="block">

            <Link to='/yourmentors'>
            <h3 className="text">
                Mentors
            </h3>
            </Link>

        </div>

    </div>)

 }

 export default Mentors;