import React, { useState } from "react";
import LocationSearch from "./LocationSearch";
import { FaBus } from "react-icons/fa";

const Home = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [destination, setDestination] = useState(null);

  const handleCurrentLocationSelect = (location) => {
    setCurrentLocation(location);
  };

  const handleDestinationSelect = (location) => {
    setDestination(location);
  };

  return (
    <main className="pt-16 ml-40 pl-2 mr-2">
      <div className="body-bg-green-400">
        <div className="pt-20 px-6 text-blue-700">
          <h1 className="text-4xl font-bold text-center my-8">
            Welcome to CBUS!
          </h1>
          <p className="text-lg text-center mb-8">
            Discover the best bus services in town. We are dedicated to
            providing you with safe, reliable, and comfortable travel
            experiences.
          </p>
          <div className="max-w-md mx-auto mb-8">
            <h2 className="text-2xl font-semibold mb-4">Plan Your Journey</h2>
            <div className="space-y-4">
              <LocationSearch
                onLocationSelect={handleCurrentLocationSelect}
                placeholder="Enter your current location"
              />
              <LocationSearch
                onLocationSelect={handleDestinationSelect}
                placeholder="Enter your destination"
              />
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Search Buses
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">About Us</h2>
              <p>
                CBUS is committed to offering top-notch bus services with a
                focus on safety, comfort, and punctuality. Learn more about our
                story and values.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Services</h2>
              <p>
                From daily commutes to long-distance travel, we offer a variety
                of bus services to meet your needs. Explore our offerings and
                find the perfect fit for your journey.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                Have questions or need assistance? Get in touch with our
                customer support team. We're here to help you every step of the
                way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
