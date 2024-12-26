import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Clients = ({ together }) => {
  const [isPaused, setIsPaused] = useState(false); // State to control carousel pause

  const testimonials = [
    {
      image: "https://via.placeholder.com/150?text=Emily",
      name: "Emily Hart",
      title: "Empowering Support",
      comment:
        "Safi Haven has been a crucial lifeline for me. The anonymous chat feature helped me connect with caring counselors anytime I needed support. I felt truly safe and understood.",
    },
    {
      image: "https://via.placeholder.com/150?text=John",
      name: "John Doe",
      title: "Transformational Help",
      comment:
        "Safi Haven gave me the courage to face my fears and the tools to rebuild my life. The counselors were empathetic and patient, and I always felt heard.",
    },
    {
      image: "https://via.placeholder.com/150?text=Sarah",
      name: "Sarah Williams",
      title: "Life-Changing Experience",
      comment:
        "The support I've received has been life-changing. I never thought I would find a place where I could truly be myself, but Safi Haven made that possible. I’m forever grateful.",
    },
    {
      image: "https://via.placeholder.com/150?text=Michael",
      name: "Michael Brown",
      title: "A Safe Space",
      comment:
        "The counselors at Safi Haven helped me navigate through some of the darkest times in my life. I felt supported, understood, and never judged. Thank you for everything!",
    },
    {
      image: "https://via.placeholder.com/150?text=Jessica",
      name: "Jessica Green",
      title: "Continuous Support",
      comment:
        "What I love about Safi Haven is the continuous support. Whether it's day or night, I know that someone will always be there for me. The emotional support has been invaluable.",
    },
  ];

  // Function to handle touch start
  const handleTouchStart = () => {
    setIsPaused(true); // Pause the carousel on touch start
  };

  // Function to handle touch end
  const handleTouchEnd = () => {
    setIsPaused(false); // Resume the carousel on touch end
  };

  return (
    <div className="relative py-20 px-6 flex flex-col items-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <img
          src={together}
          alt="Blob Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="z-10 flex flex-col items-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 text-center">
          What Our Clients Are Saying
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl">
          We are committed to your well-being and growth. Here's what our
          clients have to say about their experiences with us.
        </p>

        <div
          className="w-full"
          onTouchStart={handleTouchStart} // Trigger on touch start
          onTouchEnd={handleTouchEnd}   // Trigger on touch end
        >
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            useKeyboardArrows
            autoPlay={!isPaused} // Control autoPlay based on touch state
            interval={2000}
            className="relative"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-10 md:flex items-center gap-8 overflow-hidden relative"
              >
                <span className="absolute text-[150px] text-blue-200 top-0 left-0 opacity-10">
                  &quot;
                </span>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto md:mx-0"
                />
                <div className="mt-6 md:mt-0 text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {testimonial.title}
                  </h3>
                  <p className="text-gray-700 mt-4 mb-4">
                    "{testimonial.comment}"
                  </p>
                  <p className="text-gray-500 italic">- {testimonial.name}</p>
                </div>
                <span className="absolute text-[150px] text-blue-200 bottom-0 right-0 opacity-10">
                  &quot;
                </span>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Clients;
