import Image from "next/image";

export default function ArticleProfile() {
  return (
    <div className="flex flex-col p-7">
      <Image
        src="/User2.jpg"
        alt="Profile"
        width={100}
        height={100}
        className="rounded-full"
      />
      <div className="mt-6 text-left">
        <h2 className="text-xl font-semibold">Jiayan Luo</h2>
        <div className="mt-2 w-40">
          <p className="text-xl text-gray-600">C&S & History at Northwestern</p>
          <p className="text-xl text-gray-600">
            Incoming at Palantir | prev at Modern Treasury, Kleiner Perkins
            Fellowshop, Battery Ventures, Cisco Meraki
          </p>
          <p className="mt-2 text-xl text-gray-600">Jan 10, 2022 • Research</p>
        </div>
      </div>
    </div>
  );
}
