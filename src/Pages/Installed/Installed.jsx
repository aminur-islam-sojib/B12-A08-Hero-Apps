import React, { useState, useEffect } from 'react';
import useData from '../../Hooks/useData';
import NoApp from '../../components/NoApp';
import DownloadIcon from '../../assets/icon-downloads.png';
import starIcon from '../../assets/icon-ratings.png';

const Installed = () => {
  const { data } = useData();
  const [installedApps, setInstalledApps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadInstalledApps();
  }, [data]);

  const loadInstalledApps = () => {
    setIsLoading(true);

    setTimeout(() => {
      const storedId = localStorage.getItem('Installed');

      const installedIds = storedId ? JSON.parse(storedId) : [];

      const filteredApps = data.filter((app) => installedIds.includes(app.id));

      setInstalledApps(filteredApps);
      setIsLoading(false);
    }, 500);
  };

  const handleUninstall = (appId, appTitle) => {
    if (window.confirm(`Are you sure you want to uninstall "${appTitle}"?`)) {
      // Get current installed IDs
      const storedId = localStorage.getItem('Installed');
      const installedIds = storedId ? JSON.parse(storedId) : [];

      // Remove the app ID from the array
      const updatedIds = installedIds.filter((id) => id !== appId);

      // Update localStorage
      localStorage.setItem('Installed', JSON.stringify(updatedIds));

      // Remove app from state
      setInstalledApps((prev) => prev.filter((app) => app.id !== appId));

      // Show success message
      alert(`"${appTitle}" has been uninstalled successfully!`);
    }
  };

  if (isLoading) {
    return (
      <div className="px-10 py-20">
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-10 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center">
          Installed Applications
        </h1>
        <p className="mt-2 text-gray-500 text-center">
          Manage your installed apps
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-medium">
          ({installedApps.length}) Apps Installed
        </h2>
      </div>

      {installedApps.length === 0 ? (
        <div className="text-center py-20">
          <NoApp />
        </div>
      ) : (
        <div className="grid grid-cols-1 1 gap-6">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="w-25 h-25 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  <img
                    src={app.image}
                    alt=""
                    className=" h-full w-auto object-cover rounded"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {app.title}
                  </h3>
                  <div className=" flex gap-4 mt-2 font-medium">
                    <div className=" text-sm flex items-center gap-1 bg-[#F1F5E8] text-[#00D390] px-1 rounded">
                      <img src={DownloadIcon} className="h-3" />{' '}
                      <span>{app.downloads}M</span>
                    </div>
                    <div className=" text-sm flex items-center gap-1 bg-[#FFF0E1] text-[#FF8811] px-1 rounded">
                      <img src={starIcon} className="h-3" />{' '}
                      <span>{app.ratingAvg}</span>
                    </div>
                    <div>
                      <h1 className=" text-gray-500">{app.size} MB</h1>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleUninstall(app.id, app.title)}
                  className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center gap-2 flex-shrink-0"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Installed;
