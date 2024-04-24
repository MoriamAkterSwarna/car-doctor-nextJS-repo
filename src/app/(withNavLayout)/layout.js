import Navbar from "@/components/shared/navbar";

const layout = ({children}) => {
 return (
 <div>
 <Navbar></Navbar>
 {children}
 </div>
 )
};

export default layout;