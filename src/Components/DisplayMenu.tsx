
// // src/Banner.tsx
// import React from 'react';

// interface BannerProps {
//   image: string;
//   quote: string;
//   author: string;
// }

// const Banner: React.FC<BannerProps> = ({ image, quote, author }) => {
//   return (
//     <div
//       className="flex items-center justify-center  bg-center"
//       style={{ backgroundImage: "url(/banner.jpg)" }}
//     >
//       <div className="bg-white bg-opacity-50 p-8 rounded-lg text-center">
//         <h1 className="text-black text-3xl  md:text-2xl italic mb-4">
//           Embrace fall in full flavor with a latte , Macciato or chai lattee
//         </h1>
//         <p className="text-white text-lg md:text-xl font-semibold">{author}</p>
//         <button className="mt-4 bg-blue-500 text-white font-italic py-2 px-6 rounded hover:bg-blue-600 transition duration-200">
//           Feel Delicious
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Banner;

// src/Banner.tsx
import React from 'react';

interface BannerProps {
  image: string; // URL of the banner image
  quote: string; // The quote to display
  author: string; // The author of the quote
}

const Banner: React.FC<BannerProps> = ({ image, quote, author }) => {
  return (
    <div
      className="flex items-center justify-center h-[250px] bg-cover bg-center w-full rounded-lg"
      style={{ backgroundImage: "url(/banner.jpg)" }} // Use the image prop
    >
      <div className=" p-8 text-center">
        <h1 className="text-white text-3xl md:text-4xl italic mb-4">
        Embrace fall in full flavor with a latte , Macciato or chai lattee
        </h1>
        <p className="text-white text-lg md:text-xl font-semibold">{author}</p>
        <button className="mt-4 bg-[#451a07] text-white font-bold py-2 px-6 rounded hover:bg-yellow-900 transition duration-200">
          Feel Delicious
        </button>
      </div>
    </div>
  );
};

export default Banner;

 


