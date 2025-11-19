import React, { useState } from 'react';
import Confetti from 'react-confetti';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMusic, FaHeart, FaGift, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { FaBirthdayCake } from 'react-icons/fa';

const BirthdayPage = ({ friendName }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const handleRevealMessage = () => {
    setShowMessage(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 8000);
  };

  const memories = [
    {
      icon: <FaBirthdayCake className="text-4xl text-pink-500" />,
      title: "First Meet",
      description: "Remember when we first met? That was the beginning of an amazing friendship!",
      emoji: "🎂"
    },
    {
      icon: <FaGift className="text-4xl text-purple-500" />,
      title: "Road Trip",
      description: "Our epic road trip where we got lost but had the best time of our lives!",
      emoji: "🚗"
    },
    {
      icon: <FaHeart className="text-4xl text-red-500" />,
      title: "Late Night Talks",
      description: "All those 3 AM conversations that made us closer than ever.",
      emoji: "💬"
    },
    {
      icon: <FaMusic className="text-4xl text-blue-500" />,
      title: "Concert Night",
      description: "That unforgettable concert where we sang our hearts out!",
      emoji: "🎵"
    }
  ];

 const photos = [
  { url: '/images/photo1.jpg', caption: 'Beautiful Memory 1' },
  { url: '/images/photo2.jpg', caption: 'Beautiful Memory 2' },
  { url: '/images/photo3.jpg', caption: 'Beautiful Memory 3' },
  { url: '/images/photo4.jpg', caption: 'Beautiful Memory 4' },
  { url: '/images/photo5.jpg', caption: 'Beautiful Memory 5' },
  { url: '/images/photo6.jpg', caption: 'Beautiful Memory 6' },
  { url: '/images/photo7.jpg', caption: 'Beautiful Memory 7' },
  { url: '/images/photo8.jpg', caption: 'Beautiful Memory 8' },
  { url: '/images/photo9.jpg', caption: 'Beautiful Memory 9' },
  { url: '/images/photo10.jpg', caption: 'Beautiful Memory 10' },
  { url: '/images/photo11.jpg', caption: 'Beautiful Memory 11' },
  { url: '/images/photo12.jpg', caption: 'Beautiful Memory 12' },
  { url: '/images/photo13.jpg', caption: 'Beautiful Memory 13' },
  { url: '/images/photo14.jpg', caption: 'Beautiful Memory 14' },
  { url: '/images/photo15.jpg', caption: 'Beautiful Memory 15' }
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
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 overflow-x-hidden">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={500}
        />
      )}

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative"
      >
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 10, 0],
            scale: [1, 1.1, 1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
          className="text-8xl md:text-9xl mb-6"
        >
          🎉
        </motion.div>

        <motion.h1
          className="text-5xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl"
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1
          }}
        >
          Happy Birthday
        </motion.h1>

        <motion.h2
          className="text-6xl md:text-9xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent mb-8"
        >
          {friendName}!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-white mb-8 max-w-2xl"
        >
          Today is your special day, and I want to make it unforgettable! 🎈
        </motion.p>

        {!showMessage && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRevealMessage}
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3"
          >
            <FaGift className="text-2xl" />
            Click for Your Special Message
          </motion.button>
        )}

        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="mt-8 bg-white/20 backdrop-blur-lg p-8 rounded-3xl shadow-2xl max-w-2xl border-4 border-white/30"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl text-white leading-relaxed font-medium"
              >
                🎂 Dear Yuvraj!!, on this beautiful day, I want you to know how much you mean to me. 
                Your friendship has brought so much joy, laughter, and warmth into my life. 
                May this year bring you endless happiness, success, and all your dreams come true. 
                Here's to making more amazing memories together! Have the most fantastic birthday ever! 💝✨<br>
                🩷आयुः, आरोग्यम्, ऐश्वर्यं च ते भविष्यति।😍
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Music Toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowMusic(!showMusic)}
          className="fixed top-6 right-6 z-50 px-6 py-3 bg-white/30 backdrop-blur-md text-white font-bold rounded-full shadow-xl flex items-center gap-2"
        >
          <FaMusic />
          {showMusic ? 'Hide Music' : 'Play Music'}
        </motion.button>

        {showMusic && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed top-20 right-6 z-50 bg-white/20 backdrop-blur-lg p-4 rounded-2xl shadow-2xl w-80"
          >
            <AudioPlayer
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              autoPlay={false}
              volume={0.5}
            />
          </motion.div>
        )}
      </motion.section>

      {/* Photo Frame Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-500">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">
            Celebrating You! 🌟
          </h2>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-pink-400 rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-blue-300 to-purple-400 rounded-3xl transform -rotate-3"></div>
            <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
              <img
                src="/images/photo9.jpg"
                alt={friendName}
                className="w-full h-auto max-h-96 object-contain rounded-2xl"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Memories Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-16">
            Our Precious Memories 💭
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {memories.map((memory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-white/20 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/30 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  {memory.icon}
                  <span className="text-5xl">{memory.emoji}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{memory.title}</h3>
                <p className="text-white/90 text-lg leading-relaxed">{memory.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
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

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-purple-900 to-indigo-900 py-12 text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="inline-block text-6xl mb-4"
        >
          🎂
        </motion.div>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Wishing You the Best Year Ever!
        </h3>
        <p className="text-xl text-white/80">
          Love you tons! 💕✨🎉
        </p>
      </motion.footer>
    </div>
  );
};

export default BirthdayPage;
