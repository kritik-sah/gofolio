import Icon from "@/components/utils/Icon";
import React from "react";

const skills = {
  "Programming Languages": [
    "JavaScript",
    "Python",
    "Java",
    "C#",
    "C++",
    "Ruby",
    "Swift",
    "Kotlin",
    "PHP",
    "Go",
    "Rust",
    "TypeScript",
    "Scala",
    "Perl",
  ],
  "Web Development": [
    "HTML",
    "CSS",
    "React.js",
    "AngularJS",
    "Vue.js",
    "Node.js",
    "Express.js",
    "Django",
    "Flask",
    "ASP.NET",
    "Bootstrap",
    "jQuery",
    "RESTful APIs",
    "GraphQL",
  ],
  "Mobile Development": [
    "Android Development",
    "iOS Development",
    "React Native",
    "Flutter",
    "Xamarin",
  ],
  "Database Management": [
    "SQL",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "SQLite",
    "Redis",
    "Oracle",
    "Microsoft SQL Server",
  ],
  "Version Control Systems": ["Git", "SVN", "Mercurial"],
  DevOps: [
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Travis CI",
    "CircleCI",
    "AWS",
    "Azure",
    "Google Cloud Platform",
    "CI/CD pipelines",
  ],
  Testing: [
    "Unit Testing",
    "Integration Testing",
    "Test Automation",
    "Jest",
    "JUnit",
    "Selenium",
    "Cypress",
    "Mocha",
    "Chai",
  ],
  "Agile Methodologies": ["Scrum", "Kanban", "Agile Development"],
  "Problem Solving": [
    "Algorithm Design",
    "Data Structures",
    "Critical Thinking",
    "Debugging",
  ],
  "Soft Skills": [
    "Communication",
    "Teamwork",
    "Time Management",
    "Adaptability",
    "Creativity",
  ],
};

