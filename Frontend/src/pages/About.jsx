import React from "react";
import { ShieldCheck, TreePalm, Handshake, Truck } from "lucide-react";
import NewsLetterBox from "../components/NewsLetterBox";
function About() {
  const teamMembers = [
    {
      name: "Syed Adam Ali",
      role: "Owner | CEO",
      image:
        "https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg",
    },
  ];

  const values = [
    {
      icon: <ShieldCheck size={30} />,
      title: "Quality Craftsmanship",
      desc: "Every product is meticulously crafted with attention to detail",
    },
    {
      icon: <TreePalm size={30} />,
      title: "Sustainable Materials",
      desc: "We source eco-friendly materials to reduce environmental impact",
    },
    {
      icon: <Handshake size={30} />,
      title: "Ethical Production",
      desc: "Fair wages and safe working conditions for all artisans",
    },
    {
      icon: <Truck size={30} />,
      title: "Global Shipping",
      desc: "Free worldwide shipping on orders over $100",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-200 text-white py-20 px-4 sm:px-6 lg:px-8 rounded-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              ABOUT
              <span className="text-gray-600 ml-3">US</span>
            </h1>
            <div className="h-2 w-32 bg-gray-900 mb-8 rounded-full"></div>
            <p className="text-xl text-gray-800 leading-relaxed">
              We're redefining fashion through sustainable practices,
              exceptional craftsmanship, and timeless design. Since 2015, we've
              been committed to creating clothing that tells a story.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                Founded in a small studio in Brooklyn, we started with a simple
                idea: create beautiful clothing that doesn't compromise on
                ethics or quality.
              </p>
              <p>
                What began as a passion project between three friends has grown
                into a global community of conscious consumers who value
                sustainability and style.
              </p>
              <p>
                Today, we work with over 50 artisans worldwide, each bringing
                their unique cultural heritage and skills to our collections.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://static.toiimg.com/thumb/msid-53230137,width-1280,height-720,imgsize-61954,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
              alt="Our studio"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg w-4/5">
              <div className="text-3xl font-bold text-gray-900">8+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20">
          <NewsLetterBox/>
        </div>
      </div>
    </div>
  );
}

export default About;
