
import Navbar from "../../Shared Component/Navbar";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../../src/index.css';
import { Pagination } from 'swiper/modules';

const Home = () => {



    return (


        <div className="  min-h-screen absolute inset-0 bg-cover bg-center " style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1618675734190-f1a25ba10073?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
            <div className="absolute inset-0 bg-gray-900 opacity-80 z-10"></div>


            <div className='z-20'>
                <div className=" flex  z-20">
                    <div className=" w-full  z-20  ">
                        <Navbar color={'text-white'}></Navbar>
                        <div className="flex">
                            <div className="w-2/6 ">

                            </div>

                            <div className="w-4/6 ">

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
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide><div className="bg-red-200 h-[400px] my-10 border-4">Cok's Bazar</div></SwiperSlide>
                                    <SwiperSlide><div className="bg-red-300 h-[400px] my-10 border-4">Slide 1</div></SwiperSlide>
                                    <SwiperSlide><div className="bg-red-400 h-[400px] my-10 border-4">Slide 1</div></SwiperSlide>
                                    <SwiperSlide><div className="bg-red-500 h-[400px] my-10 border-4">Slide 1</div></SwiperSlide>
                                    <SwiperSlide><div className="bg-red-600 h-[400px] my-10 border-4">Slide 1</div></SwiperSlide>

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