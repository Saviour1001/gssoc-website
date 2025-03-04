import Link from "next/link";

const Footer = () => {
  return (
    <footer id="Contact">
      <div className="footer-2 bg-orange-500 pt-6 md:pt-8">
        <div className="container px-4 mx-auto">
          <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-8">
            <div className="footer-info lg:w-1/3 md:px-4">
              <h4 className="text-white text-2xl font-medium mb-4">
                Made with ❤️ by GirlScript India
              </h4>
              <Link href="/">
                <img
                  className="cursor-pointer"
                  src="https://user-images.githubusercontent.com/64256342/151364339-4cbebec2-07fc-4bfa-bbf6-639fea147aca.png"
                />
              </Link>
            </div>

            <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
              <div className="sm:flex">
                <div className="sm:flex-1">
                  <h6 className="text-lg font-bold text-black underline uppercase mt-4 md:mt-0 mb-4">
                    ABOUT GSSOC
                  </h6>
                  <div>
                    <a
                      href="https://linktr.ee/GSSoC22"
                      className="font-normal text-black py-1 block hover:underline"
                    >
                      Contact Us
                    </a>
                    {/* <a
                      href="#"
                      className="font-normal text-black py-1 block hover:underline"
                    >
                      Past Programs
                    </a> */}
                    <a
                      href="https://drive.google.com/file/d/1AaD9wWaY4ZdzsI8J6ILXHg7MkmH-qZ3y/view"
                      className="font-normal text-black py-1 block hover:underline"
                    >
                      Code of Conduct
                    </a>
                  </div>
                </div>
                <div className="sm:flex-1 mt-4 sm:mt-0">
                  <h6 className="text-lg font-bold text-black underline uppercase mt-4 md:mt-0 mb-4">
                    Other
                  </h6>
                  <div>
                    <a
                      href="https://gwoc.girlscript.tech/"
                      className="font-normal text-black py-1 block hover:underline"
                    >
                      GWoC
                    </a>
                    <a
                      href="https://uplift.girlscript.tech/"
                      className="font-normal text-black py-1 block hover:underline"
                    >
                      Uplift Project
                    </a>
                    <a
                      href="https://summit.girlscript.tech/"
                      className="font-normal text-black py-1 block hover:underline"
                    >
                      GirlScript India Summit
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 md:px-4 md:text-left mt-12 lg:mt-0">
              <h5 className="text-lg text-white font-medium mb-4">
                GirlScript is the fastest growing tech-community in India. It is
                a non-profit project brought to you by GirlScript Foundation to
                help beginners in technology. Be a part, spread knowledge {"& "}
                happiness.
              </h5>
              <a href="https://www.girlscript.tech/home">
                <button className="bg-black text-white hover:bg-slate-800 rounded py-2 px-4 md:px-12 transition-colors duration-300">
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-solid border-gray-900 mt-4 py-4">
          <div className="container px-4 mx-auto">
            <div className="md:flex md:-mx-4 md:items-center">
              <div className="md:flex-1 md:px-4 text-center md:text-left">
                <p className="text-white">
                  &copy;{" "}
                  <strong>
                    2022 GirlScript Foundation. All rights reserved.
                  </strong>
                </p>
              </div>
              {/* <div className="md:flex-1 md:px-4 text-center md:text-right">
                <a
                  href="#"
                  className="py-2 px-4 text-white inline-block hover:underline"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="py-2 px-4 text-white inline-block hover:underline"
                >
                  Privacy Policy
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
