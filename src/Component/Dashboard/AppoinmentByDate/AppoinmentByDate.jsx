import React from 'react';
import AppointmentShortList from './../AppoinmentShortList/AppoinmentShortList';

const AppoinmentByDate = ({appoinments}) => {
    return (
        <div>
        <h3 className="text-center custom-color">Appointmets</h3>
        {
            appoinments.length ? <AppointmentShortList appointments={appoinments} /> : <div className="p-5">
                <h4 className="lead text-center">No Appointments for this Date</h4>
            </div>
        }

    </div>
    );
};

export default AppoinmentByDate;