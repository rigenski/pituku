import { useEffect, useState } from "react";
// lib
import { Icon } from "@iconify/react";
// assets
import PitukuLogo from "src/assets/nav/pituku-logo.png";

const Nav = () => {
  const [navActive, setNavActive] = useState(false);
  const [settingActive, setSettingActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.pageYOffset);
    });
  }, [scrollY]);

  useEffect(() => {
    const nav = document.querySelector(".nav");
    const navLogo = document.querySelector(".nav-logo");

    // on mouse scroll change nav style
    if (scrollY > 10) {
      navLogo.style.width = "72px";
      nav.style.boxShadow = "0 1px 36px -16px #4caf50";
    } else {
      navLogo.style.width = "96px";
      nav.style.boxShadow = "none";
    }
  }, [scrollY]);

  return (
    <>
      <nav className="nav w-full fixed bg-white z-50">
        <div className="container max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="w-full flex items-center md:w-auto">
              <button
                className="mr-0 block rounded-full z-50 hover:bg-gray-200 md:mr-8 xl:hidden"
                onClick={() => setNavActive(!navActive)}
              >
                <Icon
                  icon={navActive ? "mdi:close" : "fluent:list-16-filled"}
                  className="h-8 w-8 text-gray-400"
                />
              </button>
              <a href="/" className="mx-auto z-50 lg:mr-8">
                <div className="nav-logo w-24">
                  <img src={PitukuLogo} alt="" className="w-full" />
                </div>
              </a>
              <div
                className={`top-0 left-0 w-full h-screen pt-24 pb-8 px-4 fixed bg-white sm:w-64 xl:top-auto xl:w-auto xl:h-auto xl:p-0 xl:static ${
                  navActive ? "left-0" : "-left-full"
                }`}
              >
                <ul className="flex flex-col items-start xl:flex-row xl:items-center">
                  <li className="mr-0 mb-4 xl:mr-4 xl:mb-0">
                    <a
                      href="/"
                      className={
                        navActive
                          ? "px-4 py-2 text-sm font-medium text-black hover:border-2 hover:border-green-600 hover:bg-gray-200 hover:rounded-lg xl:text-base"
                          : "px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:opacity-75 xl:text-base"
                      }
                    >
                      Beranda
                    </a>
                  </li>
                  <li className="mr-0 mb-4 xl:mr-4 xl:mb-0">
                    <a
                      href="/katalog"
                      className="px-4 py-2 text-sm font-medium text-black hover:border-2 hover:border-green-600 hover:bg-gray-200 hover:rounded-lg xl:text-base"
                    >
                      Katalog
                    </a>
                  </li>
                  <li className="mr-0 mb-4 xl:mr-4 xl:mb-0">
                    <a
                      href="https://commerce.pituku.id/"
                      className="px-4 py-2 text-sm font-medium text-black hover:border-2 hover:border-green-600 hover:bg-gray-200 hover:rounded-lg xl:text-base"
                    >
                      Social Commerce
                    </a>
                  </li>
                  <li className="mr-0 mb-4 xl:mr-4 xl:mb-0">
                    <a
                      href="/registration-seller"
                      className="px-4 py-2 text-sm font-medium text-black hover:border-2 hover:border-green-600 hover:bg-gray-200 hover:rounded-lg xl:text-base"
                    >
                      Kemitraan
                    </a>
                  </li>
                  <li className="mr-0 mb-4 xl:mr-4 xl:mb-0">
                    <a
                      href="/contact"
                      className="px-4 py-2 text-sm font-medium text-black hover:border-2 hover:border-green-600 hover:bg-gray-200 hover:rounded-lg xl:text-base"
                    >
                      Kontak
                    </a>
                  </li>
                  <li className="mr-0 mb-4 xl:mr-4 w-full block xl:mb-0 xl:hidden">
                    <div className="w-full border-t-2 border-gray-200"></div>
                  </li>
                  <li className="mr-0 mb-4 xl:mr-4 block xl:mb-0 xl:hidden">
                    <a
                      href="/login-buyer"
                      className="px-4 py-2 text-sm font-medium text-black hover:border-2 hover:border-green-600 hover:bg-gray-200 hover:rounded-lg xl:text-base"
                    >
                      Masuk
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center">
              <ul className="hidden items-center md:flex">
                <li className="mr-2">
                  <a
                    href="/login-buyer"
                    className="px-4 py-2 text-base font-medium text-black hover:text-green-600 hover:bg-green-50 hover:rounded-lg"
                  >
                    MASUK
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="/registration-buyer"
                    className="px-4 py-2 text-base font-medium text-white bg-green-600 rounded-lg hover:opacity-75"
                  >
                    DAFTAR
                  </a>
                </li>
              </ul>
              <div className="h-10 mx-2 hidden border-r-2 border-gray-200 md:block"></div>
              <button
                className="ml-2 z-50"
                onClick={() => setSettingActive(!settingActive)}
              >
                <Icon icon="uiw:setting" className="h-5 w-5 text-gray-400" />
              </button>
              <div className="relative">
                {settingActive ? (
                  <div className="absolute top-12 right-4 px-4 py-8 block bg-white shadow-lg rounded-xl z-50">
                    <p className="mb-4 text-sm font-normal text-gray-600 lg:text-lg">
                      Tema Mode
                    </p>
                    <div className="flex items-center px-4">
                      <p className="text-sm font-normal text-black text-center lg:text-lg">
                        Terang
                      </p>
                      <label class="mx-3 relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                      </label>
                      <p className="text-sm font-normal text-black text-center lg:text-lg">
                        Gelap
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {navActive ? (
        <div
          className="fixed h-screen w-full block bg-black opacity-25 z-40 xl:hidden"
          onClick={() => setNavActive(!navActive)}
        ></div>
      ) : null}
    </>
  );
};

export default Nav;
