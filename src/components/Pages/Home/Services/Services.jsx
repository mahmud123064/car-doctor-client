import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className="mt-4">
            <div className="text-center space-y-3">
                <h3 className="text-2xl text-orange-500 ">Service</h3>
                <h2 className="text-4xl font-bold ">Our Service Area</h2>
                <p className="w-1/2 mx-auto">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
               {
                services.map(service => <ServicesCard
                key={service._id}
                service = {service}
                ></ServicesCard>)
               }
            </div>
        </div>
    );
};

export default Services;