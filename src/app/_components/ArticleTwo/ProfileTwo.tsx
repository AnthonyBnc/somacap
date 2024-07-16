import React from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex flex-row items-center border-b-2 border-t-2 border-black p-3 lg:flex-col lg:items-start lg:border-none">
      <Image
        src="/User1.jpg"
        alt="Molly Smith"
        width={100}
        height={100}
        className="rounded-full"
      />
      <div className="ml-6 mt-3 mb-5 text-left lg:ml-0 lg:mt-4">
        <h2 className="text-lg font-semibold lg:text-xl">Molly Smith</h2>
        <div className="mt-2 w-full lg:w-40">
          <p className="text-sm text-gray-600 lg:text-lg">
            Software Engineer at TechCorp
          </p>
          <p className="mt-1 text-sm text-gray-600 lg:mt-0 lg:text-lg">
            Formerly at Startup Inc, Google
          </p>
          <p className="mt-2 text-sm text-gray-600 lg:text-lg">
            Feb 15, 2023 • Insights
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
