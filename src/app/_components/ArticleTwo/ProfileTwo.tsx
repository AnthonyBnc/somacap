import React from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex flex-row items-center border-b-2 border-t-2 border-black p-7 md:flex-col md:items-start md:border-none">
      <Image
        src="/User1.jpg"
        alt="Molly Smith"
        width={100}
        height={100}
        className="rounded-full"
      />
      <div className="ml-7 mt-6 text-left md:ml-0 md:mt-4">
        <h2 className="text-md font-semibold md:text-xl">Molly Smith</h2>
        <div className="mt-2 w-full md:w-40">
          <p className="md:text-md text-sm text-gray-600">
            Software Engineer at TechCorp
          </p>
          <p className="md:text-md mt-1 text-sm text-gray-600 md:mt-0">
            Formerly at Startup Inc, Google
          </p>
          <p className="md:text-md mt-2 text-sm text-gray-600">
            Feb 15, 2023 • Insights
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
