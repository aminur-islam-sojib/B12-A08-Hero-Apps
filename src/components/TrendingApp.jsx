import useData from '../Hooks/useData';

const TrendingApp = () => {
  const { data } = useData();

  console.log(data);

  return (
    <div className=" p-5 sm:p-10 md:p-20">
      <div>
        <h1 className=" text-4xl font-bold text-center">Trending Apps</h1>
        <p className=" text-gray-500 text-center mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
    </div>
  );
};

export default TrendingApp;
