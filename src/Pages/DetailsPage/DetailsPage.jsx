import { useParams } from 'react-router-dom';
import useData from '../../Hooks/useData';
import DownloadIcon from '../../assets/icon-downloads.png';
import StarIcon from '../../assets/icon-ratings.png';
import ReviewsIcon from '../../assets/icon-review.png';
import { useState, useEffect } from 'react';
import Toast from '../../components/Toast';

const DetailsPage = () => {
  const { data } = useData();
  const { id } = useParams();
  const [install, setInstall] = useState(false);
  const [toast, setToast] = useState(false);

  const filteredData = data.find((d) => String(d.id) === id);

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

    setTimeout(() => setToast(false), 5000);
  };

  return (
    <div className="p-5 sm:p-10 md:p-15 flex flex-col md:flex-row gap-10">
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

        <div className="mt-5 grid sm:grid-cols-3 md:flex-row justify-center items-center gap-5 md:gap-15 p-5 md:p-0">
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

        <div>
          <button
            onClick={() => handleClickedBtn(filteredData?.id)}
            disabled={install}
            className="mt-5 btn btn-success text-white w-full md:w-fit"
          >
            {install ? 'Installed' : `Install Now (${filteredData?.size} MB)`}
          </button>
        </div>
      </div>

      {toast && <Toast />}
    </div>
  );
};

export default DetailsPage;
