import { FiSearch } from "react-icons/fi";
import headerImg from "../../public/header-img.png";

const Header = () => {
  return (
    <div>
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-16">
          <div className="flex items-center justify-between gap-8 sm:gap-20">
            <div className="max-w-2xl">
              <h2 className="md:text-6xl font-bold capitalize md:leading-[1.25] text-[rgb(51,51,51)]">
                Take Your <br /> <span className="text-[#26C468]">Dreams</span>{" "}
                To the <br /> next level
              </h2>
              <p className="my-6 max-w-lg text-sm text-[#636262] font-semibold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
                aperiam reprehenderit alias repudiandae repellendus placeat
                ducimus vero, atque facere debitis. Lorem ipsum, dolor sit amet
                consectetur.
              </p>
              <form
                name="email-form"
                method="get"
                className="relative w-full max-w-[80%] flex"
              >
                <input
                  type="email"
                  className="h-9 w-full border border-solid rounded-r-none font-medium border-[#26C468] rounded bg-white  text-sm"
                  placeholder="Search for a course"
                  required=""
                />
                <button className="rounded-r px-4 bg-[#26C468] text-white">
                  <FiSearch />
                </button>
              </form>
            </div>
            <div>
              <img
                src={headerImg}
                alt=""
                className="mx-auto inline-block h-full w-full max-w-xl"
              />
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <p className="text-[#26C468] text-4xl font-semibold">100</p>
                <div className="mt-2 text-xs font-medium text-gray-500">
                  <p>Subject to</p>
                  <p>choose from</p>
                </div>
              </div>
              <div>
                <p className="text-[#26C468] text-4xl font-semibold">120+</p>
                <div className="mt-2 text-xs font-medium text-gray-500">
                  <p>Awesome</p>
                  <p>Courses</p>
                </div>
              </div>
              <div>
                <p className="text-[#26C468] text-4xl font-semibold">120</p>
                <div className="mt-2 text-xs font-medium text-gray-500">
                  <p>Professional</p>
                  <p>Teacher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
