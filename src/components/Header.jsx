const Header = () => {
  return (
    <div>
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
            <div className="max-w-2xl">
              <h2 className="md:text-6xl font-bold capitalize md:leading-[1.25] text-[rgb(51,51,51)]">
                Take Your <br />{" "}
                <span className="text-[#26C468]">Dreams</span> To the <br />{" "}
                next level
              </h2>
              <p className="mb-6 max-w-lg text-sm text-[#636262] sm:text-base md:mb-12">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
                aperiam reprehenderit alias repudiandae repellendus placeat
                ducimus vero, atque facere debitis. Lorem ipsum, dolor sit amet
                consectetur.
              </p>
              <form
                name="email-form"
                method="get"
                className="relative w-full max-w-[80%]"
              >
                <input
                  type="email"
                  className="h-9 w-full border border-solid border-[#26C468] rounded bg-white  text-sm text-[#333333]"
                  placeholder="Enter your email"
                  required=""
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="relative right-0 top-[5px] w-full cursor-pointer bg-black px-6 py-2 text-center font-semibold text-white sm:absolute sm:right-[5px] sm:w-auto"
                />
              </form>
            </div>
            <div>
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a940836e6cf8d_Group%2047854%20(2).svg"
                alt=""
                className="mx-auto inline-block h-full w-full max-w-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
