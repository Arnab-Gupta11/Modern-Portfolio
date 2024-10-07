//<======= Toggle menu section =======>
let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "300px";
  } else {
    menuList.style.maxHeight = "0px";
    // menuList.style.marginTop = "-20px";
  }
}

//<======= About Me section Start =======>
//<======= About Tab section  =======>
const tabs = document.querySelectorAll("[data-tab-target]");
const activeClasses = ["bg-[#FAAD1B]", "text-white"]; // Multiple classes for active state

// Select first tab by default
tabs[0].classList.add(...activeClasses); // Add multiple classes using spread operator
document.querySelector("#tab1").classList.remove("hidden");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetContent = document.querySelector(tab.dataset.tabTarget);

    document.querySelectorAll(".tab-content").forEach((content) => content.classList.add("hidden"));
    targetContent.classList.remove("hidden");

    // Remove active classes from all tabs
    tabs.forEach((activeTab) => activeTab.classList.remove(...activeClasses));

    // Add active classes to clicked tab
    tab.classList.add(...activeClasses);
  });
});

// Experience data
const experienceData = [
  {
    title: "Senior Web Developer",
    company: "LUSH",
    location: "Remote (Mexico)",
    startDate: "02/24",
    endDate: "Present",
    description:
      "In my role as a Senior Web Developer at Luxury Sustainable Hotels & Retreats International Association (LUSH), I've spearheaded the development and continuous enhancement of a platform that showcases luxury sustainable hotels and retreats. My work focuses on integrating sustainable practices and certifications into the website, elevating the user experience through intuitive design and functionality.",
  },
  {
    title: "Technical Manager",
    company: "Trusted Electrical",
    location: "Remote (New Zealand)",
    startDate: "06/23",
    endDate: "02/24",
    description:
      "As the Technical Manager at Trusted Electrical Solutions Limited, I oversee a wide spectrum of electrical services, ensuring top-notch quality in installations, repairs, and upgrades for both residential and commercial clients in Auckland. My role involves website creation, management, and technical oversight to guarantee seamless operations and exceptional service delivery.",
  },
  {
    title: "WordPress Developer",
    company: "LUSH",
    location: "Remote (Spain)",
    startDate: "01/23",
    endDate: "07/23",
    description:
      "At Luxury Sustainable Hotels & Retreats International Association (LUSH), my focus as a WordPress Developer was pivotal in crafting and managing websites for luxury sustainable hotels and retreats. I facilitated the integration of online courses, marketplace functionalities, and sustainability-driven certifications. My role contributed to promoting eco-friendly hospitality brands and fostering community engagement through digital platforms.",
  },
  {
    title: "Founder",
    company: "Instructorium",
    location: "Worldwide",
    startDate: "10/23",
    endDate: "Present",
    description:
      "As the Founder and CEO of Instructorium, a dynamic institute offering a diverse range of technical and non-technical courses. His leadership spearheads a learning environment focused on tech, IT, programming, and freelancing. Through online, live interactive, and offline programs, Instructorium empowers individuals to flourish professionally in an ever-evolving digital world.",
  },
  {
    title: "Founder",
    company: "Akbor Skills Development",
    location: "Worldwide",
    startDate: "07/22",
    endDate: "Present",
    description:
      "As the Founder and Chairman of Akbor Skills Development Limited, Tamim Iqbal shapes a visionary platform dedicated to turning aspirations into achievements. Leading this enterprise, he fosters a culture of growth and empowerment, offering individuals and businesses the tools, skills, and confidence to excel in today's competitive landscape.",
  },
];
//Dynamically update DOM
const experienceLeftWrapper = document.querySelector("#tab1 .left-row");
const experienceRightWrapper = document.querySelector("#tab1 .right-row");
function createExperienceDataLeftRow() {
  experienceLeftWrapper.innerHTML = experienceData
    .slice(0, 3)
    ?.map((data) => {
      return `<div class="p-3 about-card rounded-lg hover:scale-105 duration-700">
                <h6 class="text-sm font-medium text-primary-200">${data.startDate} - ${data.endDate}</h6>
                <h1 class="text-lg font-semibold text-primary-100">${data.title}</h1>
                <div class="flex items-center justify-between experience-dropdown">
                <h3 class="text-base font-medium text-primary-600">${data.company} - ${data.location}</h3>
                <span class="text-primary-200 dropdown cursor-pointer"> <i class="fa-solid fa-angles-down animate-pulse text-[18px] hover:scale-125 duration-700 p-2 hover:animate-none"></i></span>
                </div>
                <p class="text-justify text-primary-500 font-medium text-sm leading-tight border-t-2 border-t-slate-200 pt-2">${data.description}</p>
              </div>`;
    })
    .join(" ");
}
function createExperienceDataRightRow() {
  experienceRightWrapper.innerHTML = experienceData
    .slice(3, 5)
    ?.map((data) => {
      return `<div class="p-3 about-card rounded-lg hover:scale-105 duration-700">
              <h6 class="text-sm font-medium text-primary-200">${data.startDate} - ${data.endDate}</h6>
              <h1 class="text-lg font-semibold text-primary-100">${data.title}</h1>
              <div class="flex items-center justify-between experience-dropdown">
              <h3 class="text-base font-medium text-primary-600">${data.company} - ${data.location}</h3>
              <span class="text-primary-200 dropdown cursor-pointer "> <i class="fa-solid fa-angles-down animate-pulse text-[18px] hover:scale-125 duration-700 p-2 hover:animate-none"></i></span>
              </div>
              <p class="text-justify text-primary-500 font-medium text-sm leading-tight border-t-2 border-t-slate-200 pt-2">${data.description}</p>
            </div>`;
    })
    .join(" ");
}
createExperienceDataLeftRow();
createExperienceDataRightRow();

