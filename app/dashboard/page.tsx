"use client";

import Image from "next/image";
// import LeafletMap from "./components/LeafLetMap";
import dynamic from "next/dynamic";

import {
  Search,
  Globe,
  User,
  ChevronRight,
  Zap,
  Shield,
  Power,
  Glasses,
  Split,
  Settings,
} from "lucide-react";
import { useEffect, useState } from "react";

const availableCountries = [
  {
    img: "/country-svgs/GB.svg",
    name: "United Kingdom",
    lat: 55.3781,
    lng: -3.436,
  },
  {
    img: "/country-svgs/ID.svg",
    name: "Indonesia",
    lat: -0.7893,
    lng: 113.9213,
  },
  { img: "/country-svgs/KR.svg", name: "Korea", lat: 35.9078, lng: 127.7669 },
  { img: "/country-svgs/MY.svg", name: "Malaysia", lat: 4.2105, lng: 101.9758 },
  { img: "/country-svgs/PT.svg", name: "Portugal", lat: 39.3999, lng: -8.2245 },
  { img: "/country-svgs/TR.svg", name: "Turkey", lat: 38.9637, lng: 35.2433 },
  {
    img: "/country-svgs/US.svg",
    name: "United States",
    lat: 37.0902,
    lng: -95.7129,
  },
];

const LeafletMap = dynamic(() => import("./components/LeafLetMap"), {
  ssr: false,
});