const Resume = () => {
  return (
    <div className="w-full border border-crimson-100 bg-white rounded-2xl shadow-sm p-4 md:p-6 lg:p-8 space-y-8">
      <h1 className="text-3xl font-semibold ">Resume</h1>
      <div className="rounded-2xl border border-crimson-200/70 p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          Skills
        </h2>
        <div className="columns-1 md:columns-2 lg:columns-4 gap-4">
          {Object.entries(skills).map(([category, skillList]) => (
            <div className="w-full pb-4 text-sm" key={category}>
              <h3>{category}</h3>
              <ul className="list-disc pl-4 text-slate-950/70">
                {skillList.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          Work Experience
        </h2>
        <div className="p-6 w-full rounded-2xl even:bg-crimson-200/30 odd:bg-crimson-200/60 flex items-start justify-between gap-4">
          <div className="w-full space-y-2">
            <div className="flex flex-col md:flex-row items-start justify-start md:items-center md:justify-between gap-2">
              <h3 className="text-xl font-medium text-gray-950/70">
                SDE - Zo World Ltd.
              </h3>
              <p className="text-crimson-500">Nov 2023 - Jan 2024</p>
            </div>
            <div className="">
              <ul className="list-disc pl-4">
                <li>Workedwith ZoWorld as a frontend developer.</li>
                <li>
                  Learned the basics of ReactNative and built an Android TV
                  application.
                </li>
                <li>
                  worked on admin andHouse Keeping dashboards forthe
                  application.
                </li>
                <li>
                  Acquired knowledge of best practices, TypeScript, and building
                  structured andmaintainable code and still learning.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-6 w-full rounded-2xl even:bg-crimson-200/30 odd:bg-crimson-200/60 flex items-start justify-between gap-4">
          <div className="w-full space-y-2">
            <div className="flex flex-col md:flex-row items-start justify-start md:items-center md:justify-between gap-2">
              <h3 className="text-xl font-medium text-gray-950/70">
                Frontend Developer - DAOstruct
              </h3>
              <p className="text-crimson-500">Nov 2023 - Jan 2024</p>
            </div>
            <div className="">
              <ul className="list-disc pl-4">
                <li>
                  Enhanced React and Next.js skills while leading front-end
                  developmentfor an early-stage startup&apos;s MVP.
                </li>
                <li>Improved on-page SEO strategies for the project.</li>
                <li>
                  Explored the Web3 ecosystemto stay updated on emerging
                  technologies.
                </li>
                <li>
                  Attended relevant events to stay informed aboutindustry
                  trends.
                </li>
                <li>
                  Developed project management skills in the role of a founding
                  front-end developer
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-6 w-full rounded-2xl even:bg-crimson-200/30 odd:bg-crimson-200/60 flex items-start justify-between gap-4">
          <div className="w-full space-y-2">
            <div className="flex flex-col md:flex-row items-start justify-start md:items-center md:justify-between gap-2">
              <h3 className="text-xl font-medium text-gray-950/70">
                SDE 1 - Truemeds
              </h3>
              <p className="text-crimson-500">Nov 2023 - Jan 2024</p>
            </div>
            <div className="">
              <ul className="list-disc pl-4">
                <li>
                  Enhanced React and Next.js skills while leading front-end
                  developmentfor an early-stage startup&apos;s MVP.
                </li>
                <li>Improved on-page SEO strategies for the project.</li>
                <li>
                  Explored the Web3 ecosystemto stay updated on emerging
                  technologies.
                </li>
                <li>
                  Attended relevant events to stay informed aboutindustry
                  trends.
                </li>
                <li>
                  Developed project management skills in the role of a founding
                  front-end developer
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-6 w-full rounded-2xl even:bg-crimson-200/30 odd:bg-crimson-200/60 flex items-start justify-between gap-4">
          <div className="w-full space-y-2">
            <div className="flex flex-col md:flex-row items-start justify-start md:items-center md:justify-between gap-2">
              <h3 className="text-xl font-medium text-gray-950/70">
                Jr. Frontend Developer - Tonic WorldWide
              </h3>
              <p className="text-crimson-500">Nov 2023 - Jan 2024</p>
            </div>
            <div className="">
              <ul className="list-disc pl-4">
                <li>
                  Enhanced React and Next.js skills while leading front-end
                  developmentfor an early-stage startup&apos;s MVP.
                </li>
                <li>Improved on-page SEO strategies for the project.</li>
                <li>
                  Explored the Web3 ecosystemto stay updated on emerging
                  technologies.
                </li>
                <li>
                  Attended relevant events to stay informed aboutindustry
                  trends.
                </li>
                <li>
                  Developed project management skills in the role of a founding
                  front-end developer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          Eduaction
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 w-full border-l-8 rounded-r-2xl shadow-sm border-crimson-700 bg-crimson-200/30 flex items-start justify-between gap-4">
            <div className="w-full space-y-2">
              <div className="">
                <h3 className="text-xl font-medium text-gray-950/70">
                  B.Sc in Mathematics
                </h3>
                <p className="text-gray-950/70">University of Mumbai</p>
                <p className="text-crimson-500">Nov 2023 - Jan 2024</p>
              </div>
              <p className="text-sm">
                I was not a bright student, Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nihil vero neque tempora quasi
                saep.
              </p>
            </div>
          </div>
          <div className="p-4 w-full border-l-8 rounded-r-2xl shadow-sm border-crimson-700 bg-crimson-200/30 flex items-start justify-between gap-4">
            <div className="w-full space-y-2">
              <div className="">
                <h3 className="text-xl font-medium text-gray-950/70">HSC</h3>
                <p className="text-gray-950/70">Maharashtra boards</p>
                <p className="text-crimson-500">Nov 2023 - Jan 2024</p>
              </div>
              <p className="text-sm">
                I was not a bright student, Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 w-full border-l-8 rounded-r-2xl shadow-sm border-crimson-700 bg-crimson-200/30 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-medium text-gray-950/70">
                Responsive Web Design
              </h3>
              <p className="text-gray-950/70">freecodecamp.org</p>
            </div>
          </div>
          <div className="p-4 w-full border-l-8 rounded-r-2xl shadow-sm border-crimson-700 bg-crimson-200/30 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-medium text-gray-950/70">
                Responsive Web Design
              </h3>
              <p className="text-gray-950/70">freecodecamp.org</p>
            </div>
          </div>
          <div className="p-4 w-full border-l-8 rounded-r-2xl shadow-sm border-crimson-700 bg-crimson-200/30 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-medium text-gray-950/70">
                JavaScript Algorithms and Data Structures
              </h3>
              <p className="text-gray-950/70">freecodecamp.org</p>
            </div>
          </div>
          <div className="p-4 w-full border-l-8 rounded-r-2xl shadow-sm border-crimson-700 bg-crimson-200/30 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-medium text-gray-950/70">
                Front End Development Libraries
              </h3>
              <p className="text-gray-950/70">freecodecamp.org</p>
            </div>
          </div>
          <div className="p-4 w-full border-l-8 rounded-r-2xl shadow-sm border-crimson-700 bg-crimson-200/30 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-medium text-gray-950/70">
                Data Visualization with D3
              </h3>
              <p className="text-gray-950/70">freecodecamp.org</p>
            </div>
          </div>
          <div className="p-4 w-full border-l-8 rounded-r-2xl shadow-sm border-crimson-700 bg-crimson-200/30 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-medium text-gray-950/70">
                The Complete 2024 Web Development Bootcamp
              </h3>
              <p className="text-gray-950/70">Dr. Angela Yu</p>
            </div>
          </div>
          <div className="p-4 w-full border-l-8 rounded-r-2xl shadow-sm border-crimson-700 bg-crimson-200/30 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-medium text-gray-950/70">
                Linux for Absolute Beginners
              </h3>
              <p className="text-gray-950/70">
                Joseph Delgadillo, Nick Germaine on Udemy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
