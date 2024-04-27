
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/navbar";
const layout = ({children}) => {
    return (
        <div>
           <Navbar/>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default layout;