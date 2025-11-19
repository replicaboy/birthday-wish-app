import React, { useState } from 'react';
import Confetti from 'react-confetti';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMusic, FaHeart, FaCake, FaGift } from 'react-icons/fa';
import Gallery from './Gallery.jsx';

const BirthdayPage = ({ friendName }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMusic, setShowMusic] = useState(false);

  const handleRevealMessage = () => {
    setShowMessage(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 8000);
  };

  const memories = [
    {
      icon: <FaCake className="text-4xl text-pink-500" />,
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
          animate={{ 
            backgroundPosition: ['0%', '100%', '0%'],
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
          }}
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
                🎂 Dear {friendName}, on this beautiful day, I want you to know how much you mean to me. 
                Your friendship has brought so much joy, laughter, and warmth into my life. 
                May this year bring you endless happiness, success, and all your dreams come true. 
                Here's to making more amazing memories together! Have the most fantastic birthday ever! 💝✨
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

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
              customStyles={{
                borderRadius: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
            />
          </motion.div>
        )}
      </motion.section>

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
                src="/public/images/photo1.jpg"
                alt={friendName}
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </motion.div>
      </section>

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

      <Gallery friendName={friendName} />

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
