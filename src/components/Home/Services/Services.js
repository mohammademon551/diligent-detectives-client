import React, { useEffect, useState } from 'react';
import './Services.css';
import { useHistory } from 'react-router';

const Services = () => {

    const history = useHistory();

    const handleService = (service) => {
        history.push(`/user/book`);
        sessionStorage.setItem('service', JSON.stringify(service))
    }

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://diligent-detectives-server.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section id="service" className="service-section">
            <div className="container">
                <div className="section-title">
                    <h2>Our Services</h2>
                </div>
                <div className="row align-items-center mb-5">
                    <h1 className="col-md-7 text-gradient">-- Offering Private <br /> Investigation Services</h1>
                    <p className="col-md-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam quidem quos provident. Impedit praesentium cumque soluta iusto atque officiis.</p>
                </div>
                <div className="display-grid-col-3">

                    {
                        services.map(service => <div data-aos="fade-up" key={service._id} onClick={() => handleService(service)} className="service-box" >
                            <div className="service-image">
                                <img src={service.image} alt="" className="" />
                                <div className="image-text">
                                    <button className="btn-brand w-75">Take Service</button>
                                </div>
                            </div>
                            <div className="service-details shadow">
                                <h4>{service.name}</h4>
                                <h6>$ {service.cost}</h6>
                                <p className="text-justif">{service.description}</p>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Services;