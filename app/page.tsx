"use client";

import Image from "next/image";
import { useState } from "react";

const rawImages = [
  "/WhatsApp Image 2025-05-06 at 19.35.29_78d9b4f7.jpg",
  "/WhatsApp Image 2025-05-06 at 19.35.30_3e4c8dab.jpg",
  "/WhatsApp Image 2025-05-06 at 19.35.30_418a4ee8.jpg",
];

const productImages = rawImages.map((img) => encodeURI(img));

export default function ProductDemoPage() {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div className="text-xl font-bold tracking-widest">RETERNITY</div>
        <div className="flex items-center space-x-4">
          <button aria-label="Search">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 21l-4.35-4.35M4.5 4.5a7.5 7.5 0 0112.15 12.15z" />
            </svg>
          </button>
          <button aria-label="Cart">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 3h18v18H3V3z" />
              <path d="M6 6h12v12H6z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Product Content */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side: Thumbnails + Image */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex md:flex-col gap-4 overflow-auto hide-scrollbar">
            {productImages.map((img, idx) => (
              <button
                key={idx}
                className={`border ${
                  selectedImage === img ? "border-black" : "border-gray-200"
                } rounded-lg overflow-hidden w-20 h-24`}
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt={`Thumb ${idx + 1}`}
                  width={80}
                  height={100}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>

          <div className="flex-1 border border-gray-200 rounded-lg overflow-hidden">
            <Image
              src={selectedImage}
              alt="Lumèvo Canvas Zip-Shirt"
              width={700}
              height={900}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </div>

        {/* Right Side: Info */}
        <div className="space-y-6">
          <div>
            <p className="text-xs text-gray-500">LUMÉVO CANVAS ZIP-SHIRT - BLUE</p>
            <p className="text-2xl font-semibold mt-1">Rs.35,900.00</p>
          </div>

          <p className="text-sm text-gray-600">
            The Lumèvo Canvas Zip-Shirt is crafted from durable cotton canvas with a full front zipper, relaxed fit,
            and minimalist embroidery. A premium blend of comfort and streetwear style.
          </p>

          {/* Size Selector */}
          <div>
            <p className="text-sm font-medium mb-1">SIZE</p>
            <div className="flex flex-wrap gap-2">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 text-sm border rounded-sm transition-all duration-200 ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            disabled={!selectedSize}
            className={`w-full py-3 rounded text-sm font-semibold transition ${
              selectedSize
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-gray-300 text-gray-700 cursor-not-allowed"
            }`}
          >
            ADD TO CART
          </button>

          {/* Detail Sections */}
          <div className="space-y-4 text-sm">
            {["Description", "Shipping & Returns", "Size Guide"].map((label) => (
              <div key={label} className="border-b py-3 flex justify-between items-center cursor-pointer">
                <span>{label}</span>
                <span>+</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-4 text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <span>↩</span>
              <span>14 days return policy</span>
            </div>
            <div className="flex items-center gap-1">
              <span>🔒</span>
              <span>Secure payment</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
