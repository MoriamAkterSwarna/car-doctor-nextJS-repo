import ServiceCard from "./ServiceCard";


const Service = async() => {
    const res = await fetch('http://localhost:3000/api/services');
    const result = await res.json()
    console.log(result.result )

    const {result:data } = result

 
    
     return (
        <div className="mt-4">
        <div className="text-center">
            <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
            <h2 className="text-5xl">Our Service Area</h2>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
           
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                data.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }
        </div>
    </div>
     )
    };
    

export default Service;