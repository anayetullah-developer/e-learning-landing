import Slider from "./Slider";

const Courses = () => {
  return (
    <div>
      <div className="w-2/3 mx-auto px-36 mb-10 mt-16">
        <h2 className="text-5xl font-semibold text-center text-[#313131]">
          Our Top Selling Courses
        </h2>
        <p className="text-center font-semibold mt-5 text-[#333333]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe
          ad tempore totam modi. Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="relative">
        <Slider/>
      </div>
    </div>
  );
};

export default Courses;
