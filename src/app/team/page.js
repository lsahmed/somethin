import Navbar from "../components/subComponents/Navbar"

export default function OurTeam() {
  const members = [{
    name: "Vishal Kumar",
    role: "Founder & CEO, Robo Bharat Technologies",
    image: "https://dummyimage.com/80x80",
    description: "I am Vishal Kumar, the founder of Robo Bharat Technologies and a student of Dr. B. R. Ambedkar School of Specialized Excellence. With a deep passion for robotics, AI, and innovation, I started this journey to empower young minds with futuristic skills and practical knowledge. My vision is to make technology accessible to every student and creator, so together we can build a smarter and sustainable India.",
  },
  {
    name: "Ahmed",
    role: "Web Developer, CTO",
    image: "https://dummyimage.com/80x80",
    description: "I am Ahmed, a student of Dr. B. R. Ambedkar School of Specialized Excellence. I am passionate about computer science, with a strong focus on backend development. Building algorithms, managing infrastructure, and optimizing performance excite me the most. My goal is to create efficient and scalable systems that power innovative solutions.",
  },
  ]


  return <>
    <Navbar />
    <section className="text-gray-700 body-font bg-white min-h-screen">
      <div className="container px-5 py-24 mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-bold mb-4 text-gray-800">Our Team</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-600">
            Meet with out excellent and hard working team in which every person plays an important role to serve.
          </p>
        </div>
        {/* Team Members */}
        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center -m-4">
          {/* Member 1 */}
          <div className="p-4 w-full lg:w-1/3 md:w-1/2">
            {members.map((item, idx) => {
              return <div
                key={idx}
                className="h-full flex flex-col items-center border border-gray-300 p-6 rounded-xl my-2 shadow-sm bg-white text-center"
              >
                <img
                  alt="team member"
                  className="w-20 h-20 bg-gray-100 object-cover object-center rounded-full mb-4"
                  src={item.image}
                />
                <h2 className="text-gray-900 font-semibold text-xl">{item.name}</h2>
                <p className="text-gray-500 text-base mt-1">{item.role}</p>
                <p className="text-gray-500 text-base mt-1">{item.description}</p>
              </div>

            })}
          </div>
        </div>
      </div>
    </section>
  </>


}