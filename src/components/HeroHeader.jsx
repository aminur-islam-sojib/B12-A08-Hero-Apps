import GPlay from '../assets/GPlay.png';
import AppStore from '../assets/AppStore.png';
import Hero from '../assets/hero.png';
const HeroHeader = () => {
  return (
    <div>
      <div className="px-5 md:px-20">
        <div className=" text-center mt-20  text-5xl sm:text-7xl font-bold">
          We Build <br /> <span className="gradient-text">Productive</span> Apps
        </div>
        <div className=" text-center mt-5 text-gray-500">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </div>
        <div className=" flex justify-center mt-10 gap-5">
          <button className=" border py-2 px-3 rounded border-gray-400">
            <a href="" className=" flex gap-2 items-center">
              {' '}
              <img src={GPlay} alt="" /> <span>Google Play</span>
            </a>{' '}
          </button>
          <button className=" border py-2 px-3 rounded border-gray-400">
            <a href="" className=" flex gap-2 items-center">
              <img src={AppStore} alt="" />
              <span>App Store</span>
            </a>
          </button>
        </div>
        <div className="mt-15 flex justify-center items-center">
          <img src={Hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
