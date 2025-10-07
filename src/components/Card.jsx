import DownloadIcon from '../assets/icon-downloads.png';
import starIcon from '../assets/icon-ratings.png';

const Card = ({ data }) => {
  console.log(data);

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5">
      {data.map((d) => (
        <div
          key={d.id}
          className="card bg-base-100  shadow-md group transition-all hover:-translate-y-3 duration-700"
        >
          <figure className=" h-[256px] w-auto p-3 overflow-hidden">
            <img
              className="h-[100%] w-full object-cover rounded"
              src={d?.image}
              alt={d.companyName}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/logo.png';
              }}
            />
          </figure>
          <div className=" p-3">
            <h2 className="card-title">{d.companyName}</h2>

            <div className=" flex justify-between mt-2 font-medium">
              <div className=" text-sm flex items-center gap-1 bg-[#F1F5E8] text-[#00D390] px-1 rounded">
                <img src={DownloadIcon} className="h-3" />{' '}
                <span>{d.downloads}M</span>
              </div>
              <div className=" text-sm flex items-center gap-1 bg-[#FFF0E1] text-[#FF8811] px-1 rounded">
                <img src={starIcon} className="h-3" />{' '}
                <span>{d.ratingAvg}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
