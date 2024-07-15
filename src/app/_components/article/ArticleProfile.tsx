import Image from "next/image";

export default function ArticleProfile() {
  return (
    <div className="flex flex-row items-center border-b-2 border-t-2 border-black p-7 lg:flex-col lg:items-start lg:border-none">
      <Image
        src="/User2.jpg"
        alt="Profile"
        width={100}
        height={100}
        className="rounded-full"
      />
      <div className="ml-7 mt-6 text-left lg:ml-0 lg:mt-4">
        <h2 className="text-lg font-semibold lg:text-xl">Jiayan Luo</h2>
        <div className="mt-2 w-full lg:w-40">
          <p className="text-sm text-gray-600 lg:text-lg">
            C&S & History at Northwestern
          </p>
          <p className="mt-1 text-sm text-gray-600 lg:mt-0 lg:text-lg">
            Incoming at Palantir | prev at Modern Treasury, Kleiner Perkins
            Fellowship, Battery Ventures, Cisco Meraki
          </p>
          <p className="mt-2 text-sm text-gray-600 lg:text-lg">
            Jan 10, 2022 • Research
          </p>
        </div>
      </div>
    </div>
  );
}
