import React from "react";

const HomeScreen = () => {
  return (
    <div className="mt-24">
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-gray-500 text-xl">Today Meetings</p>
            <p className="text-4xl">4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;