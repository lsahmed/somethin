import Image from "next/image"

export default function OurTeam() {
  const members = [{
    name: "Vishal Kumar",
    role: "Founder, Robo Bharat Technologies",
    image: "https://dummyimage.com/80x80",
  },
  {
    name: "Ahmed",
    role: "Web Developer, CTO",
    image: "",
  },
  ]


  return <section className="text-gray-700 body-font bg-white min-h-screen">
    <div className="container px-5 py-24 mx-auto max-w-7xl">
      {/* Header */}
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-4xl text-3xl font-bold mb-4 text-gray-800">Our Team</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-600">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.
        </p>
      </div>
      {/* Team Members */}
      <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center -m-4">
        {/* Member 1 */}
        <div className="p-4 w-full lg:w-1/3 md:w-1/2">
          {members.map((item, idx) => {
            return <div key={idx} className="h-full flex items-center border border-gray-300 p-6 rounded-xl shadow-sm bg-white">
              <img
                alt="team member"
                className="w-20 h-20 bg-gray-100 object-cover object-center rounded-full mr-6 flex-shrink-0"
                src={item.image}
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 font-semibold text-xl">{item.name}</h2>
                <p className="text-gray-500 text-base mt-1">{item.role}</p>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  </section>



}