const allExperienceDropdown = document.querySelectorAll(".experience-dropdown");
allExperienceDropdown.forEach((dropdownParent) => {
  const dropdown = dropdownParent.querySelector(".dropdown");
  const description = dropdownParent.nextElementSibling;
  description.classList.add("hidden");
  dropdown.addEventListener("click", (e) => {
    if (description.classList.contains("block")) {
      description.classList.remove("block");
      description.classList.add("hidden");
      dropdown.classList.remove("rotate-180");
    } else {
      allExperienceDropdown.forEach((item) => {
        item.nextElementSibling.classList.remove("block");
        item.nextElementSibling.classList.add("hidden");
        item.querySelector(".dropdown").classList.remove("rotate-180");
      });
      description.classList.remove("hidden");
      description.classList.add("block");
      dropdown.classList.remove("rotate-0");
      dropdown.classList.add("rotate-180");
    }
  });
});

//Education Data
const educationData = [
  {
    date: "2020 - 2024",
    institution: "AITVET",
    location: "Dhaka, BD",
    degree: "Diploma in Engineering, Computer Technology",
    description:
      "Currently pursuing a Diploma in Engineering with a focus on Computer Technology at Ahsanullah Institute of Technical and Vocational Education and Training (AITVET). This comprehensive program equips me with in-depth knowledge and practical skills in the realm of computer technology, nurturing a strong technical foundation for my professional endeavors.",
  },
  {
    date: "2018 - 2020",
    institution: "DGT Secondary School",
    location: "Kushtia, BD",
    degree: "SSC, Science",
    description:
      "Completing my Secondary School Certificate (SSC) in Science from DGT Secondary School under the Jeshore Board provided a foundational understanding of scientific principles and laid the groundwork for further educational pursuits.",
  },
];
const educationWrapper = document.querySelector("#tab2 .education-wrapper");
function createEducationData() {
  educationWrapper.innerHTML = educationData
    ?.map((data) => {
      return `<div class="p-3 about-card rounded-lg hover:scale-105 duration-700">
              <h6 class="text-sm font-medium text-primary-200">${data.date}</h6>
              <h1 class="text-lg font-semibold text-primary-100">${data.institution}</h1>
              <h2 class="text-base font-medium text-primary-600">${data.degree}</h2>
              <div class="flex items-center justify-between education-dropdown">
              <h3 class="text-base font-medium text-primary-500">${data.location}</h3>
              <span class="text-primary-200 dropdown cursor-pointer "> <i class="fa-solid fa-angles-down animate-pulse text-[18px] hover:scale-125 duration-700 p-2 hover:animate-none"></i></span>
              </div>
              <p class="text-justify text-primary-600 font-medium text-sm leading-tight border-t-2 border-t-slate-200 pt-2">${data.description}</p>
            </div>`;
    })
    .join(" ");
}
createEducationData();
const allEducationDropdown = document.querySelectorAll(".education-dropdown");
allEducationDropdown.forEach((dropdownParent) => {
  const dropdown = dropdownParent.querySelector(".dropdown");
  const description = dropdownParent.nextElementSibling;
  description.classList.add("hidden");
  dropdown.addEventListener("click", (e) => {
    if (description.classList.contains("block")) {
      description.classList.remove("block");
      description.classList.add("hidden");
      dropdown.classList.remove("rotate-180");
    } else {
      allEducationDropdown.forEach((item) => {
        item.nextElementSibling.classList.remove("block");
        item.nextElementSibling.classList.add("hidden");
        item.querySelector(".dropdown").classList.remove("rotate-180");
      });
      description.classList.remove("hidden");
      description.classList.add("block");
      dropdown.classList.remove("rotate-0");
      dropdown.classList.add("rotate-180");
    }
  });
});

