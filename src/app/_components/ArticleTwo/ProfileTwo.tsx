import React from "react";
import Image from "next/image";
import { Building2, Calendar } from "lucide-react";

const Profile = () => {
  return (
    <div className="inline-block w-full flex-row items-center border-t-2 border-purple-950 p-2 align-top lg:items-start lg:border-none">
      <div className="flex flex-row lg:flex-col">
        <Image
          src="/User1.jpg"
          alt="Molly Smith"
          width={100}
          height={100}
          className="mt-3 h-28 w-28 rounded-full"
        />

        <div className="ml-7 mt-2 inline-block text-left align-top lg:ml-0 lg:mt-4">
          <h2 className="text-lg font-semibold lg:text-xl">Molly Smith</h2>
          <div className="mt-2 w-full lg:w-40">
            <p className="flex-row text-xs text-gray-500 lg:text-lg">
              <Building2 />
              Software Engineer at TechCorp
            </p>
            <p className="mt-1 text-xs text-gray-500 lg:mt-0 lg:text-lg">
              Formerly at Startup Inc, Google
            </p>

            <p className="mt-2 text-xs text-gray-500 lg:text-lg">
              <Calendar />
              Feb 15, 2023 • Insights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
