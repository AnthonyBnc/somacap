import React from "react";
import Image from "next/image";

const Content = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Tech Innovations</h1>
      <p className="mt-2 text-gray-600">
        Exploring the latest trends and advancements in technology.
      </p>
      <div className="mt-4">
        <Image
          src="/ArticleImage.png"
          alt="Tech Innovations"
          width={800}
          height={400}
          className="rounded-lg"
        />
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Emerging Technologies</h2>
        <p className="mt-2 text-gray-600">
          Over the past few years, we've seen tremendous growth in areas such as
          artificial intelligence, machine learning, blockchain, and quantum
          computing. These technologies are set to revolutionize industries and
          change the way we live and work.
        </p>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Impact on Society</h2>
        <p className="mt-2 text-gray-600">
          The adoption of these technologies will have a profound impact on
          society, driving innovation, creating new job opportunities, and
          solving complex problems. It's an exciting time to be involved in the
          tech industry.
        </p>
      </div>
    </div>
  );
};

export default Content;
