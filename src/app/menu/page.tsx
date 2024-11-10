import { FaShoppingCart } from "react-icons/fa";
import React from "react";

const productCardGrid = () => {
  const productImages = [
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/yummy-and-tasty-salami-pizza-diavola-close-up-free-photo.jpg?w=600&quality=80",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdGQQNpLYpzBkZTznSRszNR_nX6Ffj3xlF6w&s",
    " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcOCVdwRuFHCEsN1gYGMfnfa7rzUHbs4-SDMSd6vrT05GTxYQDGJBOMndU0bH4NDU-DK4&usqp=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswujE2gwlddwIM04E4jdy9sld1pqS7hHKeQ&s",
    "https://cdn.pixabay.com/photo/2024/04/18/10/41/ai-generated-8704060_640.jpg",
    "https://static.vecteezy.com/system/resources/previews/024/028/267/non_2x/whole-bbq-chicken-pizza-on-wooden-cutter-board-for-fast-food-and-ready-to-eat-concept-generative-ai-photo.jpg",
  ];
  return (
    <div className="relative text-center p-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(' 
          https://img.freepik.com/premium-photo/colorful-homemade-pizza-with-black-ham-cherry-tomatoes_1126714-13363.jpg?size=626&ext=jpg&ga=GA1.1.1544402068.1728376142&semt=ais_hybrid')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.1,
        }}
      />

      <h1 className="font-bold text-4xl mb-4 text-white z-10 relative">
        Most Requested Items{" "}
      </h1>
      <h1 className="text-3xl text-white z-10 relative">Order Now....!</h1>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
          >
            <a href="#">
              <img
                src={productImages[index]}
                alt={`product ${index + 1}`}
                className="h-80 w-75 object-cover rounded-t-xl"
              />
              <div className="p-4 py-3 w-72">
                <span className=" text-slate-500 mr-3 uppercase text-xs">
                  Category
                </span>
                <p className="text-lg font-bold text-red-700 truncate block capitalize">
                  {`pizza  ${index + 1}`}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black my-3 cursor-auto">
                    $149
                  </p>
                  <del>
                    <br />
                    <p className="text-sm text-blue-800 cursor-auto ml-2">
                      {""} $149
                    </p>
                  </del>
                  <div className="ml-auto">
                    <FaShoppingCart className="w-5 h-5 text-blue-800" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default productCardGrid;