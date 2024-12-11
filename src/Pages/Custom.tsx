import React from 'react';

const CustomCoffee = () => {
  const coffeeTypes = ['Espresso', 'Latte', 'Cappuccino', 'Americano', 'Mocha'];
  const milkOptions = ['Whole Milk', 'Skim Milk', 'Almond Milk', 'Oat Milk', 'Soy Milk'];
  const flavors = ['Vanilla', 'Caramel', 'Hazelnut', 'Chocolate', 'Pumpkin Spice'];

  return (
    // bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100
    <div className=" min-h-screen flex flex-col items-center justify-center py-10" style={{ backgroundImage: "url('/bae.jpg')" }}>
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-[#451a07]">Create Your Custom Coffee</h1>

        <form className="space-y-6">
          {/* Coffee Name */}
          <div className="mb-6">
            <label htmlFor="coffeeName" className="block text-lg font-semibold mb-2 text-gray-700">Coffee Name</label>
            <input
              type="text"
              id="coffeeName"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#451a07]"
              placeholder="Enter a name for your coffee"
            />
          </div>

          {/* Coffee Type Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <h2 className="text-xl font-semibold col-span-full text-gray-700 mb-4">Select Coffee Type</h2>
            {coffeeTypes.map((type, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input type="radio" name="coffeeType" className="h-4 w-4 text-[#451a07] focus:ring-[#451a07]" />
                <span className="text-gray-700">{type}</span>
              </label>
            ))}
          </div>

          {/* Milk Options Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Select Milk Option</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {milkOptions.map((milk, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input type="radio" name="milkOption" className="h-4 w-4 text-[#451a07] focus:ring-[#451a07]" />
                  <span className="text-gray-700">{milk}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Flavor Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Select Flavor</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {flavors.map((flavor, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input type="checkbox" className="h-4 w-4 text-[#451a07] rounded focus:ring-[#451a07]" />
                  <span className="text-gray-700">{flavor}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#451a07] hover:bg-green-500 text-white font-semibold py-3 rounded-md text-lg transition duration-200"
          >
            Order Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomCoffee;
