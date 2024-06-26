import Image from 'next/image'
import banner1 from '../../assets/images/banner/1.jpg'
import banner2 from '../../assets/images/banner/2.jpg'
import banner3 from '../../assets/images/banner/3.jpg'
import banner4 from '../../assets/images/banner/4.jpg'
import banner5 from '../../assets/images/banner/5.jpg'
import banner6 from '../../assets/images/banner/6.jpg'

const Banner = () => {
 return (
    <div className="carousel w-full h-[600px]">
    <div id="slide1" className="carousel-item relative w-full">
        <Image width={1920} height={1080} style={{ height: "100%"}} src={banner1} alt="banner" className="w-full rounded-xl object-cover " />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
                <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                    <button className="btn btn-primary mr-5">Discover More</button>
                    <button className="btn btn-outline btn-error">Latest Project</button>
                </div>
            </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full">
        <Image width={1920} height={1080} style={{width: "90vw", height: "100%"}} src={banner2} alt="banner" className="w-full rounded-xl object-cover" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
                <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                    <button className="btn btn-primary mr-5">Discover More</button>
                    <button className="btn btn-outline btn-error">Latest Project</button>
                </div>
            </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full">
        <Image width={1920} height={1080} style={{width: "90vw", height: "100%"}} src={banner3} alt="banner" className="w-full rounded-xl object-cover" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
                <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                    <button className="btn btn-primary mr-5">Discover More</button>
                    <button className="btn btn-outline btn-error">Latest Project</button>
                </div>
            </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full">
        <Image width={1920} height={1080} style={{width: "90vw", height: "100%"}} src={banner4} alt="banner" className="w-full rounded-xl object-cover" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
                <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                    <button className="btn btn-primary mr-5">Discover More</button>
                    <button className="btn btn-outline btn-error">Latest Project</button>
                </div>
            </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">❮</a>
            <a href="#slide5" className="btn btn-circle">❯</a>
        </div>
    </div>

    <div id="slide5" className="carousel-item relative w-full">
        <Image width={1920} height={1080} style={{width: "90vw", height: "100%"}} src={banner5} alt="banner" className="w-full rounded-xl object-cover" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
                <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                    <button className="btn btn-primary mr-5">Discover More</button>
                    <button className="btn btn-outline btn-error">Latest Project</button>
                </div>
            </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">❮</a>
            <a href="#slide6" className="btn btn-circle">❯</a>
        </div>
    </div>

    <div id="slide6" className="carousel-item relative w-full">
        <Image width={1920} height={1080} style={{width: "90vw", height: "100%"}} src={banner6} alt="banner" className="w-full rounded-xl object-cover" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
                <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                    <button className="btn btn-primary mr-5">Discover More</button>
                    <button className="btn btn-outline btn-error">Latest Project</button>
                </div>
            </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide5" className="btn btn-circle mr-5">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
    </div>
</div>
 )
};

export default Banner;