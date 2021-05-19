import React, { useEffect, useState } from 'react';
import './BookingList.css'

const BookingList = () => {
    const clientInfo = JSON.parse(localStorage.getItem('loggedInUser')) || {}

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://diligent-detectives-server.herokuapp.com/bookings?email=${clientInfo.email}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [clientInfo.email])

    return (
        <div className="booking-list">
            <div className="d-flex justify-content-between align-items-center mt-3 title-padding">
                <h1>Booking List</h1>
                <p className="text-center text-secondary"><span>Design By</span> <br /> <span> Developer Emon</span></p>
            </div>
            <div style={{height: '90vh', overflow: 'scroll'}} className="background-light padding-5">

                <div className="display-grid-col-3">
                    {
                        services.map(service => <div key={service._id} className="p-3 box-shadow rounded bg-white">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <img className="rounded-circle" src={service.serviceInfo.image} alt="" width="80" height="80" />
                                <p className={`status ${service.status}`}>{service.status}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h5>{service.serviceInfo.name}</h5>
                                <p>$ {service.serviceInfo.cost}</p>
                            </div>
                            <p className="text-justify">{service.serviceInfo.description}</p>
                        </div>)
                    }
                </div>
            </div>

            {
                services.length === 0 && <h2 className="text-center m-5">You have No Booking</h2>
            }
        </div>
    );
};

export default BookingList;