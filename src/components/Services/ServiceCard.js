import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({service}) => {
 console.log(service)
    const { _id, title, img, price } = service;
    return (
        <Link href={`/service/${_id}`}>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <Image width={200} height={200} src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-xl text-orange-500">Price: ${price}</p>
                <div className="card-actions">
                    <Link href={`/`}>
                        <button className="btn btn-primary">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
        </Link>
    );
 
};

export default ServiceCard;