export default function Dashboard() {
  const [lat, setLat] = useState<number>(55.3781);
  const [lng, setLng] = useState<number>(-3.436);

  const [loading, setLoading] = useState(false);
  const [connected, setConnected] = useState(false);
  const [connectedData, setConnectedData] = useState<any>(null);

  const handleSetLatLong = (lat: number, lng: number) => {
    setLoading(true); // show loader immediately

    setTimeout(() => {
      setLat(lat);
      setLng(lng);
      setLoading(false); // hide loader once location updates
    }, 1500); // delay before moving map
  };

  const handleConnect = (lat: number, lng: number) => {
    setLoading(true);

    const country = availableCountries.find(
      (c) => c.lat === lat && c.lng === lng
    );

    setTimeout(() => {
      if (country) {
        setConnectedData({
          img: country.img,
          name: country.name,
        });
      } else {
        setConnectedData(null); // fallback if not found
      }

      setLoading(false);
      setConnected(true);
    }, 1500);
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000); // 3 seconds

  //   return () => clearTimeout(timer);
  // }, [loading]);

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center h-screen">
  //       <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
  //     </div>
  //   );
  // }
  return (
    <section className="dashboard relative  h-screen overflow-hidden ">
      <div className="absolute top-0 left-0 w-full h-70 z-30 p-12">
        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-b ${
            connected ? "from-[#24ff2b77]" : "from-[#ff3f3f99]"
          } to-transparent`}
        />

        {/* Content */}
        <div className="relative flex flex-col items-center justify-start h-full text-white">
          <span className=" text-white px-2 py-1 rounded-md text-md font-semibold mb-2 flex items-center gap-3">
            <Zap
              className="bg-green-500 w-12 h-8 p-1 rounded-sm text-black"
              size={40}
              fill="black"
            />{" "}
            Fastest Free Server
          </span>
          {connectedData && (
            <p className="text-sm text-black opacity-80 mb-3 flex items-center gap-1">
              Connected to{" "}
              <Image
                src={connectedData?.img}
                alt={connectedData?.name}
                width={18}
                height={18}
              />
              {connectedData?.name}
            </p>
          )}
          {connected ? (
            <button
              className="px-6 py-2 bg-[#ff2a2a] hover:bg-[#da1919] rounded-md font-medium shadow-md"
              onClick={() => {
                setConnected(!connected);
                setLoading(true);
                setTimeout(() => {
                  setConnectedData(null);
                  setLoading(false);
                }, 1000);
              }}
            >
              Disconnect
            </button>
          ) : (
            <button
              className="px-6 py-2 bg-[#6d4aff] hover:bg-[#5b39e3] rounded-md font-medium shadow-md"
              onClick={() => handleConnect(lat, lng)}
            >
              Connect
            </button>
          )}
        </div>
      </div>
      <LeafletMap lat={lat} lng={lng} />

      {/* Overlay loader */}
      {loading && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-[#000]/30 ">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
        </div>
      )}

      <div className="left absolute z-50 top-4 left-4 w-80  p-4 bg-[#1a1a1f]/90 backdrop-blur-md rounded-md">
        {/* Search */}
        <div className="flex items-center gap-2 bg-[#2a2a2f] rounded-md px-2 py-2 mb-4">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Browse from..."
            className="flex-1 bg-transparent text-sm placeholder-gray-400 outline-none"
          />
          <span className="text-gray-500 text-xs">ctrl + F</span>
        </div>

        {/* Nav Items */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between p-2 rounded-md hover:bg-[#2a2a2f] cursor-pointer">
            <div className="flex items-center gap-2">
              <Globe size={16} />
              <span>Countries</span>
            </div>
            <span className="text-gray-500 text-xs">ctrl + 2</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-md hover:bg-[#2a2a2f] cursor-pointer">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Profiles</span>
            </div>
            <span className="text-gray-500 text-xs">ctrl + 3</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 mb-4 text-xs">
          <button className="px-3 py-1 rounded-md bg-[#2a2a2f]">All</button>
          <button className="px-3 py-1 rounded-md hover:bg-[#2a2a2f]">
            Secure Core
          </button>
          <button className="px-3 py-1 rounded-md hover:bg-[#2a2a2f]">
            P2P
          </button>
          <button className="px-3 py-1 rounded-md hover:bg-[#2a2a2f]">
            Tor
          </button>
        </div>

        {/* Promo Card */}
        <div className="flex items-center justify-between bg-gradient-to-r from-[#1e1e25] to-[#2a2a30] p-3 rounded-lg mb-4 cursor-pointer hover:from-[#2a2a30] hover:to-[#333]">
          <span className="text-sm">Get worldwide coverage with VPN Plus</span>
          <ChevronRight size={16} className="text-gray-400" />
        </div>

        {/* Country List */}
        <div className="space-y-2 text-sm">
          <h3 className="text-gray-400 uppercase text-xs mb-2">
            Countries (122)
          </h3>

          <div className="flex items-center gap-3 p-2 rounded-md hover:bg-[#2a2a2f] cursor-pointer">
            <Zap size={16} className="text-green-500" />
            <span>Fastest country</span>
          </div>

          {availableCountries.map((countrydata, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-2 rounded-md hover:bg-[#2a2a2f] cursor-pointer"
              onClick={() => handleSetLatLong(countrydata.lat, countrydata.lng)}
            >
              {/* <div className="w-5 h-3 rounded-sm bg-gradient-to-r from-[#000] to-[#c00]" /> */}
              <Image
                src={countrydata.img}
                alt={countrydata.name}
                width={20}
                height={20}
              />
              <span>{countrydata.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="right absolute z-30 top-2 right-2 w-30 h-100 p-4 bg-[#1a1a1f]/90 backdrop-blur-md rounded-md">
        <div className="flex flex-col items-center gap-8 pb-5">
          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-white">
            <Shield size={28} />
            <span className="text-xs">NetShield</span>
          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-white">
            <Power size={28} />
            <span className="text-xs">Kill switch</span>
          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-white">
            <Glasses size={28} />
            <span className="text-xs">Port forwarding</span>
          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-white">
            <Split size={28} />
            <span className="text-xs">Split tunneling</span>
          </div>
        </div>

        <div className="w-full border-t border-gray-700 p-5  flex flex-col items-center gap-1 cursor-pointer hover:text-white">
          <Settings size={28} />
          <span className="text-xs">Settings</span>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-full h-40 z-30 p-6">
        {/* Top Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${
            connected ? "from-[#24ff2b77]" : "from-[#ff3f3f99]"
          } to-transparent`}
        />
        {/* Bottom Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#00000055] to-transparent" /> */}

        {/* Content */}
        <div className="relative flex flex-col items-end justify-center h-full text-white gap-2">
          <p className="flex items-center gap-2 text-sm font-medium">
            <span
              className={`w-2 h-2 rounded-full ${
                connected ? "bg-green-800" : "bg-red-500"
              }`}
            />
            {connected ? (
              <span className="text-green-800">Secure</span>
            ) : (
              <span className="text-red-600">Unprotected</span>
            )}
          </p>
          <p className="text-xs opacity-80 text-blue-950">
            Encrypt your online activity by connecting to VPN.
          </p>

          <div className="flex gap-6 mt-2 text-sm">
            <div className="flex flex-col">
              <span className="opacity-70 text-blue-950">Your IP address</span>
              <span className="font-bold text-blue-950">117.211.42.84</span>
            </div>
            <div className="flex flex-col">
              <span className="opacity-70 text-blue-950">Country</span>
              <span className="font-bold text-blue-950">India</span>
            </div>
            <div className="flex flex-col">
              <span className="opacity-70 text-blue-950">Provider</span>
              <span className="font-bold text-blue-950">BSNL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
