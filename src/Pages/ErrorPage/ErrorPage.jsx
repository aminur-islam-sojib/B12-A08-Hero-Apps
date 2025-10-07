import { Link } from 'react-router-dom';
import ErrorImage from '../../assets//error-404.png';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className=" flex  flex-col justify-center py-20 items-center flex-1 text-center bg-gray-100">
        <figure className=" h-50 w-auto">
          <img
            src={ErrorImage}
            className=" h-[100%] w-auto"
            alt="Error | Page Not Found"
          />
        </figure>
        <div>
          <h1 className=" text-4xl font-bold my-5">Oops, page not found!</h1>
          <p className=" text-gray-500 mb-5">
            The page you are looking for is not available.
          </p>
          <Link to={'/'} className="btnGradient mt-15">
            Go back
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
