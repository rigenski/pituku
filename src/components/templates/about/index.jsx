import React from "react";

const About = () => {
  return (
    <section className="w-full ">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full order-2 lg:w-6/12 lg:order-1">
            <div className="relative">
              <div className="pr-8 h-96">
                <svg
                  data-v-3e171037=""
                  viewBox="0 0 530 534"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="h-96 hidden lg:block"
                >
                  <g
                    data-v-3e171037=""
                    id="deco-about"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g data-v-3e171037="" id="Deco">
                      <path
                        data-v-3e171037=""
                        d="M530,133 C529.998175,206.336568 470.484102,265.797961 397,266 L397,133 L530,133 Z"
                        id="primary-light"
                        style={{ fill: "#c8e6c9" }}
                      ></path>
                      <path
                        data-v-3e171037=""
                        d="M530,0 C456.515898,0.200218968 397,59.6688928 397,132.99636 L397,133 L530,133 L530,0 Z"
                        id="secondary-light"
                        style={{ fill: "#ffecb3" }}
                      ></path>
                      <path
                        data-v-3e171037=""
                        d="M133,133 C59.6615934,133.001825 0.200219516,192.515898 0,266 L133,266 L133,133 Z"
                        id="secondary-main"
                        style={{ fill: "#ffa000" }}
                      ></path>
                      <path
                        data-v-3e171037=""
                        d="M133,397 C59.6615934,396.997992 0.200219516,337.4839 0,264 L133,264 L133,397 Z"
                        id="primary-light2"
                        style={{ fill: "#c8e6c9" }}
                      ></path>
                      <path
                        data-v-3e171037=""
                        d="M520,388 C519.997996,307.495017 454.666758,242.221787 374,242 L374,388 L520,388 Z"
                        id="primary-main"
                        style={{ fill: "#4caf50" }}
                      ></path>
                      <path
                        data-v-3e171037=""
                        d="M374,388 C374.002004,468.506423 439.333242,533.779611 520,534 L520,388 L374,388 Z"
                        id="primary-light3"
                        transform="translate(447.000000, 461.000000) scale(-1, 1) translate(-447.000000, -461.000000) "
                        style={{ fill: "#c8e6c9" }}
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="top-4 left-2/4 -translate-x-2/4 absolute flex lg:left-8 lg:translate-x-0">
                <div className="mt-12 mr-2 lg:mr-4">
                  <div
                    className="p-6 w-36 h-36"
                    style={{
                      background: "#2196f3",
                      borderRadius: "0 76px 0 0",
                    }}
                  >
                    <h6 className="text-base font-medium text-white">+2500</h6>
                    <p className="text-sm font-normal text-white">
                      Ton Penjualan Sampah/Bulan
                    </p>
                  </div>
                  <div
                    className="p-6 w-36 h-36"
                    style={{
                      background: "#4caf50",
                      borderRadius: "0 0 76px 0",
                    }}
                  >
                    <h6 className="text-base font-medium text-white">+65000</h6>
                    <p className="text-sm font-normal text-white">
                      Ton Persediaan Sampah
                    </p>
                  </div>
                </div>
                <div className="ml-2 lg:ml-4">
                  <div
                    className="p-6 w-36 h-36"
                    style={{
                      background: "#4caf50",
                      borderRadius: "0 76px 0 0",
                    }}
                  >
                    <h6 className="text-base font-medium text-white">+150</h6>
                    <p className="text-sm font-normal text-white">
                      Pembeli dan Penjual
                    </p>
                  </div>
                  <div
                    className="p-6 w-36 h-36"
                    style={{
                      background: "#ffa000",
                      borderRadius: "0 0 0 76px",
                    }}
                  >
                    <h6 className="text-base font-medium text-white">+30</h6>
                    <p className="text-sm font-normal text-white">
                      Jenis Sampah
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mb-8 flex flex-col items-center order-1 lg:w-6/12 lg:mb-0 lg:items-start lg:order-2">
            <div className="mb-4 flex items-end">
              <div className="w-4 h-4 bg-orange-200 rounded-tr-full"></div>
              <div className="w-6 h-6 bg-green-200 rounded-tl-full"></div>
            </div>
            <h4 className="mb-4 text-2xl font-medium text-black text-center lg:text-3xl lg:text-left">
              Platform Jual Beli Sampah dan Limbah Terbesar & Terintegrasi
            </h4>
            <p className="mb-8 text-base font-normal text-black text-center lg:text-lg lg:text-left">
              Kami memiliki ratusan mitra produsen dan pengepul sampah yang
              terintegrasi dengan stok/persediaan terbesar di Indonesia
            </p>
            <div className="w-80 h-48 lg:w-96 lg:h-52">
              <iframe
                src="https://www.youtube.com/embed/sOcqo6REVME?autoplay=0&controls=1&rel=0&showinfo=1&mute=0&origin=https%3A%2F%2Fpituku.id&enablejsapi=1&widgetid=1"
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
