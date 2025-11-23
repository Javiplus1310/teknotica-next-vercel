'use client'

import { motion } from 'framer-motion'
import Image from "next/image"
import { useState } from "react"

export default function Hero() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <section
            id="hero"
            className="relative flex flex-col items-center justify-center text-center py-40 px-6 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black"
        >
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-extrabold text-indigo-500 mb-4"
            >
                Armado de PCs a tu medida
            </motion.h1>
            
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="max-w-2xl text-lg text-gray-700 dark:text-gray-300 light:text-gray-700 mb-4"
            >
                Armado de PC personalizadas, confiables y a tu medida. Ya sea para trabajar, estudiar o jugar, diseñamos tu setup ideal.
            </motion.p>
            
            <motion.a
                href="#contacto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition mb-8"
            >
                Cotiza tu PC
            </motion.a>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
                {["/images/1000033994.jpg", "/images/1000027919.jpg", "/images/1000057879.jpg"].map((src, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        className="cursor-pointer"
                        onClick={() => setSelectedImage(src)}
                    >
                        <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src={src}
                                alt={`Imagen Teknotica ${index + 1}`}
                                width={400}
                                height={250}
                                className="w-full h-auto object-cover transition-transform duration-300"
                            />

                        </div>
                    </motion.div>
                ))}
            </div>
            
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-white/95 dark:bg-black/90 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="relative max-w-4xl w-full"
                    >
                        <Image
                            src={selectedImage}
                            alt="Zoom image"
                            width={500}
                            height={500}
                            className="rounded-lg shadow-2xl mx-auto"
                        />
                        
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-6 text-gray-900 dark:text-white text-3xl hover:text-indigo-400 transition"
                        >
                            ✕
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </section>
    )
}