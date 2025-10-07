import { Link } from 'react-router-dom';
import ErrorImage from '../assets/App-Error.png';

const NoApp = () => {
  return (
    <div className="flex flex-col ">
      <div className=" flex  flex-col justify-center items-center flex-1 text-center bg-gray-100">
        <figure className=" h-50 w-auto">
          <img
            src={ErrorImage}
            className=" h-[100%] w-auto"
            alt="Error | Page Not Found"
          />
        </figure>
        <div>
          <h1 className=" text-4xl font-bold my-5">OPPS!! APP NOT FOUND</h1>
          <p className=" text-gray-500 mb-5">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <Link to={'/'} className="btnGradient mt-15">
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoApp;
