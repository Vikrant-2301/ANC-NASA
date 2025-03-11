import React from "react";

function About() {
  return (
    <div id="about" className="bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4 text-sm uppercase text-gray-700 font-semibold tracking-wide">
              About Us
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              A Grand Celebration of Architectural Excellence
            </h2>
          </div>
          <div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The <strong>67th Annual NASA Convention (ANC)</strong> is India's
              largest gathering of architecture students, organized by the
              <strong>
                {" "}
                National Association of Students of Architecture (NASA India).
              </strong>
              This convention provides a <strong>dynamic platform</strong> for
              aspiring architects to{" "}
              <strong>collaborate, compete, and celebrate innovation</strong> in
              design.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With a rich legacy of{" "}
              <strong>
                fostering creativity, knowledge exchange, and industry
                connections
              </strong>
              , ANC features{" "}
              <strong>
                design competitions, workshops, expert talks, and exhibitions
              </strong>
              , bringing together some of the brightest minds in architecture.{" "}
              <strong>
                Join us in pushing the boundaries of design and shaping the
                future of architecture!
              </strong>
            </p>
          </div>
        </div>

        {/* Event Highlights Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
            Why ANC Stands Out?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              {
                number: "6000+",
                title: "Delegates",
                text: "India’s largest student gathering.",
              },
              {
                number: "65+",
                title: "Events Per Year",
                text: "Competitions, workshops & exhibitions.",
              },
              {
                number: "30+",
                title: "Collaborations",
                text: "Industry leaders & academic partnerships.",
              },
              {
                number: "350+",
                title: "Associate Colleges",
                text: "A vast network across India.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-4xl font-bold text-gray-900">
                  {item.number}
                </h3>
                <h4 className="text-xl font-semibold text-gray-700 mt-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
