import { useState } from "react";

// lib
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Pagination } from "swiper";

// assets
import Banner1 from "src/assets/hero/banner-1.png";
import Banner2 from "src/assets/hero/banner-2.png";
import Banner3 from "src/assets/hero/banner-3.png";

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [slideSelected, setSlideSelected] = useState(1);

  return (
    <section className="w-full ">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="hero-slider">
          <Swiper
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Thumbs, Pagination]}
          >
            <SwiperSlide>
              <div className="flex flex-col items-center lg:flex-row">
                <div className="w-full mb-8 lg:w-5/12">
                  <h2 className="mb-4 text-2xl font-medium text-black text-center lg:text-left lg:text-3xl">
                    Pituku: Jual Beli Sampah Mudah dan Terpercaya
                  </h2>
                  <p className="mb-8 text-base font-normal text-gray-400 text-center lg:text-lg lg:text-left">
                    Platform Pituku memudahkan transaksi jual beli sampah dan
                    limbah berkualitas dengan harga terbaik, transparan, dan
                    terpercaya.
                  </p>
                  <button className="px-4 py-2 w-full text-lg font-normal text-green-600 border-2 border-green-600 rounded-md hover:bg-green-50 lg:w-auto">
                    PESAN SEKARANG
                  </button>
                </div>
                <div className="w-full mb-8 lg:w-7/12">
                  <div className="flex justify-center">
                    <div className="h-80 lg:h-64">
                      <img src={Banner1} alt="" className="h-full" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center lg:flex-row">
                <div className="w-full mb-8 order-2 lg:w-7/12 lg:order-1">
                  <div className="flex justify-center">
                    <div className="h-80 lg:h-64">
                      <img src={Banner2} alt="" className="h-full" />
                    </div>
                  </div>
                </div>
                <div className="w-full mb-8 order-1 lg:w-5/12 lg:order-2">
                  <h2 className="mb-4 text-2xl font-medium text-black text-center lg:text-left lg:text-3xl">
                    Gabung menjadi Agen Penjualan Produk Pituku
                  </h2>
                  <p className="mb-8 text-base font-normal text-gray-400 text-center lg:text-lg lg:text-left">
                    Dapatkan keuntungan hingga Rp 10 juta/bulan dengan bergabung
                    menjadi agen penjual produk ramah lingkungan Pituku
                  </p>
                  <button className="px-4 py-2 w-full text-lg font-normal text-white border-2 bg-green-600 border-green-600 rounded-md hover:opacity-75 lg:w-auto">
                    MULAI SEKARANG
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <h2 className="mb-4 text-3xl font-medium text-black text-center">
                  Buat Brand Eco-Friendly
                </h2>
                <p className="mb-4 text-lg font-normal text-gray-400 text-center">
                  Produksi brand ramah lingkungan di pabrik rekanan Pituku. Kami
                  dapat membuat berbagai kategori produk ramah lingkungan
                  seperti furnitur dan kemasan daur ulang.
                </p>
                <button className="mb-8 w-full px-4 py-2 text-lg font-normal text-white border-2 bg-green-600 border-green-600 rounded-md hover:opacity-75 lg:w-auto">
                  MULAI SEKARANG
                </button>
                <div className="flex justify-center">
                  <div className="h-80 lg:h-48">
                    <img src={Banner3} alt="" className="h-full object-cover" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mx-16 hidden lg:block">
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
          >
            <SwiperSlide>
              <div className="flex items-center">
                <button
                  className={` ${
                    slideSelected === 1
                      ? "w-full px-2 py-3 border-2 border-green-600 rounded-lg hover:bg-green-50"
                      : "w-full px-2 py-3 hover:border-2 hover:border-green-600 hover:bg-gray-50 hover:rounded-lg"
                  } `}
                  onClick={() => {
                    setSlideSelected(1);
                  }}
                >
                  <h2
                    className={` ${
                      slideSelected === 1
                        ? "text-xl font-medium text-orange-600 text-left"
                        : "text-xl font-medium text-black text-left"
                    } `}
                  >
                    Jual Beli Sampah
                  </h2>
                  <p
                    className={` ${
                      slideSelected === 1
                        ? "text-sm font-normal text-green-600 text-left"
                        : "text-sm font-normal text-black text-left"
                    } `}
                  >
                    Stok sampah terbesar
                  </p>
                </button>
                <div className="h-16 mx-4 border-r-2 border-gray-200"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center">
                <button
                  className={` ${
                    slideSelected === 2
                      ? "w-full px-2 py-3 border-2 border-green-600 rounded-lg hover:bg-green-50"
                      : "w-full px-2 py-3 hover:border-2 hover:border-green-600 hover:bg-gray-50 hover:rounded-lg"
                  } `}
                  onClick={() => {
                    setSlideSelected(2);
                  }}
                >
                  <h2
                    className={` ${
                      slideSelected === 2
                        ? "text-xl font-medium text-orange-600 text-left"
                        : "text-xl font-medium text-black text-left"
                    } `}
                  >
                    Social Commerce
                  </h2>
                  <p
                    className={` ${
                      slideSelected === 2
                        ? "text-sm font-normal text-green-600 text-left"
                        : "text-sm font-normal text-black text-left"
                    } `}
                  >
                    Gabung menjadi agen
                  </p>
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center">
                <div className="h-16 mx-4 border-r-2 border-gray-200"></div>
                <button
                  className={` ${
                    slideSelected === 3
                      ? "w-full px-2 py-3 border-2 border-green-600 rounded-lg hover:bg-green-50"
                      : "w-full px-2 py-3 hover:border-2 hover:border-green-600 hover:bg-gray-50 hover:rounded-lg"
                  } `}
                  onClick={() => {
                    setSlideSelected(3);
                  }}
                >
                  <h2
                    className={` ${
                      slideSelected === 3
                        ? "text-xl font-medium text-orange-600 text-left"
                        : "text-xl font-medium text-black text-left"
                    } `}
                  >
                    Produksi Eco-Friendly
                  </h2>
                  <p
                    className={` ${
                      slideSelected === 3
                        ? "text-sm font-normal text-green-600 text-left"
                        : "text-sm font-normal text-black text-left"
                    } `}
                  >
                    Bikin brand eco-friendly
                  </p>
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
