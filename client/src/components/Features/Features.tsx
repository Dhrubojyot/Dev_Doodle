'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, PenTool, Brain, MessageSquare, Code2, Bell } from 'lucide-react';

const features = [
  {
    step: 'Code Collaboration',
    title: 'Real-Time Code Collaboration',
    content: 'Instantly sync code changes across files and users with multi-user editing and live presence indicators.',
    icon: <Users className="h-6 w-6 text-[#39E079]" />,
    image: './src/assets/f1.jpg',
  },
  {
    step: 'Collaborative Sketching', 
    title: 'Collaborative Sketching Canvas',
    content: 'Draw and brainstorm together in real-time — perfect for wireframes, flowcharts, and visual ideation.',
    icon: <PenTool className="h-6 w-6 text-[#39E079]" />,
    image: './src/assets/f2.avif',
  },
  {
    step: 'AI Copilot Assistance',
    title: 'AI Copilot Assistance',
    content: 'Generate, insert, or replace code with the help of an intelligent AI assistant — right inside your editor.',
    icon: <Brain className="h-6 w-6 text-[#39E079]" />,
    image: './src/assets/f3.avif',
  },
  {
    step: 'Real-Time Collaboration',
    title: 'Seamless Collaboration',
    content: 'Chat, voice call, video conference, and screen share — all while coding together with live tooltips and real-time updates.',
    icon: <MessageSquare className="h-6 w-6 text-[#39E079]" />,
    image: './src/assets/f4.jpg',
  },
  {
    step: 'Multi-Language Support',
    title: 'Multi-Language Support + Smart Syntax Highlighting',
    content: 'Code in your favorite languages with automatic detection, colorful syntax, and intelligent suggestions.',
    icon: <Code2 className="h-6 w-6 text-[#39E079]" />,
    image: './src/assets/f5.avif',
  },
  {
    step: 'Real-Time Team Awareness',
    title: 'Real-Time Team Awareness',
    content: 'Get real-time alerts for user activity, messages, and online status — keeping your team connected every second.',
    icon: <Bell className="h-6 w-6 text-[#39E079]" />,
    image: './src/assets/f6.png',
  },
];


export default function Features() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (4000 / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress]);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 max-md:hidden top-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20"></div>
      <div className="absolute left-1/2 top-0 -z-20 -translate-x-1/2 w-full h-full bg-gradient-to-b from-purple-900/20 via-blue-900/10 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="relative mx-auto mb-12 max-w-2xl sm:text-center">
          <div className="relative z-10">
            <span className="inline-flex items-center rounded-full border border-gray-600 bg-gray-900/50 px-3 py-1 text-xs text-gray-300 mb-4">
              Features
            </span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
              Powerful <span className="text-[#39E079]">Features</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to create exceptional digital experiences — with seamless collaboration, performance, and creativity.
            </p>
          </div>
          <div
            className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"
            style={{
              background:
                'linear-gradient(152.92deg, rgba(57, 224, 121, 0.2) 4.54%, rgba(57, 224, 121, 0.26) 34.2%, rgba(57, 224, 121, 0.1) 77.55%)',
            }}
          ></div>
        </div>
        <hr className="mx-auto mb-10 h-px w-1/2 bg-gray-600/30" />

        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-10 max-w-7xl mx-auto">
          <div className="order-2 space-y-8 md:order-1">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 md:gap-8"
                initial={{ opacity: 0.3, x: -20 }}
                animate={{
                  opacity: index === currentFeature ? 1 : 0.3,
                  x: 0,
                  scale: index === currentFeature ? 1.05 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-2 md:h-14 md:w-14 transition-all duration-500 ${
                    index === currentFeature
                      ? 'scale-110 border-[#39E079] bg-[#39E079]/10 text-[#39E079] shadow-[0_0_15px_rgba(57,224,121,0.3)]'
                      : 'border-gray-600 bg-gray-800/50 text-gray-400'
                  }`}
                >
                  {feature.icon}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold md:text-2xl text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 md:text-base">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative order-1 h-[200px] overflow-hidden rounded-xl border border-[#39E079]/20 shadow-[0_5px_30px_-15px_rgba(57,224,121,0.3)] md:order-2 md:h-[300px] lg:h-[400px]">
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 overflow-hidden rounded-lg"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="h-full w-full transform object-cover transition-transform hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

                      <div className="absolute bottom-4 left-4 rounded-lg bg-gray-900/80 p-2 backdrop-blur-sm border border-gray-700/50">
                        <span className="text-xs font-medium text-[#39E079]">
                          {feature.step}
                        </span>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}