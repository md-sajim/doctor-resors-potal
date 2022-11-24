import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

const AppoinmentBaner = ({ selectedDate, setSelectedDate }) => {

    return (
        <div >
            <div className=" lg:my-64 my-10 lg:flex sm:block  justify-evenly lg:flex-row-reverse">
                <img src={chair} alt='appoinment chair' className="lg:max-w-xl rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}

                    />
                </div>
            </div>

        </div>
    );
};

export default AppoinmentBaner;