//Skills Data
const skillsData = [
  {
    name: "Web Development",
    icon: "fas fa-code",
  },
  {
    name: "WordPress Design",
    icon: "fab fa-wordpress",
  },
  {
    name: "Technical Management",
    icon: "fas fa-tools",
  },
  {
    name: "Leadership",
    icon: "fas fa-user-tie",
  },
  {
    name: "Project Management",
    icon: "fas fa-tasks",
  },
  {
    name: "Skill Development",
    icon: "fas fa-chalkboard-teacher",
  },
];
const skillsWrapper = document.querySelector("#tab3 .skills-wrapper");
function createSkillsData() {
  skillsWrapper.innerHTML = skillsData
    ?.map((data) => {
      return `<div class="p-3 about-card rounded-lg hover:scale-105 duration-700 text-center cursor-pointer group">
              <i class="${data.icon} text-3xl text-primary-200 mb-4 group-hover:scale-105"></i>
              <h3 class="text-lg font-semibold text-primary-100">${data.name}</h3>
            </div>`;
    })
    .join(" ");
}
createSkillsData();

//language data
const languageData = [
  {
    name: "HTML",
    icon: "fab fa-html5",
  },
  {
    name: "CSS",
    icon: "fab fa-css3-alt",
  },
  {
    name: "JavaScript",
    icon: "fab fa-js-square",
  },
  {
    name: "Python",
    icon: "fab fa-python",
  },
  {
    name: "Java",
    icon: "fab fa-java",
  },
  {
    name: "C",
    icon: "fa-solid fa-c",
  },
  {
    name: "C#",
    icon: "fas fa-code",
  },
];
const languageWrapper = document.querySelector("#tab4 .language-wrapper");
function createLanguageData() {
  languageWrapper.innerHTML = languageData
    ?.map((data) => {
      return `<div class="p-3 about-card rounded-lg hover:scale-105 duration-700 text-center cursor-pointer group">
              <i class="${data.icon} text-3xl text-primary-200 mb-4 group-hover:scale-105"></i>
              <h3 class="text-lg font-semibold text-primary-100">${data.name}</h3>
            </div>`;
    })
    .join(" ");
}
createLanguageData();
//<======= About Me section End =======>
