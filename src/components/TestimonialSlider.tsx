import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

// 1. Define the Data
const testimonials = [
  {
    id: 1,
    text: "Caladium's team worked closely with us to understand our unique business needs and challenges. They provided valuable insights and recommendations on how to improve our operations.",
    author: "Engineer Lakunle Runsewe,",
    role: "MD, Stretford Hill Ltd",
  },
  {
    id: 2,
    text: "We are extremely grateful to Caladium Consulting for their partnership and commitment to our success. We highly recommend their services to any organization looking to drive growth and transformation.",
    author: "Wale Adegoke,",
    role: "CEO, Nimbus Media",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // 2. Auto-slide Logic (5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]); // Re-run effect when index changes to reset timer

  // 3. Navigation Handlers
  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 500); // Wait for exit animation
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 500);
  };

  // Get current data
  const activeTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        
        {/* Quote Icon */}
        <div className="mb-8 opacity-20">
          <Quote size={80} fill="currentColor" className="text-gray-500" />
        </div>

        {/* Content Container with Animation */}
        <div className="min-h-[300px] flex flex-col justify-between">
          
          {/* Animated Text Wrapper */}
          <div
            className={`transition-all duration-500 transform ease-in-out ${
              isAnimating ? "opacity-0 -translate-x-10" : "opacity-100 translate-x-0"
            }`}
          >
            <p className="text-2xl md:text-4xl lg:text-[40px] leading-tight font-medium text-gray-200 mb-12 max-w-5xl">
              {activeTestimonial.text}
            </p>

            <div>
              <h4 className="text-xl font-bold text-white">
                {activeTestimonial.author}
              </h4>
              <p className="text-gray-500 text-sm mt-1">
                {activeTestimonial.role}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-end gap-4 absolute -bottom-12 md:bottom-0 right-0">
  <button
    onClick={handlePrev}
    className="p-2 rounded-full border border-transparent hover:border-gray-600 transition-colors group"
    aria-label="Previous testimonial"
  >
    <ArrowLeft className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" strokeWidth={1} />
  </button>
  <button
    onClick={handleNext}
    className="p-2 rounded-full border border-transparent hover:border-gray-600 transition-colors group"
    aria-label="Next testimonial"
  >
    <ArrowRight className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" strokeWidth={1} />
  </button>
</div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;