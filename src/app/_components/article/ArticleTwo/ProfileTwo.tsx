import React from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex flex-col p-7">
      <Image
        src="/User1.jpg"
        alt="Molly Smith"
        width={100}
        height={100}
        className="rounded-full"
      />
      <div className="mt-6 text-left">
        <h2 className="text-xl font-semibold">Molly Smith</h2>
        <div className="mt-2 w-44">
          <p className="text-xl text-gray-600">Software Engineer at TechCorp</p>
          <p className="text-xl text-gray-600">
            Formerly at Startup Inc, Google
          </p>
          <p className="mt-2 text-xl text-gray-600">Feb 15, 2023 • Insights</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
