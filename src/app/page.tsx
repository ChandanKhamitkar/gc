import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

export default function Home() {
  const executive = [
    {
      name: "Sidharth\nPhilkhana",
      image: "https://github.com/psidh.png",
      role: "Founder\nFull Stack Developer",
      url: "https://github.com/psidh",
    },
    {
      name: "Manas\nMalla",
      image: "https://github.com/manasmalla.png",
      role: "Chief Technical Officer\nGoogle Product Expert, Android",
      url: "https://github.com/ManasMalla",
    },
  ];
//
  const frontendTeam = [
    {
      name: "Kavya\nChandana",
      image: "https://github.com/kavya-chandana.png",
      role: "TBA",
      url: "https://www.linkedin.com/in/kimishchoudhary/",
    },
    {
      name: "ANC\nACB",
      image: "/team/abc.jpeg",
      role: "TBA",
      url: "https://www.linkedin.com/in/sudheer-sahu-97881824b/",
    },
    {
      name: "XYZ\nYZA",
      image: "/team/gowtam.jpeg",
      role: "TBA",
      url: "",
    },
    {
      name: "Michaelangelo Muchlongername",
      image: "https://i.redd.it/h94nkec5ku9c1.jpeg",
      role: "TBA",
      url: "",
    },
  ];

  const machineLearningTeam = [
    {
      name: "ABC\nXUZ",
      image:
        "https://github.com/SampathBalivada.png",
      role: "TBA",
      url: "https://www.linkedin.com/in/bingumalla-likith-2633392b9",
    },
  ];
  return (
    <div>
      <div className="customBG grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 relative overflow-clip">
        <img src="/bg-herp.png" alt="bg-purple" className="absolute top-0 w-full mix-blend-plus-lighter" />
        <div className="recBox w-[70%] h-[72%] absolute bottom-0 "></div>
        <img src="/hero-image.png" alt="main attraction" className="absolute bottom-0 object-contain h-[50%] z-10" />
        <img src="/hero-image-bg.png" alt="main attraction" className="absolute bottom-0 object-contain h-[50%] mix-blend-plus-lighter " />
        <img src="/octokat-2.png" alt="octakat-2" className="absolute left-28 top-40 max-w-[200px]" />
        {/* navbar */}
        <nav className=" absolute top-5 w-fit flex justify-between items-center gap-6">
          <div className="flex justify-center items-center gap-6">
            <BsGithub size={25} />
            <div className="text-gray-300 flex justify-center items-center gap-5 text-sm">
              <p className="home">Home</p>
              <p className="text-white/25">About</p>
              <p className="text-white/25">Domains</p>
              <p className="text-white/25">Team</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6">
            <button className="rounded-xl text-sm border border-white/50 px-4 py-2">Join Community</button>
            <button className="rounded-xl text-black bg-white px-4 py-2 font-medium">Discover the platform ✨</button>
          </div>
        </nav>


        <main className="flex flex-col gap-4 row-start-2 justify-center items-center sm:items-start z-20">

          <p className="w-[60%] text-5xl font-bold text-wrap text-center mx-auto">
            Building the largest bunch of open source developers.
          </p>
          <p className="font-normal w-fit text-center mx-auto" >Code • Collaborate • Create</p>
          <p className="w-[60%] font-normal text-wrap text-center mx-auto">Whether you're a coder, designer, or tech enthusiast, GitHub Community GITAM is for you! Stay updated with our events and initiatives on social media.</p>
          <div className="flex justify-center items-center gap-6 mx-auto">
            <button className="joinNow text-sm font-bold">Join Now</button>
            <button className="knowMore text-sm font-medium">Know More</button>
          </div>
        </main>


      </div>
      <div className="w-full flex flex-col justify-center items-center mx-auto my-6">
        <div className="flex justify-center items-center rounded-full gap-7 px-5 py-3 border border-white">
          <p className="bg-white/40 rounded-full px-6 py-2">Events</p>
          <p>Hackathons</p>
          <p>Workshops</p>
          <p>Hands on</p>
        </div>

        <div className="flex gap-12 justify-center items-center mt-12 w-screen overflow-clip">
          <div className="bg-white/15 text-white w-[350px] px-6 py-4 rounded-2xl">

            <p className="text-end text-xl font-bold">25th</p>
            <p className="text-end mb-3">Dec'24</p>
            <p className="text-xl">GIT FUSION</p>
            <p className="text-[#99d5ff]">Cotton Bhavan</p>
            <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, architecto dolore nihil veniam officiis possimus</p>
          </div>
          <div className="bg-white/15 text-white w-[350px] px-6 py-4 rounded-2xl">
            <p className="text-end text-xl font-bold">25th</p>
            <p className="text-end mb-3">Dec'24</p>
            <p className="text-xl">GIT FUSION</p>
            <p className="text-[#99d5ff]">Cotton Bhavan</p>
            <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, architecto dolore nihil veniam officiis possimus</p>
          </div>
          <div className="bg-white/15 text-white w-[350px] px-6 py-4 rounded-2xl">
            <p className="text-end text-xl font-bold">25th</p>
            <p className="text-end mb-3">Dec'24</p>
            <p className="text-xl">GIT FUSION</p>
            <p className="text-[#99d5ff]">Cotton Bhavan</p>
            <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, architecto dolore nihil veniam officiis possimus</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-4">
        {/* <h1 className="text-4xl font-bold my-8 text-center">Our Team</h1>
      <div className="flex items-center justify-center md:space-x-16 h-fit">
        <div className="my-8 md:my-16 flex flex-col items-center justify-between">
          <img
            src="/team/me.jpeg"
            alt="P Sidharth image"
            className="w-32 h-32 md:h-44 md:w-44  object-cover rounded-full mb-4 text-center"
          />
          <h2 className="text-xl font-semibold text-center">
            Philkhana Sidharth
          </h2>
          <p className="text-neutral-500 text-center mt-2">
            Founder
            <br />
            Full Stack Developer
          </p>
        </div>
        <div className="my-16 flex flex-col items-center justify-between">
          <img
            src="/team/manas.png"
            alt="Manas Malla image"
            className="w-32 h-32 md:h-44 md:w-44 object-cover rounded-full mb-4 text-center"
          />
          <h2 className="text-xl font-semibold text-center">Manas Malla</h2>
          <p className="text-neutral-500 text-center mt-2">
            Chief Technical Officer <br /> Google Product Expert - Android
          </p>
        </div>
      </div> */}
        <h2 className="text-2xl md:text-4xl font-bold py-12 px-16 border-y-[1px] border-black">
          Executive Team
        </h2>
        {/* <Line /> */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full">
          {executive.map((person) => (
            <div
              key={person.name}
              className="shrink-0 grow even:border-x-[1px] border-black flex flex-col justify-center w-full"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-44 md:h-72 object-cover mb-4"
              />
              <div className="p-4 flex">
                <div>
                  <h2 className="text-lg md:text-xl font-semibold whitespace-pre-wrap mb-1">
                    {person.name}
                  </h2>
                  <p className="opacity-70 font-light whitespace-pre-wrap">
                    {person.role}
                  </p>
                </div>
                <Link className="ml-auto" href={person.url}>
                  <FiArrowUpRight size={24} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl md:text-4xl font-bold py-12 px-16 border-t-[1px] border-black">
          Front-End Development
        </h2>
        {/* <Line /> */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full">
          {frontendTeam.map((person) => (
            <div
              key={person.name}
              className="shrink-0 grow border-y even:border border-black flex flex-col justify-center w-full"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-44 md:h-72 object-cover mb-4 border-b-[1px] border-black"
              />
              <div className="p-4 flex">
                <div>
                  <h2 className="text-lg md:text-xl font-semibold whitespace-pre-wrap mb-1">
                    {person.name}
                  </h2>
                  <p className="opacity-70 font-light">{person.role}</p>
                </div>
                <Link className="ml-auto" href={person.url}>
                  <FiArrowUpRight size={24} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl md:text-4xl font-bold py-12 px-16">
          Machine Learning
        </h2>
        {/* <Line /> */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full border-[1px] border-black">
          {machineLearningTeam.map((person) => (
            <div
              key={person.name}
              className="shrink-0 grow border-y border border-black flex flex-col justify-center w-full"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-44 md:h-72 object-cover mb-4"
              />
              <div className="p-4 flex">
                <div>
                  <h2 className="text-lg md:text-xl font-semibold whitespace-pre-wrap mb-1">
                    {person.name}
                  </h2>
                  <p className="opacity-70 font-light">{person.role}</p>
                </div>
                <Link className="ml-auto" href={person.url}>
                  <FiArrowUpRight size={24} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <footer className="footer">
          <div className="footer-container">

            <div className="footer-section non-tech">
              <h3>GitHub Community GITAM</h3>
              <p>
                A collaborative space for developers to share, contribute, and grow
                open-source projects together
              </p>
            </div>

            <div className="footer-section non-tech">
              <h3>Tech</h3>
              <a href="webdev.html">Web Development</a>
              <a href="aiml.html">AI/ML</a>
              <a href="uiux.html">UI/UX</a>
              <a href="websec.html">Web Security</a>
              <a href="ds.html">Data Science</a>

            </div>

            <div className="footer-section non-tech">
              <h3>Non Tech</h3>
              <a href="pr.html">PR</a>
              <a href="content.html">Content</a>
              <a href="design.html">Design</a>
            </div>

            <div className="footer-section non-tech">
              <h3>GitHub GITAM Campuses</h3>
              <a>Visakhapatnam</a>
              <a>Hyderabad</a>
              <a>Banglore</a>
            </div>


            <div className="footer-section non-tech">
              <h3>Support and Feedback</h3>
              <a href="https://forms.gle/QJBZLxagwwYtde1V6">Report Issues</a>
              <a href="https://forms.gle/rP2nfMbBfrSawP9U7">Feedback Form</a>
              <a href="https://forms.gle/44EXptFiCFMWnMhi6">Community Forums</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2024 GitHub Community GITAM. All rights reserved</p>

            <div className="social-icons">
              <a href="https://www.instagram.com/githubcommunitygitam/" target="_blank" aria-label="Instagram" className="fab fa-instagram"></a>
              <a href="https://chat.whatsapp.com/GNHGWxEbHXZLYkDuuTdHRO" target="_blank" aria-label="WhatsApp" className="fab fa-whatsapp"></a>
              <a href="https://www.linkedin.com/company/githubcommunitygitam/posts/?feedView=all" target="_blank" aria-label="LinkedIn" className="fab fa-linkedin"></a>
              <a href="https://github.com/github-community-gitam" target="_blank" aria-label="github" className="fab fa-github"></a>
            </div>
          </div>
        </footer>
      </footer>
    </div>
  );
}
