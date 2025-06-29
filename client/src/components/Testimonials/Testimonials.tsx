'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

function Highlight({ children, className = '' }) {
  return (
    <span className={`bg-[#39E079]/10 p-1 py-0.5 font-bold text-[#39E079] ${className}`}>
      {children}
    </span>
  );
}

function TestimonialCard({ description, name, img, role, className = '', ...props }) {
  return (
    <div
      className={`mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-6 border border-gray-600/30 bg-gray-900/50 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-[#39E079]/20 min-h-[200px] ${className}`}
      {...props}
    >
      <div className="select-none text-base font-normal text-gray-400">
        {description}
        <div className="flex flex-row py-2">
          <Star className="size-4 fill-[#39E079] text-[#39E079]" />
          <Star className="size-4 fill-[#39E079] text-[#39E079]" />
          <Star className="size-4 fill-[#39E079] text-[#39E079]" />
          <Star className="size-4 fill-[#39E079] text-[#39E079]" />
          <Star className="size-4 fill-[#39E079] text-[#39E079]" />
        </div>
      </div>

      <div className="flex w-full select-none items-center justify-start gap-5">
        <img
          width={44}
          height={44}
          src={img || ''}
          alt={name}
          className="size-11 rounded-full ring-1 ring-[#39E079]/20 ring-offset-2 ring-offset-gray-900"
        />

        <div>
          <p className="font-medium text-white text-base">{name}</p>
          <p className="text-sm font-normal text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: 'Jordan Hayes',
    role: 'CTO at Quantum Innovations',
    img: 'https://randomuser.me/api/portraits/men/22.jpg',
    description: (
      <p>
        Dev Doodle has revolutionized our remote development process.
        <Highlight>
          The real-time code collaboration eliminated merge conflicts and sped up our sprints by 40%.
        </Highlight>{' '}
        Our distributed team now works as if we're in the same room.
      </p>
    ),
  },
  {
    name: 'Maya Rodriguez',
    role: 'Lead Developer at Skyline Digital',
    img: 'https://randomuser.me/api/portraits/women/33.jpg',
    description: (
      <p>
        I was skeptical about real-time IDEs, but Dev Doodle changed my mind.
        <Highlight>
          The co-pilot feature suggests better code than some senior engineers I've worked with.
        </Highlight>{' '}
        The video call integration makes pair programming actually enjoyable.
      </p>
    ),
  },
  {
    name: 'Ethan Park',
    role: 'Startup Founder at Elevate Labs',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    description: (
      <p>
        As a non-technical founder, Dev Doodle helped me understand our codebase.
        <Highlight>The design mode lets me prototype interfaces that developers can implement with one click.</Highlight> We
        went from concept to MVP in record time.
      </p>
    ),
  },
  {
    name: 'Zoe Bennett',
    role: 'UX Architect at Fusion Systems',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    description: (
      <p>
        Dev Doodle's real-time design collaboration is magical.
        <Highlight>
          Multiple designers can work on the same component simultaneously with zero lag.
        </Highlight>{' '}
        Our design-system development time was cut in half.
      </p>
    ),
  },
  {
    name: 'Victor Nguyen',
    role: 'Product Lead at FinEdge',
    img: 'https://randomuser.me/api/portraits/men/55.jpg',
    description: (
      <p>
        Our remote onboarding used to take weeks - now it takes days.
        <Highlight>
          New hires learn our stack by co-coding with the team from day one.
        </Highlight>{' '}
        The README generator alone saves us hundreds of documentation hours.
      </p>
    ),
  },
  {
    name: 'Amara Johnson',
    role: 'Frontend Specialist at Nimbus Tech',
    img: 'https://randomuser.me/api/portraits/women/67.jpg',
    description: (
      <p>
        The chat/video/code trifecta in Dev Doodle is revolutionary.
        <Highlight>
          I can debug production issues live with the ops team while screen sharing the exact code.
        </Highlight>{' '}
        Our mean time to resolution dropped by 65%.
      </p>
    ),
  },
  {
    name: 'Leo Tanaka',
    role: 'Creative Technologist at Prism Agency',
    img: 'https://randomuser.me/api/portraits/men/78.jpg',
    description: (
      <p>
        Client workshops became infinitely more productive with Dev Doodle.
        <Highlight>
          We design, code, and iterate live during meetings - clients love seeing immediate results.
        </Highlight>{' '}
        Our project approval rate increased by 30%.
      </p>
    ),
  },
  {
    name: 'Sophia Martinez',
    role: 'E-commerce Director at StyleHub',
    img: 'https://randomuser.me/api/portraits/women/89.jpg',
    description: (
      <p>
        Our holiday crunch used to mean all-night coding sessions.
        <Highlight>
          Now with Dev Doodle's real-time collaboration, global teams hand off work seamlessly across timezones.
        </Highlight>{' '}
        We shipped Black Friday features with zero downtime.
      </p>
    ),
  },
  {
    name: 'Aiden Wilson',
    role: 'Healthcare Solutions Architect',
    img: 'https://randomuser.me/api/portraits/men/92.jpg',
    description: (
      <p>
        HIPAA-compliant real-time collaboration was impossible to find...
        <Highlight>
          until Dev Doodle. Our medical record interface updates instantly across all devices while maintaining strict security.
        </Highlight>{' '}
        Doctors can now collaborate on patient dashboards live.
      </p>
    ),
  },
  {
    name: 'Olivia Chen',
    role: 'EdTech Product Manager at LearnSphere',
    img: 'https://randomuser.me/api/portraits/women/29.jpg',
    description: (
      <p>
        Teaching coding remotely used to be painful.
        <Highlight>
          Now with Dev Doodle, students see my code changes as I type, and I can jump into their files to help instantly.
        </Highlight>{' '}
        Learning outcomes improved by 45% this semester.
      </p>
    ),
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements - matching features section */}
      <div className="absolute inset-0 max-md:hidden top-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20"></div>
      
      {/* Decorative elements */}
      <div className="absolute -left-20 top-20 z-10 h-64 w-64 rounded-full bg-[#39E079]/5 blur-3xl" />
      <div className="absolute -right-20 bottom-20 z-10 h-64 w-64 rounded-full bg-[#39E079]/5 blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="relative mx-auto mb-12 max-w-2xl sm:text-center">
          <div className="relative z-10">
            <span className="inline-flex items-center rounded-full border border-gray-600 bg-gray-900/50 px-3 py-1 text-xs text-gray-300 mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
              What Our Users Are <span className="text-[#39E079]">Saying</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what{' '}
              <span className="bg-gradient-to-r from-[#39E079] to-[#2bc56d] bg-clip-text text-transparent">
                real developers
              </span>{' '}
              are saying about{' '}
              <span className="font-semibold text-[#39E079]">Dev Doodle</span>
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

        <div className="relative mt-6 max-h-screen overflow-hidden">
          {/* Top blur overlay */}
          <div className="absolute top-0 left-0 right-0 h-32 z-20 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
          
          {/* Bottom blur overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 z-20 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Column 1 - Moving Up */}
            <div className="overflow-hidden">
              <div 
                className="flex flex-col gap-6"
                style={{
                  animation: 'marquee-up 40s linear infinite',
                }}
              >
                {testimonials.slice(0, 4).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: idx * 0.2,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
                {/* Duplicate for seamless scroll */}
                {testimonials.slice(0, 4).map((card, idx) => (
                  <motion.div
                    key={`dup-${idx}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: idx * 0.2,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Column 2 - Moving Down */}
            <div className="overflow-hidden">
              <div 
                className="flex flex-col gap-6"
                style={{
                  animation: 'marquee-down 45s linear infinite',
                }}
              >
                {testimonials.slice(4, 7).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: idx * 0.2,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
                {/* Duplicate for seamless scroll */}
                {testimonials.slice(4, 7).map((card, idx) => (
                  <motion.div
                    key={`dup-${idx}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: idx * 0.2,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Column 3 - Moving Up */}
            <div className="overflow-hidden">
              <div 
                className="flex flex-col gap-6"
                style={{
                  animation: 'marquee-up 50s linear infinite',
                }}
              >
                {testimonials.slice(7, 10).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: idx * 0.2,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
                {/* Duplicate for seamless scroll */}
                {testimonials.slice(7, 10).map((card, idx) => (
                  <motion.div
                    key={`dup-${idx}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: idx * 0.2,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-up {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        
        @keyframes marquee-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0%);
          }
        }
      `}</style>
    </section>
  );
}