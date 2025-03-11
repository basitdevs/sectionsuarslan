"use client";

import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineFullscreen, MdOutlineFullscreenExit } from "react-icons/md";

L.Icon.Default.prototype.options.iconRetinaUrl =
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png";
L.Icon.Default.prototype.options.iconUrl =
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png";
L.Icon.Default.prototype.options.shadowUrl =
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png";

interface MarkerData {
  id: number;
  lat: number;
  lng: number;
  title: string;
}

const data = [
  {
    title: "Roseville",
    desc: "Select HQ",
    location: "2800 Fairview Avenue Roseville, MN 55113",
    number: "(651) 483-1576",
    hours: [
      { day: "Monday", time: "9:30PM - 5PM" },
      { day: "Tuesday", time: "9:30PM - 5PM" },
      { day: "Wednesday", time: "9:30PM - 5PM" },
      { day: "Thursday", time: "9:30PM - 5PM" },
      { day: "Friday", time: "9:30PM - 5PM" },
      { day: "Satuarday", time: "10PM - 4Pm" },
      { day: "Sunday", time: "Closed" },
    ],
  },
  {
    title: "Roseville",
    desc: "Select HQ",
    location: "2800 Fairview Avenue Roseville, MN 55113",
    number: "(651) 483-1576",
    hours: [
      { day: "Monday", time: "9:30PM - 5PM" },
      { day: "Tuesday", time: "9:30PM - 5PM" },
      { day: "Wednesday", time: "9:30PM - 5PM" },
      { day: "Thursday", time: "9:30PM - 5PM" },
      { day: "Friday", time: "9:30PM - 5PM" },
      { day: "Satuarday", time: "10PM - 4Pm" },
      { day: "Sunday", time: "Closed" },
    ],
  },
  {
    title: "Roseville",
    desc: "Select HQ",
    location: "2800 Fairview Avenue Roseville, MN 55113",
    number: "(651) 483-1576",
    hours: [
      { day: "Monday", time: "9:30PM - 5PM" },
      { day: "Tuesday", time: "9:30PM - 5PM" },
      { day: "Wednesday", time: "9:30PM - 5PM" },
      { day: "Thursday", time: "9:30PM - 5PM" },
      { day: "Friday", time: "9:30PM - 5PM" },
      { day: "Satuarday", time: "10PM - 4Pm" },
      { day: "Sunday", time: "Closed" },
    ],
  },
];

const markersData: MarkerData[] = [
  { id: 1, lat: 37.7749, lng: -122.4194, title: "San Francisco" },
  { id: 2, lat: 37.7849, lng: -122.4094, title: "Downtown" },
  { id: 3, lat: 37.7649, lng: -122.4294, title: "Mission District" },
];

interface ChangeViewProps {
  center: [number, number];
  zoom: number;
}

function ChangeView({ center, zoom }: ChangeViewProps) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const FullScreenButton: React.FC<{
  containerRef: React.RefObject<HTMLDivElement>;
}> = ({ containerRef }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleToggleFullScreen = () => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen();
      setIsFullScreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  return (
    <button
      onClick={handleToggleFullScreen}
      className="absolute z-[9999] bottom-2 right-2 text-[2rem] text-black cursor-pointer bg-white p-1 rounded shadow"
    >
      {isFullScreen ? <MdOutlineFullscreenExit /> : <MdOutlineFullscreen />}
    </button>
  );
};

const MapComponent: React.FC = () => {
  const [center, setCenter] = useState<[number, number]>([37.7749, -122.4194]);
  const [currentLocation, setCurrentLocation] = useState<number | null>(null);
  const zoom = 13;
  const containerRef = useRef<any>(null);

  const handleMarkerClick = (marker: MarkerData) => {
    setCenter([marker.lat, marker.lng]);
  };

  return (
    <div className="px-6 md:px-10 py-20 overflow-hidden w-full h-full">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-[2rem] md:text-[5rem] leading-[1.1] uppercase font-bold">
          Visit a Showroom
        </h2>
        <p className="text-[1rem] md:text-[1.6rem] ">
          Family Owned, Community Focused, and Design Forward.
        </p>
      </div>
      <div className="grid md:grid-cols-4 mt-16">
        <div
          ref={containerRef}
          className="relative w-full md:col-span-3 h-full min-h-[300px] md:min-h-[600px]"
        >
          <FullScreenButton containerRef={containerRef} />

          <MapContainer
            center={center}
            zoom={zoom}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          >
            <ChangeView center={center} zoom={zoom} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markersData.map((marker) => (
              <Marker
                key={marker.id}
                position={[marker.lat, marker.lng]}
                eventHandlers={{
                  click: () => handleMarkerClick(marker),
                }}
              >
                <Popup>{marker.title}</Popup>
              </Marker>
            ))}
          </MapContainer>

          <div
            className="absolute z-[999] inset-0 pointer-events-none"
            style={{ background: "rgba(0, 0, 0, 0.2)" }}
          />
        </div>
        <div className="flex flex-col w-full md:px-12 mt-8 md:mt-0">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-full py-3 md:py-5 border-t border-[#ccc]"
            >
              <div
                onClick={() => {
                  setCurrentLocation(currentLocation === index ? null : index);
                }}
                className="flex justify-between items-center w-full cursor-pointer"
              >
                <div>
                  <h5 className="text-[1.2rem] md:text-[1.8rem] uppercase font-bold">
                    {item.title}
                  </h5>
                  <p className="text-[1rem] md:text-[1.5rem] font-semibold">
                    {item.desc}
                  </p>
                </div>
                <IoIosArrowDown className="text-[1.2rem] md:text-[1.8rem]" />
              </div>
              <div
                style={{
                  maxHeight: currentLocation === index ? "500px" : "0px",
                  opacity: currentLocation === index ? 1 : 0,
                  transition: "max-height 0.3s ease, opacity 0.3s ease",
                }}
                className="mt-2 overflow-hidden"
              >
                <p className="text-[1rem] md:text-[1.2rem] leading-[1.2]">
                  {item.location}
                </p>
                <p className="text-[1rem] md:text-[1.2rem] font-bold leading-[1.2] mt-5">
                  {item.number}
                </p>
                <button className="px-3 md:px-5 py-2 md:py-4 border-2 border-blue-300 hover:bg-transparent hover:text-black transition-all duration-300 text-[1.2rem] md:text-[1.5rem] font-semibold bg-blue-300 mt-3 cursor-pointer">
                  Contact Roseville
                </button>
                <div>
                  <p className="text-[1rem] md:text-[1.2rem] font-bold leading-[1.2] mt-5">
                    Hours of operation
                  </p>
                  <div className="flex flex-col text-[1rem] md:text-[1.2rem]">
                    {item.hours.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between w-full"
                      >
                        <span>{h.day}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
