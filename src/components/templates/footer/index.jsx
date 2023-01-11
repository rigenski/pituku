import React from "react";

// lib
import { Icon } from "@iconify/react";

// assets
import PitukuLogo from "src/assets/footer/pituku-logo.png";

const Footer = () => {
  return (
    <>
      <footer className="w-full  bg-orange-200 saturate-50 z-50 rounded-none lg:rounded-br-full">
        <div className="container max-w-6xl mx-auto px-4 pt-16 pb-20">
          <div className="mx-auto max-w-sm flex flex-col flex-wrap justify-between lg:mx-0 lg:max-w-none lg:flex-row">
            <div className="max-w-auto w-full lg:w-auto lg:max-w-xs">
              <div className="mx-auto mb-4 w-24 lg:mx-0">
                <img src={PitukuLogo} alt="" className="w-full" />
              </div>
              <p className="mb-8 text-xs font-normal text-gray-600 text-center lg:text-left">
                Pituku adalah platform jual beli sampah dan limbah berkualitas,
                terpercaya, dan terbesar di Indonesia. Temukan kebutuhanmu,
                nikmati kemudahan transaksi, dan raih keuntungan dengan
                bergabung menjadi mitra. Jual beli sampah di #PitukuAja yuk!
              </p>
              <p className="mb-8 hidden text-sm font-normal text-gray-600 lg:block">
                &copy; Pituku 2020
              </p>
            </div>
            <div className="w-full mb-8 flex flex-col justify-between lg:w-auto lg:mb-0 lg:flex-row">
              <div className="mx-0 mb-8 lg:mx-4 lg:mb-0">
                <h4 className="mb-4 text-xl font-medium text-green-600">
                  Perusahaan
                </h4>
                <ul>
                  <li>
                    <a
                      href="https://pituku.id/#home"
                      className="mb-2 text-sm font-medium text-gray-600 hover:text-green-600"
                    >
                      Tentang Kami
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mx-0 mb-8 lg:mx-4 lg:mb-0">
                <h4 className="mb-4 text-xl font-medium text-green-600">
                  Resources
                </h4>
                <ul>
                  <li>
                    <a
                      href="/faq"
                      className="mb-2 text-sm font-medium text-gray-600 hover:text-green-600"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://storage.googleapis.com/pituku-web-prod/web-asset/Pembeli.mp4"
                      className="mb-2 text-sm font-medium text-gray-600 hover:text-green-600"
                    >
                      Get started
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mx-0 mb-8 lg:mx-4 lg:mb-0">
                <h4 className="mb-4 text-xl font-medium text-green-600">
                  Legal
                </h4>
                <ul>
                  <li>
                    <a
                      href="https://pages.flycricket.io/pituku-seller/privacy.html"
                      className="mb-2 text-sm font-medium text-gray-600 hover:text-green-600"
                    >
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pages.flycricket.io/pituku-seller/terms.html"
                      className="mb-2 text-sm font-medium text-gray-600 hover:text-green-600"
                    >
                      Terms of use
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full mx-4 lg:w-auto">
              <div className="mb-4 flex justify-center items-center lg:justify-start">
                <a
                  href="https://web.facebook.com/Pituku-Indonesia-108274171767457/?_rdc=1&amp;_rdr"
                  className="mr-2 w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  <Icon icon="mdi:twitter" className="w-6 h-6 text-green-600" />
                </a>
                <a
                  href="https://mobile.twitter.com/pitukurg"
                  className="mr-2 w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  <Icon
                    icon="ic:baseline-facebook"
                    className="w-6 h-6 text-green-600"
                  />
                </a>
                <a
                  href="https://www.instagram.com/pituku.idn/"
                  className="mr-2 w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  <Icon
                    icon="mdi:instagram"
                    className="w-6 h-6 text-green-600"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/pituku/mycompany/"
                  className="mr-2 w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  <Icon
                    icon="mdi:linkedin"
                    className="w-6 h-6 text-green-600"
                  />
                </a>
              </div>
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <Icon
                    icon="ph:globe-light"
                    className="h-6 w-8 mt-2 absolute text-green-600"
                  />
                  <select className="py-2 pl-8 w-40 border-2 text-green-600 border-green-600 rounded-md">
                    <option>English</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-full block lg:hidden">
              <p className="mt-8  text-sm font-normal text-gray-600 text-center ">
                &copy; Pituku 2020
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
