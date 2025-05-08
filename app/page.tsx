"use client";

import Image from "next/image";
import { useState } from "react";

// Keep your WhatsApp image names in /public exactly as they are
const rawImages = [
  "/WhatsApp Image 2025-05-06 at 19.35.29_78d9b4f7.jpg",
  "/WhatsApp Image 2025-05-06 at 19.35.30_3e4c8dab.jpg",
  "/WhatsApp Image 2025-05-06 at 19.35.29_78d9b4f7.jpg",
  "/WhatsApp Image 2025-05-06 at 19.35.30_3e4c8dab.jpg",
  "/WhatsApp Image 2025-05-06 at 19.35.30_418a4ee8.jpg",
];
// URL-encode spaces so Next/Image can load them
const productImages = rawImages.map((img) => encodeURI(img));

export default function ProductDemoPage() {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="bg-white text-black font-sans">
      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        {/* Hamburger Menu */}
        <button aria-label="Menu" className="hover:text-gray-600 transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Logo centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <span className="text-xl font-bold tracking-widest">RETERNITY</span>
        </div>

        {/* Search + Cart */}
        <div className="flex items-center space-x-4">
          <button aria-label="Search" className="hover:text-gray-600 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
          </button>
          <button aria-label="Cart" className="hover:text-gray-600 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 3h18v18H3V3z" />
              <path d="M6 6h12v12H6z" />
            </svg>
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT: Image + Thumbnails */}
        <div className="relative">
          {/* Main Image */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <Image
              src={selectedImage}
              alt="Lumèvo Canvas Zip-Shirt"
              width={600}
              height={700}
              className="w-full object-cover"
              priority
            />
          </div>

          {/* “+” Quick Add Button */}
          <button className="absolute top-4 right-4 bg-white w-8 h-8 rounded-full shadow flex items-center justify-center hover:bg-gray-100 transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>

          {/* Thumbnails below, centered */}
          <div className="flex justify-center space-x-3 mt-4 overflow-x-auto">
            {productImages.map((img, idx) => (
              <button
                key={idx}
                className={`flex-shrink-0 border-2 rounded-md overflow-hidden transition ${
                  selectedImage === img ? "border-black" : "border-gray-200"
                }`}
                onClick={() => setSelectedImage(img)}
              >
                <Image src={img} alt={`Thumbnail ${idx + 1}`} width={90} height={90} className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="flex flex-col space-y-6">
          <p className="text-sm text-gray-500">Home / Shirts / Lumèvo Canvas Zip-Shirt</p>
          <h1 className="text-3xl font-semibold tracking-tight">
            LUMÉVO CANVAS ZIP-SHIRT - BLUE
          </h1>
          <p className="text-xl font-medium">110,00€</p>

          {/* Size Selector */}
          <div>
            <p className="text-sm font-medium mb-2">SIZE</p>
            <div className="flex space-x-3">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-1.5 border rounded text-sm font-medium transition ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {selectedSize ? `Size ${selectedSize} selected` : "Please select a size"}
            </p>
          </div>

          {/* Add to Cart */}
          <button
            disabled={!selectedSize}
            className={`w-full py-3 rounded text-sm font-medium transition ${
              selectedSize
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-gray-300 text-gray-700 cursor-not-allowed"
            }`}
          >
            Add to Cart
          </button>
        </div>
      </main>
    </div>
  );
}
