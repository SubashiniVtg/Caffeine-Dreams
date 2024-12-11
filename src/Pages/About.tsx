import React from 'react';

const About = () => {
  return (
    <section className="bg-yellow-50 py-12" style={{ backgroundImage: "url('/bae.jpg')" }}>
      <div className="container mx-auto px-6" >
        <h2 className="text-4xl font-bold text-center text-[#451a07] mb-8">
          About Our Caffeine Dreams
        </h2>
        <p className="text-lg text-black text-center mb-8">
        Welcome to Caffeine Dreams, 
        where every cup of coffee is brewed with passion,
         and every sip is an experience! Our mission is simple:
          to offer you the freshest, most flavorful coffee in town,
           along with a cozy atmosphere where you can unwind, work, 
           or catch up with friends. From classic espresso drinks to
            creative seasonal blends, we have something for every coffee lover.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Freshly Roasted Beans</h3>
            <p className="text-gray-600">
            At Caffeine Dreams, we take pride in using only the highest quality beans, sourced from sustainable farms around the world. Each batch is roasted in-house to bring out the rich flavors and unique characteristics of every blend. Quality is our obsession
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Custom Coffee Creations</h3>
            <p className="text-gray-600">
            Love to customize? Our 'Create Your Own Coffee' option lets you get creative! Choose your base, milk options, syrups, and add-ons to craft the perfect cup that suits your mood and taste.

            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Signature Brews</h3>
            <p className="text-gray-600">
            Not sure what to order? Our signature brews are a great place to start! Whether you're in the mood for a rich, bold espresso or a smooth, creamy latte, we’ve got you covered. Try our fan-favorite 'Dream Brew' for a one-of-a-kind experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Relaxing Ambiance</h3>
            <p className="text-gray-600">
            We’re more than just a coffee shop—we're your second home. With comfy seating, free Wi-Fi, and a warm, welcoming vibe, Caffeine Dreams is the perfect spot to relax, read a book, or work on your latest project. Bring your family, friends, or just yourself, and enjoy a moment of peace in your day!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;