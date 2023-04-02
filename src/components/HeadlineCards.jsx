import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Cards */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4 ">Sun's Out, BOGO's Out</p>
          <p className="px-2"> Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/2267538/pexels-photo-2267538.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="/"
        />
      </div>

      {/* Cards 2 */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4 ">New Restaurants </p>
          <p className="px-2"> Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order now
          </button>
        </div>
        <img
          className="max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://media.istockphoto.com/id/1331503737/photo/tenderloins-beef-steak-and-glass-of-red-wine.jpg?s=612x612&w=0&k=20&c=lFjAUtAbYMX34G-PZ706x3wuu8gyMg6LAsgVutq5A9M="
          alt="/"
        />
      </div>

      {/* Cards */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4 ">
            We Deliver Desserts Too
          </p>
          <p className="px-2"> Tasty Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://media.istockphoto.com/id/1298444475/photo/sesame-fried-chicken-with-french-fries-chicharron-de-pollo-wooden-background.jpg?s=612x612&w=0&k=20&c=78K_R8IlYauqTrxpk8Ps2ET3gyO99nb_i0F0WY6JT7Q="
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
