'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    title: "CareerRPG",
    description: "Gamified career development platform",
    image: "/careerrpg.png",
    link: "#",
    status: "Coming Soon"
  },
  {
    title: "NexzGen Academy",
    description: "AI-powered e-learning platform",
    image: "/na.png",
    link: "#",
    status: "Coming Soon"
  },
  {
    title: "ARespiratory",
    description: "AR-based medical education platform",
    image: "/ar.png",
    link: "#",
    status: "Coming Soon"
  },
  {
    title: "ServisLah",
    description: "Car service management system",
    image: "/sl.png",
    link: "#",
    status: "Coming Soon"
  }
];

export default function ProductsContent() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-32 pb-16 text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
            Our Products
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Innovative solutions designed to transform industries and empower users.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl border border-[#2A0E61]">
                  <div className="aspect-[16/9] relative">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover mt-5"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 p-6 w-full">
                    <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      {product.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}