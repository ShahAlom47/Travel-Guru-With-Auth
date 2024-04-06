
import Navbar from "../../Shared Component/Navbar";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../../src/index.css';
import { Pagination } from 'swiper/modules';
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { set } from "firebase/database";

const Home = () => {
    const dImg='https://images.unsplash.com/photo-1618675734190-f1a25ba10073?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const [datas, setDatas] = useState([]);
    const [img,setImg]=useState(null)
    const [slideIdx,setSlidIdx]=useState(1);
    const [slidData, setSlideData]=useState({})
    useEffect(() => {
        fetch('data.json')
            .then((res) => res.json())
            .then((data) => {
                setDatas(data)
                setSlideData(data[1])

            })


    }, [])

console.log(slidData);

    return (


        <div className="  min-h-screen absolute inset-0 bg-cover bg-center " style={{  backgroundImage: `url(${img})`, backgroundSize: 'cover',
        backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gray-900 opacity-80 z-10"></div>


            <div className='z-20'>
                <div className=" flex  z-20">
                    <div className=" w-full  z-20  ">
                        <Navbar color={'text-white'}></Navbar>
                        <div className="flex">
                            <div className="w-3/6 pl-12 flex flex-col justify-center  ">
                                <h1 className="text-6xl font-bold  text-white uppercase ">{slidData?.place_name}</h1>
                                <p className="text-gray-300 w-8/12 my-4">{slidData?.description}</p>

                                <button className="btn bg-[#F9A51A] w-28 border-none rounded-sm font-bold">Booking &#8594; </button>
                            </div>

                            <div className="w-3/6 ">

                                <Swiper
                                  
                                    slidesPerView={4}
                                    centeredSlides={true}
                                    spaceBetween={30}
                                    grabCursor={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                    onSlideChange={(swiper) => {
                                        const activeSlide = datas[swiper.activeIndex];
                                        setSlideData(activeSlide);
                                        setImg(activeSlide.img)
                                        setSlidIdx(swiper.activeIndex)
                                      }}
                                    onSwiper={(swiper) => console.log(swiper)}
                                   
                                >
                                    {
                                        datas.map((data, index) => {
                                            return (
                                                <>
                                                    <SwiperSlide key={index}  >
                                                        
                                                        <div style={{
                                                            backgroundImage: `url(${data.img})`,
                                                            backgroundSize: 'cover',
                                                            backgroundPosition: 'center'
                                                        }} className={`h-[300px] my-10 border-4 ${slideIdx===index?'border-yellow-400':'border-gray-300'} flex items-end rounded-xl`}>
                                                            {/* <img src={data.img} alt="" /> */}
                                                            <p className="text-white  text-3xl font-bold my-10">{data.place_name}</p>
                                                            {console.log()}
                                                        </div>
                                                    </SwiperSlide>

                                                </>
                                            )
                                        })
                                    }

                                </Swiper>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Home;