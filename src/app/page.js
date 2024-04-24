
import Navbar from '@/components/shared/navbar';
import HomePage from './home/page';
import Footer from '@/components/shared/Footer';

const RootPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HomePage></HomePage>
            <Footer></Footer>
        </div>
    );
};

export default RootPage;