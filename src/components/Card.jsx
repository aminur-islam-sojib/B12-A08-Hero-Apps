import React from 'react';

const Card = ({ data }) => {
  console.log(data);

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5">
      {data.map((d) => (
        <div key={d.id} className="card bg-base-100  shadow-sm">
          <figure className=" h-[256px] w-auto">
            <img
              className="h-[100%] w-auto object-cover"
              src={d?.image}
              alt={d.companyName}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/logo.png';
              }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {d.companyName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
