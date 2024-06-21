
import {Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '../../assets/images/patient-avatar.png';
import {HiStar} from 'react-icons/hi';
const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
        <Swiper
         modules={[Pagination]} 
         spaceBetween={30} 
         slidesPerView={1} 
         pagination={{clickable:true}}
         breakpoints={{
            640:{
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768:{
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024:{
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }}
        >
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt=""/>
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                Carden Smith
                            </h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p classname="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                    I had a fantastic experience with Medicare! The staff were incredibly friendly and attentive, and I felt like my concerns were heard and addressed. The doctors were knowledgeable and took the time to explain everything to me in a way that I could understand. I highly recommend Medicare for anyone looking for quality healthcare.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt=""/>
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                Remus Lupin
                            </h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p classname="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                    I recently had a virtual consultation with Medicare, and I must say, it was a game-changer! Being able to speak with a healthcare provider from the comfort of my own home was incredibly convenient and saved me a lot of time. The technology worked seamlessly, and I was impressed by how thorough and informative the consultation was.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt=""/>
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                Meridith Grey
                            </h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p classname="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                    I've been a patient at Medicare for several years now, and I couldn't be happier with the level of care I've received. From routine check-ups to more complex procedures, the medical team has always been professional, compassionate, and thorough. The facilities are modern and well-maintained, making every visit a comfortable one.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt=""/>
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                Caroline Warner
                            </h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p classname="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                    As someone who struggles with anxiety around medical appointments, I was pleasantly surprised by how comfortable I felt at Medicare. The staff went out of their way to make me feel at ease, and the doctor took the time to listen to my concerns and address them with empathy and understanding. I'm grateful to have found a healthcare provider that prioritizes patient comfort and well-being.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt=""/>
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                Medona Sebastian
                            </h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p classname="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                    I've been introducing my family to Medicare for years, and we've always received top-notch care. The pediatricians are wonderful with my children, and I appreciate the emphasis on preventive care and patient education. The administrative staff are also friendly and efficient, making the appointment scheduling process a breeze. I wouldn't trust anyone else with my family's healthcare needs.
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  );
};

export default Testimonial;