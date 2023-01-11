import React from "react";

// lib
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";

// assets
import Testimonials1 from "src/assets/testimonials/testimonials-1.jpeg";
import Testimonials2 from "src/assets/testimonials/testimonials-2.jpeg";

const Testimonials = () => {
  return (
    <section className="w-full">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          <div className="mb-4 flex items-end">
            <div className="w-4 h-4 bg-orange-200 rounded-tr-full"></div>
            <div className="w-6 h-6 bg-green-200 rounded-tl-full"></div>
          </div>
          <h2 className="max-w-2xl mb-4 text-3xl font-medium text-black text-center">
            Testimoni Pembeli dan Mitra
          </h2>
          <p className="max-w-3xl mb-8 text-lg font-normal text-black text-center">
            They are doing great things with us
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Swiper
              spaceBetween={16}
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide>
                <div
                  className="relative flex justify-center overflow-hidden"
                  style={{ borderRadius: "64px 24px 24px 24px" }}
                >
                  <div className="w-full flex">
                    <div className="h-64 w-4/12"></div>
                    <div className="h-64 w-8/12">
                      <img
                        src={Testimonials1}
                        alt=""
                        className="h-full w-full hidden object-cover object-top rounded-r-3xl lg:block"
                      />
                    </div>
                  </div>
                  <div className="w-full absolute flex">
                    <div className="h-64 w-full ml-0 px-4 py-16 bg-green-600 scale-100 rounded-r-3xl lg:w-7/12 lg:-ml-8 lg:px-12 lg:pl-16 lg:scale-125 lg:rounded-full">
                      <p className="mb-4 text-sm font-normal text-white lg:text-xs">
                        <span className="hidden lg:block">
                          " Pituku membantu kami untuk melakukan pembelian
                          limbah .... "
                        </span>
                        <span className="block lg:hidden">
                          " Pituku membantu kami untuk melakukan pembelian
                          limbah sekam padi dengan mudah. Kami bisa melakukan
                          pembelian bahan baku secara tempo... "
                        </span>
                      </p>
                      <h4 className="text-lg font-medium text-white lg:text-sm">
                        Deny Fibrata
                      </h4>
                      <p className="text-sm font-normal text-white lg:text-xs">
                        Direktur Utama
                      </p>
                    </div>
                    <div className="h-64 w-0 lg:w-5/12"></div>
                    <div className="-bottom-6 -left-6 h-16 w-16 hidden absolute bg-orange-400 rounded-full lg:block"></div>
                    <div className="top-4 ml-52 h-6 w-6 hidden absolute bg-blue-400 rounded-full lg:block"></div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="relative flex justify-center overflow-hidden"
                  style={{ borderRadius: "64px 24px 24px 24px" }}
                >
                  <div className="w-full flex">
                    <div className="h-64 w-4/12"></div>
                    <div className="h-64 w-8/12">
                      <img
                        src={Testimonials2}
                        alt=""
                        className="h-full w-full hidden object-cover object-top rounded-r-3xl lg:block"
                      />
                    </div>
                  </div>
                  <div className="w-full absolute flex">
                    <div className="h-64 w-full ml-0 px-4 py-16 bg-green-600 scale-100 rounded-r-3xl lg:w-7/12 lg:-ml-8 lg:px-12 lg:pl-16 lg:scale-125 lg:rounded-full">
                      <p className="mb-4 text-sm font-normal text-white lg:text-xs">
                        <span className="hidden lg:block">
                          " Sebelum ada Pituku kami kesulitan menjual sampah.
                          dan Ternyata .... "
                        </span>
                        <span className="block lg:hidden">
                          " Sebelum ada Pituku kami kesulitan menjual sampah.
                          dan Ternyata pemesanan dari pabrik meningkat dengan
                          bantuan sistem Pituku. Terimakasih Pituku... "
                        </span>
                      </p>
                      <h4 className="text-lg font-medium text-white lg:text-sm">
                        Haji Sofyan
                      </h4>
                      <p className="text-sm font-normal text-white lg:text-xs">
                        Lapak Sampah Cikupa
                      </p>
                    </div>
                    <div className="h-64 w-0 lg:w-5/12"></div>
                    <div className="-bottom-6 -left-6 h-16 w-16 hidden absolute bg-orange-400 rounded-full lg:block"></div>
                    <div className="top-4 ml-52 h-6 w-6 hidden absolute bg-blue-400 rounded-full lg:block"></div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <button className="button-testimonials p-4 top-2/4 -ml-20 absolute bg-green-800 rounded-xl -translate-y-2/4 z-30 hover:bg-green-900">
              <Icon
                icon="material-symbols:arrow-back-ios-new-rounded"
                className="w-8 h-8 text-white"
              />
            </button>
            <button className="button-testimonials p-4 top-2/4 right-0 -mr-20 absolute bg-green-800 rounded-xl -translate-y-2/4 rotate-180 z-30 hover:bg-green-900">
              <Icon
                icon="material-symbols:arrow-back-ios-new-rounded"
                className="w-8 h-8 text-white"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
