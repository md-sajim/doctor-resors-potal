import React, { useState } from 'react';
import AppoinmentBaner from '../AppoinmentBanar/AppoinmentBaner';
import AvailabalAppoinment from '../AvailabalAppoinment/AvailabalAppoinment';

const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div className="px-5">
            <AppoinmentBaner 
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></AppoinmentBaner>
            <AvailabalAppoinment selectedDate={selectedDate}></AvailabalAppoinment>
        </div>
    );
};

export default Appoinment;