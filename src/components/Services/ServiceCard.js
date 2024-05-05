import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({service}) => {
 console.log(service)
    const { _id, title, img, price,description } = service;
    return (
        
        <div className="w-96 bg-base-100 border shadow-lg h-[470px]">
            <figure className="pt-8 px-10">
                <Image width={300} height={100} style={{height: "180px"}} src={img} alt="Services" className="border" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions">
                    {
                    description.length > 100 ? <p>{description.slice(0, 100)}...</p> : <p>{description}</p>
                    }
                </div>
                <p className="text-xl text-orange-500">Price: ${price}</p>
                <Link href={`/service/${_id}`}>
            <button className="btn btn-error">View Details</button>
            </Link>
            </div>
            
        </div>
        
    );
 
};

export default ServiceCard;