import { getAllServices } from "@/utils/getAllServices";

const Services = () => {
const {data} = getAllServices();
console.log(data)


 return (
 <div>
 <h1>This is services component {data.length}</h1>
 </div>
 )
};

export default Services;