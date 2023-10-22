import Slider from "./Slider";

const Courses = () => {
  return (
    <div>
      <div className="w-1/3 mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#333333]">
          Our Top Selling Courses
        </h2>
        <p className="text-center font-semibold mt-5 text-[#333333]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe
          ad tempore totam modi.
        </p>
      </div>
      <div className="container mx-auto">
        <Slider/>
      </div>
    </div>
  );
};

export default Courses;
