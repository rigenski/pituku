import React from "react";
// lib
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// assets
import Payment1 from "src/assets/payment/payment-1.png";
import Payment2 from "src/assets/payment/payment-2.png";
import Payment3 from "src/assets/payment/payment-3.png";
import Payment4 from "src/assets/payment/payment-4.png";

const Payment = () => {
  return (
    <section className="w-full">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          <div className="mb-4 flex items-end">
            <div className="w-4 h-4 bg-orange-200 rounded-tr-full"></div>
            <div className="w-6 h-6 bg-green-200 rounded-tl-full"></div>
          </div>
          <h2 className="max-w-2xl mb-4 text-2xl font-medium text-black text-center lg:text-3xl">
            Kelola Sampah dan Limbah dengan Mudah sebagai Mitra
          </h2>
          <p className="max-w-3xl mb-8 text-base font-normal text-black text-center lg:text-lg">
            Mitra Pituku dapat melakukan pembaharuan stok, harga penjualan,
            kualitas sampah dan limbah secara real-time
          </p>
        </div>
        <div className="relative">
          <div className="h-80 lg:h-auto">
            <svg
              className="max-w-2xl mx-auto hidden lg:block"
              viewBox="0 0 1050 642"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              data-v-549317c7=""
            >
              <g
                id="deco-screen"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                data-v-549317c7=""
              >
                <g id="artwork" data-v-549317c7="">
                  <path
                    d="M767,158 C837.170772,158.182154 894,212.285233 894,278.996688 L894,279 L767,279 L767,158 Z"
                    style={{ fill: "#4caf50" }}
                    data-v-549317c7=""
                  ></path>{" "}
                  <path
                    d="M767,279 C767.001743,345.719735 823.830971,399.81619 894,400 L894,279 L767,279 Z"
                    style={{ fill: "#4caf50" }}
                    data-v-549317c7=""
                  ></path>{" "}
                  <path
                    d="M1021,279 C1020.99826,345.719735 964.169029,399.81619 894,400 L894,279 L1021,279 Z"
                    style={{ fill: "#ffa000" }}
                    data-v-549317c7=""
                  ></path>{" "}
                  <path
                    d="M1021,158 C950.830971,158.182154 894,212.285233 894,278.996688 L894,279 L1021,279 L1021,158 Z"
                    style={{ fill: "#ff6f00" }}
                    data-v-549317c7=""
                  ></path>{" "}
                  <path
                    d="M767,521 C767.001743,454.280117 823.830971,400.18381 894,400 L894,521 L767,521 Z"
                    style={{ fill: "#c8e6c9" }}
                    data-v-549317c7=""
                  ></path>{" "}
                  <path
                    d="M1021,521 C1020.99826,454.280117 964.169029,400.18381 894,400 L894,521 L1021,521 Z"
                    style={{ fill: "#4caf50" }}
                    data-v-549317c7=""
                  ></path>{" "}
                  <path
                    d="M894,521 C894.001743,587.721076 950.830971,641.817349 1021,642 L1021,521 L894,521 Z"
                    style={{ fill: "#4caf50" }}
                    data-v-549317c7=""
                  ></path>{" "}
                  <path
                    d="M156.173429,15.349404 C164.263917,29.8035619 159.106287,48.0824621 144.65279,56.172915 C130.19549,64.2651789 111.917867,59.1048553 103.827016,44.649792 C95.7354409,30.1956342 100.893795,11.9185449 115.351096,3.82628103 C129.804321,-4.2641719 148.081944,0.894340731 156.173429,15.349404 Z"
                    transform="translate(130.000000, 30.000000) scale(-1, 1) translate(-130.000000, -30.000000) "
                    style={{ fill: "#2196f3" }}
                    data-v-549317c7=""
                  ></path>{" "}
                  <path
                    d="M127,92 C126.808812,158.855618 70.022547,213 0.00399756396,213 L0,213 L0,92 L127,92 Z"
                    transform="translate(63.500000, 152.500000) scale(-1, 1) translate(-63.500000, -152.500000) "
                    style={{ fill: "#ffa000" }}
                    data-v-549317c7=""
                  ></path>{" "}
                  <path
                    d="M254,92 C183.970093,92.0016605 127.191187,146.146043 127,213 L254,213 L254,92 Z"
                    transform="translate(190.500000, 152.500000) scale(-1, 1) translate(-190.500000, -152.500000) "
                    style={{ fill: "#ff6f00" }}
                    data-v-549317c7=""
                  ></path>{" "}
                  <path
                    d="M254,334 C183.970093,333.998173 127.191187,279.853774 127,213 L254,213 L254,334 Z"
                    transform="translate(190.500000, 273.500000) scale(-1, 1) translate(-190.500000, -273.500000) "
                    style={{ fill: "#c8e6c9" }}
                    data-v-549317c7=""
                  ></path>{" "}
                  <path
                    d="M177,334 C176.808812,267.145894 120.022547,213 50.0039976,213 L50,213 L50,334 L177,334 Z"
                    transform="translate(113.500000, 273.500000) scale(-1, 1) translate(-113.500000, -273.500000) "
                    style={{ fill: "#2e7d32" }}
                    data-v-549317c7=""
                  ></path>{" "}
                  <path
                    d="M21.0274,417.7899 C18.2812,417.7899 16.0549,415.5627 16.0549,412.8165 C16.0549,410.0703 18.2812,407.8443 21.0274,407.8443 C23.7736,407.8443 26,410.0703 26,412.8165 C26,415.5627 23.7736,417.7899 21.0274,417.7899 Z"
                    transform="translate(21.027450, 412.817100) rotate(180.000000) translate(-21.027450, -412.817100) "
                    style={{ fill: "#4caf50" }}
                    data-v-549317c7=""
                  ></path>{" "}
                  <path
                    d="M21.0274,393.8678 C18.2812,393.8678 16.0549,391.6409 16.0549,388.8955 C16.0549,386.1482 18.2812,383.9221 21.0274,383.9221 C23.7736,383.9221 26,386.1482 26,388.8955 C26,391.6409 23.7736,393.8678 21.0274,393.8678 Z"
                    transform="translate(21.027450, 388.894950) rotate(180.000000) translate(-21.027450, -388.894950) "
                    style={{ fill: "#4caf50" }}
                    data-v-549317c7=""
                  ></path>{" "}
                  <path
                    d="M21.0274,369.9459 C18.2812,369.9459 16.0549,367.7196 16.0549,364.9734 C16.0549,362.2269 18.2812,360 21.0274,360 C23.7736,360 26,362.2269 26,364.9734 C26,367.7196 23.7736,369.9459 21.0274,369.9459 Z"
                    transform="translate(21.027450, 364.972950) rotate(180.000000) translate(-21.027450, -364.972950) "
                    style={{ fill: "#4caf50" }}
                    data-v-549317c7=""
                  ></path>{" "}
                  <polygon
                    transform="translate(92.767050, 375.697900) scale(-1, -1) rotate(-90.000000) translate(-92.767050, -375.697900) "
                    points="50.53395 417.93085 135.00015 417.93085 135.00015 333.46495 50.53395 333.46495"
                    style={{ fill: "#2e7d32" }}
                    data-v-549317c7=""
                  ></polygon>{" "}
                  <path
                    d="M1044.9725,209.9456 C1042.2263,209.9456 1040,207.7184 1040,204.9722 C1040,202.226 1042.2263,200 1044.9725,200 C1047.7187,200 1049.9451,202.226 1049.9451,204.9722 C1049.9451,207.7184 1047.7187,209.9456 1044.9725,209.9456 Z"
                    style={{ fill: "#ff6f00" }}
                    data-v-549317c7=""
                  ></path>{" "}
                  <path
                    d="M1044.9725,233.8678 C1042.2263,233.8678 1040,231.6409 1040,228.8955 C1040,226.1482 1042.2263,223.9221 1044.9725,223.9221 C1047.7187,223.9221 1049.9451,226.1482 1049.9451,228.8955 C1049.9451,231.6409 1047.7187,233.8678 1044.9725,233.8678 Z"
                    style={{ fill: "#ff6f00" }}
                    data-v-549317c7=""
                  ></path>{" "}
                  <path
                    d="M1044.9725,257.7899 C1042.2263,257.7899 1040,255.5636 1040,252.8174 C1040,250.0709 1042.2263,247.844 1044.9725,247.844 C1047.7187,247.844 1049.9451,250.0709 1049.9451,252.8174 C1049.9451,255.5636 1047.7187,257.7899 1044.9725,257.7899 Z"
                    style={{ fill: "#ff6f00" }}
                    data-v-549317c7=""
                  ></path>{" "}
                  <path
                    d="M220,418 L50,418 C50,511.88835 126.11049,588 220,588 L220,418 Z"
                    style={{ fill: "#ff6f00" }}
                    data-v-549317c7=""
                  ></path>{" "}
                  <path
                    d="M390,418 L390,588 L560,588 C560,494.11165 483.889849,418 390,418 Z"
                    style={{ fill: "#2e7d32" }}
                    data-v-549317c7=""
                  ></path>{" "}
                  <polygon
                    points="220 588 390 588 390 418 220 418"
                    style={{ fill: "#2e7d32" }}
                    data-v-549317c7=""
                  ></polygon>{" "}
                  <path
                    d="M220,418 L50,418 C50,464.862003 69.0266665,507.289154 99.7901508,538 L220,418 Z"
                    fill="#FFF000"
                    id="Fill-5"
                    data-v-549317c7=""
                  ></path>{" "}
                  <path
                    d="M390,418 L390,588 L510,467.791064 C479.291766,437.027761 436.864012,418 390,418 Z"
                    style={{ fill: "#2e7d32" }}
                    data-v-549317c7=""
                  ></path>{" "}
                  <path
                    d="M810,545.4659 L894.4648,545.4659 L894.4648,461 C847.8164,461 810,498.8167 810,545.4659 Z"
                    style={{ fill: "#4caf50" }}
                    data-v-549317c7=""
                  ></path>{" "}
                  <path
                    d="M919.579024,510.744989 C931.04055,531.221713 923.733907,557.116821 903.258119,568.578296 C882.776944,580.042337 856.883645,572.731878 845.421606,552.253872 C833.958541,531.777148 841.26621,505.884605 861.747385,494.420565 C882.222788,482.95909 908.116087,490.266983 919.579024,510.744989 Z"
                    style={{ fill: "#2196f3" }}
                    data-v-549317c7=""
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div className="absolute top-6 w-full">
            <div className="payment-slider max-w-2xl mx-auto relative">
              <Swiper
                slidesPerView={1}
                spaceBetween={24}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
              >
                <SwiperSlide>
                  <div className="flex justify-center">
                    <div className="h-60 md:h-64 lg:h-80">
                      <img
                        src={Payment1}
                        alt=""
                        className="h-full rounded-xl shadow-lg"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center">
                    <div className="h-60 md:h-64 lg:h-80">
                      <img
                        src={Payment2}
                        alt=""
                        className="h-full rounded-xl shadow-lg"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center">
                    <div className="h-60 md:h-64 lg:h-80">
                      <img
                        src={Payment3}
                        alt=""
                        className="h-full rounded-xl shadow-lg"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center">
                    <div className="h-60 md:h-64 lg:h-80">
                      <img
                        src={Payment4}
                        alt=""
                        className="h-full rounded-xl shadow-lg"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
