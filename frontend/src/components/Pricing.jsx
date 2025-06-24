import { Dumbbell, Clock, UserCheck, Lock, PauseCircle, Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "Strength Starter Plan",
      price: 9000,
      length: 3,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "Transformation Package",
      price: 16000,
      length: 6,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "Elite Performance Plan",
      price: 30000,
      length: 12,
    },
  ];
  return (
    <section className="pricing">
      <h1>IronCore Strength Plans</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h3>Rs {element.price}</h3>
                <p>For {element.length} Months</p>
              </div>
              <div className="description">
                <p>
                  <Dumbbell /> 	State-of-the-Art Gym Gear
                </p>
                <p>
                  <Clock /> Unlimited Access to Training Zones
                </p>
                <p>
                  <Lock /> Clean & Hygienic Changing Facilities
                </p>
                <p>
                  <UserCheck /> Round-the-Clock Certified Trainer Assistance
                </p>
                <p>
                  <PauseCircle /> 20-Day Membership Pause Flexibility
                </p>
                <Link to={"/"}>Join Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
