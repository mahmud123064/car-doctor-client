import { FaArrowRight } from "react-icons/fa";
const ServicesCard = ({ service }) => {

    const { _id, img, title, price } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-[250px]" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title font-semibold">{title}</h2>

                <div className="card-actions">
                    <p className="text-red-500 ">Price :${price}</p>
                    <FaArrowRight className="text-red-500 "></FaArrowRight>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;