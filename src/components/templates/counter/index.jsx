import React from "react";

// assets
import AppStore from "src/assets/counter/app-store.png";
import PlayStore from "src/assets/counter/play-store.png";
import Phone from "src/assets/counter/phone.png";
import Plant from "src/assets/counter/plant.png";

const Counter = () => {
  return (
    <section className="w-full ">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="relative ">
          <div
            className="w-full absolute overflow-hidden"
            style={{ height: "800px" }}
          >
            <div
              className="mx-auto mt-24 bg-green-600 opacity-25 rounded-full overflow-hidden"
              style={{ height: "1080px", width: "1080px" }}
            ></div>
          </div>
        </div>
        <div className="max-w-3xl mb-24 relative mx-auto">
          <div className="absolute w-full top-8 z-20">
            <div className="h-36 bg-white shadow-lg rounded-xl lg:h-64"></div>
            <div className="top-0 px-8 w-full absolute flex items-center lg:justify-start">
              <div className="w-48 mr-8 hidden border-8 border-black rounded-2xl lg:block">
                <img src={Phone} alt="" className="w-full rounded-2xl" />
              </div>
              <div className="mx-auto lg:mx-0">
                <h4 className="mb-8 text-2xl font-medium text-green-800 text-center lg:text-4xl lg:text-left">
                  Dapatkan Aplikasi Versi Mobile
                </h4>
                <div className="flex items-center">
                  <a href="/" className="h-16 mr-2">
                    <img src={AppStore} alt="" className="h-full" />
                  </a>
                  <a href="/" className="h-16 ml-2">
                    <img src={PlayStore} alt="" className="h-full" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="-ml-16 hidden lg:block">
            <svg
              width="394px"
              height="399px"
              viewBox="0 0 394 399"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              data-v-3c0c7bd2=""
            >
              <g
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                data-v-3c0c7bd2=""
              >
                <g class="deco-left" data-v-3c0c7bd2="">
                  <path
                    d="M90.7678334,8.95381902 C95.4872851,17.3854111 92.4786677,28.0481029 84.0474609,32.7675337 C75.6140357,37.488021 64.9520891,34.4778322 60.2324261,26.045712 C55.5123405,17.6141199 58.5213805,6.95248454 66.9548057,2.23199727 C75.385854,-2.48743361 86.0478007,0.52169876 90.7678334,8.95381902 Z"
                    transform="translate(75.500000, 17.500000) scale(-1, 1) translate(-75.500000, -17.500000) "
                    style={{ fill: "#2196f3" }}
                    data-v-3c0c7bd2=""
                  ></path>{" "}
                  <path
                    d="M73,53 C72.8901046,91.6768036 40.2491806,123 0.00229781236,123 L0,123 L0,53 L73,53 Z"
                    transform="translate(36.500000, 88.000000) scale(-1, 1) translate(-36.500000, -88.000000) "
                    style={{ fill: "#ffa000" }}
                    data-v-3c0c7bd2=""
                  ></path>{" "}
                  <path
                    d="M146,53 C105.746589,53.0009606 73.1098949,84.324157 73,123 L146,123 L146,53 Z"
                    transform="translate(109.500000, 88.000000) scale(-1, 1) translate(-109.500000, -88.000000) "
                    style={{ fill: "#ff6f00" }}
                    data-v-3c0c7bd2=""
                  ></path>{" "}
                  <path
                    d="M76,193 C75.8901046,154.324071 43.2491806,123 3.00229781,123 L3,123 L3,193 L76,193 Z"
                    transform="translate(39.500000, 158.000000) scale(-1, 1) translate(-39.500000, -158.000000) "
                    style={{ fill: "#2e7d32" }}
                    data-v-3c0c7bd2=""
                  ></path>{" "}
                  <path
                    d="M146,193 C105.746589,192.998943 73.1098949,161.675737 73,123 L146,123 L146,193 Z"
                    transform="translate(109.500000, 158.000000) scale(-1, 1) translate(-109.500000, -158.000000) "
                    style={{ fill: "#c8e6c9" }}
                    data-v-3c0c7bd2=""
                  ></path>{" "}
                  <path
                    d="M239.5,321 L162.5,321 C162.5,364.078184 196.973575,399 239.5,399 L239.5,321 Z"
                    style={{ fill: "#ff6f00" }}
                    data-v-3c0c7bd2=""
                  ></path>{" "}
                  <path
                    d="M316.5,321 L316.5,399 L393.5,399 C393.5,355.921816 359.026579,321 316.5,321 Z"
                    style={{ fill: "#4caf50" }}
                    data-v-3c0c7bd2=""
                  ></path>{" "}
                  <polygon
                    fill="#2E7D32"
                    points="239.5 399 316.5 399 316.5 321 239.5 321"
                    style={{ fill: "#2e7d32" }}
                    data-v-3c0c7bd2=""
                  ></polygon>{" "}
                  <path
                    d="M239.5,321 L162.5,321 C162.5,342.478418 171.117961,361.924195 185.052009,376 L239.5,321 Z"
                    id="Fill-4"
                    fill="#FFF000"
                    data-v-3c0c7bd2=""
                  ></path>{" "}
                  <path
                    d="M316.5,321 L316.5,399 L371.5,343.845312 C357.425393,329.730385 337.979339,321 316.5,321 Z"
                    style={{ fill: "#2e7d32" }}
                    data-v-3c0c7bd2=""
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div className="absolute -right-12 top-4 hidden z-40 lg:block">
            <svg
              width="118px"
              height="315px"
              viewBox="0 0 118 315"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              data-v-3c0c7bd2=""
            >
              <g
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                data-v-3c0c7bd2=""
              >
                <g class="deco-right" data-v-3c0c7bd2="">
                  <path
                    d="M0,0 C17.6808245,0.0451621733 32,13.4591488 32,29.9991789 L32,30 L0,30 L0,0 Z"
                    style={{ fill: "#4caf50" }}
                    data-v-3c0c7bd2=""
                  ></path>{" "}
                  <path
                    d="M0,30 C0.000439144218,47.0934857 14.3196147,60.9529082 32,61 L32,30 L0,30 Z"
                    style={{ fill: "#2e7d32" }}
                    data-v-3c0c7bd2=""
                  ></path>{" "}
                  <path
                    d="M64,30 C63.9995609,47.0934857 49.6803853,60.9529082 32,61 L32,30 L64,30 Z"
                    style={{ fill: "#ffa000" }}
                    data-v-3c0c7bd2=""
                  ></path>{" "}
                  <path
                    d="M64,0 C46.3196147,0.0451621733 32,13.4591488 32,29.9991789 L32,30 L64,30 L64,0 Z"
                    style={{ fill: "#ff6f00" }}
                    data-v-3c0c7bd2=""
                  ></path>{" "}
                  <path
                    d="M92.478,74.0593655 C90.28104,74.0593655 88.5,72.2545655 88.5,70.0291966 C88.5,67.8038276 90.28104,66 92.478,66 C94.67496,66 96.45608,67.8038276 96.45608,70.0291966 C96.45608,72.2545655 94.67496,74.0593655 92.478,74.0593655 Z"
                    style={{ fill: "#ff6f00" }}
                    data-v-3c0c7bd2=""
                  ></path>{" "}
                  <path
                    d="M92.478,93.4445966 C90.28104,93.4445966 88.5,91.6400397 88.5,89.415319 C88.5,87.1890586 90.28104,85.38515 92.478,85.38515 C94.67496,85.38515 96.45608,87.1890586 96.45608,89.415319 C96.45608,91.6400397 94.67496,93.4445966 92.478,93.4445966 Z"
                    style={{ fill: "#ff6f00" }}
                    data-v-3c0c7bd2=""
                  ></path>{" "}
                  <path
                    d="M92.478,112.829747 C90.28104,112.829747 88.5,111.025676 88.5,108.800307 C88.5,106.574695 90.28104,104.770138 92.478,104.770138 C94.67496,104.770138 96.45608,106.574695 96.45608,108.800307 C96.45608,111.025676 94.67496,112.829747 92.478,112.829747 Z"
                    style={{ fill: "#ff6f00" }}
                    data-v-3c0c7bd2=""
                  ></path>{" "}
                  <path
                    d="M78.7142667,274.163055 C82.4898281,280.908329 80.0829341,289.438482 73.3379687,293.214027 C66.5912286,296.990417 58.0616713,294.582266 54.2859409,287.83657 C50.5098724,281.091296 52.9171044,272.561988 59.6638446,268.785598 C66.4086832,265.010053 74.9382405,267.417359 78.7142667,274.163055 Z"
                    style={{ fill: "#2196f3" }}
                    data-v-3c0c7bd2=""
                  ></path>{" "}
                  <path
                    d="M33.5,277 C33.5005764,254.94384 52.2944942,237.060763 75.5,237 L75.5,277 L33.5,277 Z"
                    style={{ fill: "#c8e6c9" }}
                    data-v-3c0c7bd2=""
                  ></path>{" "}
                  <path
                    d="M117.5,277 C117.499424,254.94384 98.7055058,237.060763 75.5,237 L75.5,277 L117.5,277 Z"
                    style={{ fill: "#2e7d32" }}
                    data-v-3c0c7bd2=""
                  ></path>{" "}
                  <path
                    d="M76,275 C76.0005764,297.056554 94.7944942,314.939619 118,315 L118,275 L76,275 Z"
                    style={{ fill: "#4caf50" }}
                    data-v-3c0c7bd2=""
                  ></path>{" "}
                  <path
                    d="M48,277 L76,277 L76,249 C60.5361002,249 48,261.536036 48,277 Z"
                    style={{ fill: "#4caf50" }}
                    data-v-3c0c7bd2=""
                  ></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="w-full mt-56 pb-8 relative lg:mt-0">
          <div className="flex flex-col justify-center items-center">
            <h2 className="mb-8 text-3xl font-medium text-black text-center lg:text-4xl">
              Apa yang anda tunggu?
            </h2>
            <button className="px-2 py-4 text-base font-normal text-white border-2 bg-orange-400 rounded-md hover:bg-orange-50">
              BERGABUNG SEKARANG
            </button>
          </div>
          <div className="h-56 -mt-16 hidden absolute md:block">
            <img src={Plant} alt="" className="h-full opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
