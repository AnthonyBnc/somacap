import Image from "next/image";

export default function ArticleProfile() {
  return (
    <div className="flex flex-row items-center border-b-2 border-t-2 border-black p-7 md:flex-col md:items-start md:border-none">
      <Image
        src="/User2.jpg"
        alt="Profile"
        width={100}
        height={100}
        className="rounded-full"
      />
      <div className="ml-7 mt-6 text-left md:ml-0 md:mt-4">
        <h2 className="text-md font-semibold md:text-xl">Jiayan Luo</h2>
        <div className="mt-2 w-full md:w-40">
          <p className="md:text-md text-sm text-gray-600">
            C&S & History at Northwestern
          </p>
          <p className="md:text-md mt-1 text-sm text-gray-600 md:mt-0">
            Incoming at Palantir | prev at Modern Treasury, Kleiner Perkins
            Fellowship, Battery Ventures, Cisco Meraki
          </p>
          <p className="md:text-md mt-2 text-sm text-gray-600">
            Jan 10, 2022 • Research
          </p>
        </div>
      </div>
    </div>
  );
}
