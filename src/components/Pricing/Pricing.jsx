import React from 'react';

function PricingList(props) {
  return (
    <section className="w-full h-auto p-5 flex flex-col justify-around items-center gap-4 lg:flex-row lg:gap-2 lg:h-screen">
      {props.pricingPlans.map(plan => {
        return <PricingItem planInfo={plan} />;
      })}
    </section>
  );
}

function PricingItem(props) {
  return (
    <ul className="w-full h-96 border-2 border-yellow-200 rounded-md flex flex-col items-center justify-between lg:w-2/3 lg:h-3/4">
      <li className="bg-yellow-200 w-full h-16 flex justify-center py-2 lg:h-20">
        <img className="h-full" src={props.planInfo.img} />
      </li>
      <li>
        <h1 className="text-3xl capitalize font-title">
          {props.planInfo.header}
        </h1>
      </li>
      <li className="w-10/12">
        <ul className="features text-center divide-y-2 divide-yellow-200">
          {props.planInfo.features.map(feature => {
            return (
              <li key={feature} className=" py-2">
                {feature}
              </li>
            );
          })}
        </ul>
      </li>
      <li className="text-pink-500">{props.planInfo.price}</li>
      <li>
        <button className="bg-yellow-400 uppercase focus:bg-pink-600 rounded-md p-4 mb-2 transition duration-500">
          {props.planInfo.priceButton}
        </button>
      </li>
    </ul>
  );
}

export default PricingList;
