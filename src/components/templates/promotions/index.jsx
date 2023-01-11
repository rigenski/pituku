import React, { useState } from "react";

// lib
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper";
import { Icon } from "@iconify/react";

// assets
import Promotions1 from "src/assets/promotions/promotions-1.png";

const Promotions = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [slideSelected, setSlideSelected] = useState(1);

  return (
    <section className="w-full ">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          <div className="mb-4 flex items-end">
            <div className="w-4 h-4 bg-orange-200 rounded-tr-full"></div>
            <div className="w-6 h-6 bg-green-200 rounded-tl-full"></div>
          </div>
          <h2 className="max-w-2xl mb-8 text-3xl font-medium text-black text-center">
            Keuntungan
          </h2>
        </div>
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="w-full"
        >
          <SwiperSlide>
            <button
              className={` ${
                slideSelected === 1
                  ? "w-full px-2 py-2 border-b-4 border-green-600 hover:bg-green-50"
                  : "w-full px-2 py-3 hover:bg-gray-50"
              } `}
              onClick={() => {
                setSlideSelected(1);
              }}
            >
              <p
                className={` ${
                  slideSelected === 1
                    ? "text-sm font-normal text-green-600 text-center"
                    : "text-sm font-normal text-gray-400 text-center"
                } `}
              >
                Mitra Pituku
              </p>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button
              className={` ${
                slideSelected === 2
                  ? "w-full px-2 py-2 border-b-4 border-green-600 hover:bg-green-50"
                  : "w-full px-2 py-3 hover:bg-gray-50"
              } `}
              onClick={() => {
                setSlideSelected(2);
              }}
            >
              <p
                className={` ${
                  slideSelected === 2
                    ? "text-sm font-normal text-green-600 text-center"
                    : "text-sm font-normal text-gray-400 text-center"
                } `}
              >
                Pembeli
              </p>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button
              className={` ${
                slideSelected === 3
                  ? "w-full px-2 py-2 border-b-4 border-green-600 hover:bg-green-50"
                  : "w-full px-2 py-3 hover:bg-gray-50"
              } `}
              onClick={() => {
                setSlideSelected(3);
              }}
            >
              <p
                className={` ${
                  slideSelected === 3
                    ? "text-sm font-normal text-green-600 text-center"
                    : "text-sm font-normal text-gray-400 text-center"
                } `}
              >
                Brands
              </p>
            </button>
          </SwiperSlide>
        </Swiper>
        <Swiper
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Thumbs]}
        >
          <SwiperSlide>
            <div className="pt-2 px-4 pb-4">
              <div className="px-4 py-8 flex flex-col rounded-lg shadow-md lg:flex-row">
                <div className="w-full pr-4 lg:w-6/12">
                  <p className="mb-4 text-sm font-medium text-black">
                    Tingkatkan penjualan sampah dan limbah dengan bergabung
                    menjadi Mitra Pituku
                  </p>
                  <div className="ml-4 mb-4 flex items-center">
                    <Icon
                      icon="material-symbols:check-circle"
                      className="h-6 w-6 text-green-600"
                    />
                    <p className="ml-4 text-sm font-medium text-gray-400">
                      Pembayaran Tunai
                    </p>
                  </div>
                  <div className="ml-4 mb-4 flex items-center">
                    <Icon
                      icon="material-symbols:check-circle"
                      className="h-6 w-6 text-green-600"
                    />
                    <p className="ml-4 text-sm font-medium text-gray-400">
                      Kemudahan Pengiriman
                    </p>
                  </div>
                  <div className="ml-4 mb-4 flex items-center">
                    <Icon
                      icon="material-symbols:check-circle"
                      className="h-6 w-6 text-green-600"
                    />
                    <p className="ml-4 text-sm font-medium text-gray-400">
                      Jual dengan harga terbaik
                    </p>
                  </div>
                </div>
                <div className="w-full pl-4 lg:w-6/12">
                  <div className="mt-4 flex justify-center lg:mt-0 lg:justify-end">
                    <div className="w-96 h-52">
                      <iframe
                        src="https://storage.googleapis.com/pituku-web-prod/web-asset/Penjual.mp4"
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-2 px-4 pb-4">
              <div className="px-4 py-8 flex flex-col rounded-lg shadow-md lg:flex-row">
                <div className="w-full pr-4 lg:w-6/12">
                  <p className="mb-4 text-sm font-medium text-black">
                    Dapatkan stok sampah dan limbah terlengkap dengan harga
                    transparan
                  </p>
                  <div className="ml-4 mb-4 flex items-center">
                    <Icon
                      icon="material-symbols:check-circle"
                      className="h-6 w-6 text-green-600"
                    />
                    <p className="ml-4 text-sm font-medium text-gray-400">
                      Pembayaran sampai dengan 3 bulan
                    </p>
                  </div>
                  <div className="ml-4 mb-4 flex items-center">
                    <Icon
                      icon="material-symbols:check-circle"
                      className="h-6 w-6 text-green-600"
                    />
                    <p className="ml-4 text-sm font-medium text-gray-400">
                      Garansi kualitas bahan baku
                    </p>
                  </div>
                  <div className="ml-4 mb-4 flex items-center">
                    <Icon
                      icon="material-symbols:check-circle"
                      className="h-6 w-6 text-green-600"
                    />
                    <p className="ml-4 text-sm font-medium text-gray-400">
                      Kemudahan pengiriman
                    </p>
                  </div>
                  <div className="ml-4 mb-4 flex items-center">
                    <Icon
                      icon="material-symbols:check-circle"
                      className="h-6 w-6 text-green-600"
                    />
                    <p className="ml-4 text-sm font-medium text-gray-400">
                      gratis sampel produk
                    </p>
                  </div>
                </div>
                <div className="w-full pl-4 lg:w-6/12">
                  <div className="mt-4 flex justify-center lg:mt-0 lg:justify-end">
                    <div className="w-96 h-52">
                      <iframe
                        src="https://storage.googleapis.com/pituku-web-prod/web-asset/Pembeli.mp4"
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-2 px-4 pb-4">
              <div className="px-4 py-8 flex flex-col rounded-lg shadow-md lg:flex-row">
                <div className="w-full pr-4 lg:w-6/12">
                  <p className="mb-4 text-sm font-medium text-black">
                    Kreasikan produk ramah lingkungan di jaringan pabrik Pituku
                  </p>
                  <div className="ml-4 mb-4 flex items-center">
                    <Icon
                      icon="material-symbols:check-circle"
                      className="h-6 w-6 text-green-600"
                    />
                    <p className="ml-4 text-sm font-medium text-gray-400">
                      Produksi dengan kuantitas minim
                    </p>
                  </div>
                  <div className="ml-4 mb-4 flex items-center">
                    <Icon
                      icon="material-symbols:check-circle"
                      className="h-6 w-6 text-green-600"
                    />
                    <p className="ml-4 text-sm font-medium text-gray-400">
                      Kemudahan pengiriman
                    </p>
                  </div>
                  <div className="ml-4 mb-4 flex items-center">
                    <Icon
                      icon="material-symbols:check-circle"
                      className="h-6 w-6 text-green-600"
                    />
                    <p className="ml-4 text-sm font-medium text-gray-400">
                      Gratis desain produl dan sampel
                    </p>
                  </div>
                </div>
                <div className="w-full pl-4 lg:w-6/12">
                  <div className="mt-4 flex justify-center lg:mt-0 lg:justify-end">
                    <div className="w-96 h-52">
                      <img src={Promotions1} alt="" className="w-full h-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Promotions;
