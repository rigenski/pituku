import React from "react";

// assets
import Feature1 from "src/assets/feature/feature-1.png";
import Feature2 from "src/assets/feature/feature-2.png";
import Feature3 from "src/assets/feature/feature-3.png";

const Feature = () => {
  return (
    <section className="w-full ">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col mb-16 lg:flex-row">
          <div className="w-full flex flex-col items-center lg:w-6/12 lg:items-start">
            <div className="mb-4 flex items-end">
              <div className="w-4 h-4 bg-orange-200 rounded-tr-full"></div>
              <div className="w-6 h-6 bg-green-200 rounded-tl-full"></div>
            </div>
            <h4 className="mb-4 text-2xl font-medium text-black text-center lg:text-3xl lg:text-left">
              Harga Terbaik dan Stok Terlengkap
            </h4>
            <p className="mb-8 text-base font-normal text-black text-center lg:text-lg lg:text-left">
              Dapatkan harga terbaik sampah dan limbah dengan stok terlengkap
              dan terupdate dari mitra kami yang terintegrasi
            </p>
          </div>
          <div className="w-full lg:w-6/12">
            <div className="flex justify-center">
              <div className="h-64 mb-8">
                <img src={Feature1} alt="" className="h-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-16 lg:flex-row">
          <div className="w-full order-2 lg:w-6/12 lg:order-1">
            <div className="flex justify-center">
              <div className="h-64 mb-8">
                <img src={Feature2} alt="" className="h-full" />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center order-1 lg:w-6/12 lg:items-start lg:order-2">
            <div className="mb-4 flex items-end">
              <div className="w-4 h-4 bg-orange-200 rounded-tr-full"></div>
              <div className="w-6 h-6 bg-green-200 rounded-tl-full"></div>
            </div>
            <h4 className="mb-4 text-2xl font-medium text-black text-center lg:text-3xl lg:text-left">
              Solusi pembayaran sampai dengan 3 bulan
            </h4>
            <p className="mb-8 text-base font-normal text-black text-center lg:text-lg lg:text-left">
              Pembeli sampah dan limbah di Pituku dapat mengajukan pembayaran
              tempo sampai tiga bulan dengan mudah
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-4 flex items-end">
            <div className="w-4 h-4 bg-orange-200 rounded-tr-full"></div>
            <div className="w-6 h-6 bg-green-200 rounded-tl-full"></div>
          </div>
          <h2 className="max-w-4xl  mb-4 text-2xl font-medium text-black text-center lg:text-3xl">
            Tingkatkan Penjualan Sampah dan Limbah dengan Menjadi Mitra Pituku
          </h2>
          <p className="max-w-4xl mb-8 text-base font-normal text-black text-center lg:text-lg">
            Bergabung bersama kami dengan menjadi Mitra untuk mendapatkan akses
            pembeli sampah dan limbah di Indonesia
          </p>
          <div className="flex justify-center">
            <div className="h-48 lg:h-64">
              <img src={Feature3} alt="" className="h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
