import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const Gallery = ({ friendName }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const photos = [
    { url: '/public/images/photo1.jpg', caption: 'Beautiful Memory 1' },
    { url: '/public/images/photo2.jpg', caption: 'Beautiful Memory 2' },
    { url: '/public/images/photo3.jpg', caption: 'Beautiful Memory 3' },
    { url: '/public/images/photo4.jpg', caption: 'Beautiful Memory 4' },
    { url: '/public/images/photo5.jpg', caption: 'Beautiful Memory 5' },
    { url: '/public/images/photo6.jpg', caption: 'Beautiful Memory 6' },
    { url: '/public/images/photo7.jpg', caption: 'Beautiful Memory 7' },
    { url: '/public/images/photo8.jpg', caption: 'Beautiful Memory 8' },
    { url: '/public/images/photo9.jpg', caption: 'Beautiful Memory 9' },
    { url: '/public/images/photo10.jpg', caption: 'Beautiful Memory 10' },
    { url: '/public/images/photo11.jpg', caption: 'Beautiful Memory 11' },
    { url: '/public/images/photo12.jpg', caption: 'Beautiful Memory 12' },
    { url: '/public/images/photo13.jpg', caption: 'Beautiful Memory 13' },
    { url: '/public/images/photo14.jpg', caption: 'Beautiful Memory 14' },
    { url: '/public/images/photo15.jpg', caption: 'Beautiful Memory 15' }
  ];

  React.useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [autoPlay, photos.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    setAutoPlay(false);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setAutoPlay(true);
  };

  const nextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % photos.length);
  };

  const prevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-4">
          Our Beautiful Journey 📸
        </h2>
        <p className="text-xl text-white/90 text-center mb-12">
          15 moments that make us smile
        </p>

        <div className="relative mb-16 bg-white/20 backdrop-blur-lg p-4 rounded-3xl shadow-2xl">
          <div className="relative h-96 md:h-[600px] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={photos[currentSlide].url}
                  alt={photos[currentSlide].caption}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => openLightbox(currentSlide)}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-2xl font-bold">{photos[currentSlide].caption}</p>
                  <p className="text-white/80 text-sm">Photo {currentSlide + 1} of {photos.length}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/50 transition-all duration-300 z-10"
          >
            <FaChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/50 transition-all duration-300 z-10"
          >
            <FaChevronRight className="text-2xl" />
          </button>

          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className="absolute bottom-8 right-8 bg-white/30 backdrop-blur-md text-white px-6 py-3 rounded-full hover:bg-white/50 transition-all duration-300 z-10 font-semibold"
          >
            {autoPlay ? '⏸ Pause' : '▶ Play'}
          </button>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              onClick={() => openLightbox(index)}
              className={`relative cursor-pointer rounded-xl overflow-hidden shadow-lg ${
                currentSlide === index ? 'ring-4 ring-white' : ''
              }`}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-32 md:h-40 object-cover hover:brightness-110 transition-all duration-300"
              />
              {currentSlide === index && (
                <div className="absolute inset-0 bg-white/30 flex items-center justify-center">
                  <span className="text-4xl">▶️</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={closeLightbox}
              className="absolute top-6 right-6 bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/30 transition-all z-10"
            >
              <FaTimes className="text-2xl" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[lightboxIndex].url}
                alt={photos[lightboxIndex].caption}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-2xl">
                <p className="text-white text-2xl font-bold text-center">
                  {photos[lightboxIndex].caption}
                </p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevLightbox();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/40 transition-all"
              >
                <FaChevronLeft className="text-3xl" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextLightbox();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/40 transition-all"
              >
                <FaChevronRight className="text-3xl" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
