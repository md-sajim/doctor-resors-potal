import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Commint from '../Commint/Commint';

const Testimonial = () => {
    const commint = [
        { id: 1, people: people1, name: 'Winson Herry', add: 'California', commit: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content' },
        { id: 2, people: people2, name: 'Winson Herry', add: 'California', commit: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content' },
        { id: 3, people: people3, name: 'Winson Herry', add: 'California', commit: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content' }
    ]
    return (
        <div className='mt-24 '>
            <div className='flex justify-between'>
                <div>
                    <h6 className='text-lg font-bold text-primary'>Testimonial</h6>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='lg:w-[192px] lg:h-[156px] w-[100px] h-[79px]' src={quote} alt="" />
                </div>
            </div>
            <div className='grid p-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6  '>
                {
                    commint.map(com => <Commint
                        key={com.id}
                        com={com}
                    ></Commint>)
                }
            </div>
        </div>
    );
};

export default Testimonial;