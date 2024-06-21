import { formatDate } from '../../utils/formatDate';

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                About Of
                <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
                    John Jones
                </span>
            </h3>
            <p className="text__para">
            Dr. John Jones is a highly skilled and dedicated surgeon with a passion for providing exceptional medical care to his patients. With years of extensive training and experience in the field of surgery, Dr. Jones has established himself as a trusted authority in his specialty.In addition to his clinical practice, Dr. Jones is actively involved in research and education, staying abreast of the latest advancements in surgical techniques and technologies.
He has published numerous research articles in peer-reviewed journals and has presented his work at national and international conferences, contributing valuable insights to the field of surgery.
            </p>
        </div>

        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
                Education
            </h3>
            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        {formatDate('06-04-2010')} - {formatDate('12-04-2017')}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            PhD in Surgeon
                        </p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                            FMSo, Sousse.
                    </p>
                </li>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                            {formatDate('12-04-2017')} - {formatDate('12-04-2028')}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Internships
                        </p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                            Grey Sloane Hospital, Texas.
                    </p>
                </li>
            </ul>
        </div>

        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
                Experience
            </h3>
            <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                    {formatDate('12-04-2018')} - {formatDate('12-04-2020')}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Surgeon Doctor
                    </p>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Fattouma Bourgiba, Monastir,
                    </p>
                </li>
                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                    {formatDate('12-04-2020')} - {formatDate('12-04-2023')}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Surgeon Doctor
                    </p>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Grey Sloane Hospital, Texas,
                    </p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default DoctorAbout