import {Link} from 'react-router-dom';


  const  Card = ({image,courseName,description}) =>{



    return(<>
    <div className="col-md-4 mb-4">
        <div className="card">
            <img style={{height:"400px",width:"auto"}}
             src={image}
             alt="img"
             className="card-img-top" />
        </div>
        <div className="card-body">
            <h1 className="card-title">{courseName}</h1>
            <p className="card-text">{description}</p>
            <Link to="" className="btn btn-primary">
            Enroll Now
            </Link>

        </div>
    </div>

    </>)
}
export default Card;