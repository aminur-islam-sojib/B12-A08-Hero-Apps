import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
import { useParams } from 'react-router-dom';
import useData from '../../Hooks/useData';
import DownloadIcon from '../../assets/icon-downloads.png';
import StarIcon from '../../assets/icon-ratings.png';
import ReviewsIcon from '../../assets/icon-review.png';
import { useState, useEffect } from 'react';
import Toast from '../../components/Toast';
import NoApp from '../../components/NoApp';

const DetailsPage = () => {
  const { id } = useParams();
  const { data } = useData();
  const filteredData = data.find((d) => String(d.id) === id);
  const [install, setInstall] = useState(false);
  const [toast, setToast] = useState(false);

  const chartData = filteredData?.ratings;

  const [storedItems, setStoredItems] = useState(() => {
    const stored = localStorage.getItem('Installed');
    try {
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    if (Array.isArray(storedItems) && storedItems.includes(Number(id))) {
      setInstall(true);
    }
  }, [storedItems, id]);

  const handleClickedBtn = (id) => {
    const updatedItems = Array.isArray(storedItems)
      ? [...storedItems, id]
      : [id];
    localStorage.setItem('Installed', JSON.stringify(updatedItems));
    setStoredItems(updatedItems);
    setInstall(true);
    setToast(true);

    setTimeout(() => setToast(false), 2000);
  };

  if (data.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!filteredData) {
    return (
      <div className=" mt-10">
        <NoApp />
      </div>
    );
  }

  return (
    <div className="p-5 sm:p-10 md:p-15 flex flex-col gap-10">
      <div className="flex flex-col md:flex-row gap-10">
        <figure className="h-[300px] w-[300px] mx-auto md:mx-0">
          <img
            src={filteredData?.image}
            alt={filteredData?.title}
            className="h-[100%] w-auto object-cover rounded-2xl"
          />
        </figure>

        <div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold">{filteredData?.title}</h1>
            <p className="text-gray-500 text-xl font-semibold">
              Developed by{' '}
              <span className="gradient-text">{filteredData?.companyName}</span>
            </p>
          </div>

          <hr className="text-gray-500 my-5" />

          {/* Stats Section */}
          <div className="mt-5 grid sm:grid-cols-3 justify-center items-center gap-5 md:gap-15 p-5 md:p-0">
            <div className="flex flex-col gap-1">
              <figure className="w-10 h-10">
                <img src={DownloadIcon} className="w-auto h-auto" />
              </figure>
              <p className="text-gray-700 text-sm mt-2">Downloads</p>
              <h1 className="text-4xl font-extrabold text-[#001931]">
                {filteredData?.downloads}M
              </h1>
            </div>

            <div className="flex flex-col gap-1">
              <figure className="w-10 h-10">
                <img src={StarIcon} className="w-auto h-auto" />
              </figure>
              <p className="text-gray-700 text-sm mt-2">Average Ratings</p>
              <h1 className="text-4xl font-extrabold text-[#001931]">
                {filteredData?.ratingAvg}
              </h1>
            </div>

            <div className="flex flex-col gap-1 justify-center">
              <figure className="w-10 h-10">
                <img src={ReviewsIcon} className="w-auto h-auto" />
              </figure>
              <p className="text-gray-700 text-sm mt-2">Total Reviews</p>
              <h1 className="text-4xl font-extrabold text-[#001931]">
                {filteredData?.reviews}K
              </h1>
            </div>
          </div>

          {/* Install Button */}
          <div>
            <button
              onClick={() => handleClickedBtn(filteredData?.id)}
              disabled={install}
              className={`mt-5 btn w-full md:w-fit text-white ${
                install ? 'btn-disabled bg-gray-400' : 'btn-success'
              }`}
            >
              {install ? 'Installed' : `Install Now (${filteredData?.size} MB)`}
            </button>
          </div>
        </div>
      </div>

      <hr className="bg-gray-300" />

      {/* ReChart  */}

      <div className="h-[400px] w-full p-5">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData?.slice().reverse()}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Bar
              dataKey="count"
              fill="#FF8811"
              barSize={20}
              radius={[0, 10, 10, 0]}
            >
              <LabelList
                dataKey="count"
                position="right"
                fill="#000"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Description  */}

      <hr className="bg-gray-300" />

      <div>
        <h1 className=" text-2xl font-bold">Description</h1>
        <p className=" mt-5 text-gray-500">{filteredData?.description}</p>
      </div>

      {toast && <Toast />}
    </div>
  );
};

export default DetailsPage;
