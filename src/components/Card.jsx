import React from 'react';

const Card = ({ data }) => {
  console.log(data);

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5">
      {data.map((d) => (
        <div key={d.id} className="card bg-base-100  shadow-sm">
          <figure>
            <img src={d?.image} alt={d.companyName} />
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
