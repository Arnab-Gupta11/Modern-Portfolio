// //<======= Toggle menu section =======>
const navToggleBtn = document.querySelector(".toggle-sidebar");
const sidebar = document.querySelector(".sidebar");
const icon = navToggleBtn.querySelector(".menu-icon i");

navToggleBtn.addEventListener("click", () => {
  sidebarTogglerBtn();
});

function sidebarTogglerBtn() {
  sidebar.classList.toggle("md-mx:left-0");
  navToggleBtn.classList.toggle("left-8");

  if (sidebar.classList.contains("md-mx:left-0")) {
    icon.classList.replace("fa-bars", "fa-times");
  } else {
    icon.classList.replace("fa-times", "fa-bars");
  }
}

//<======= Sidebar section =======>
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavlist = navList.length;
const allSection = document.querySelectorAll(".section");
navList.forEach((navLink) => {
  const a = navLink.querySelector("a");
  a.addEventListener("click", function () {
    allSection.forEach((item) => {
      item.classList.remove("back-section");
    });
    for (let j = 0; j < totalNavlist; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
  });
});

function showSection(element) {
  allSection.forEach((item) => {
    item.classList.remove("active");
  });
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
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

//<======= Project section Start =======>
const projectsData = [
  {
    id: 1,
    title: "Luxury Sustainable Hotels & Retreats",
    description:
      "I led the complete reconstruction of lushia.org, crafting a dynamic online platform for Luxury Sustainable Hotels & Retreats International Association (LUSH). The project involved creating an interactive website that showcased eco-friendly hospitality brands, integrated online courses, a marketplace, and certifications, emphasizing sustainability and wellness.",
  },
  {
    id: 2,
    title: "Build Trusted Electrical Website",
    description:
      "As the sole developer behind trustedelectrical.co.nz, I designed and developed the website for Trusted Electrical Solutions Limited. The site served as a comprehensive platform showcasing the company's diverse electrical services, offering insights into new installations, repairs, and maintenance. Additionally, I ensured a seamless user experience and managed technical aspects to enhance the site's functionality.",
  },
  {
    id: 3,
    title: "Instructorium eLearning Platform",
    description:
      "Being the primary architect of Instructorium.com, I created an innovative website tailored to the diverse technical and non-technical courses offered by Instructorium. The platform was designed to facilitate online learning, live sessions, and offline programs, aiming to foster an interactive learning environment conducive to professional skill development.",
  },
  {
    id: 4,
    title: "Youtiqa Marketing Agency Website",
    description:
      "As the solo developer for the Youtiqa Marketing Agency website (youtiqa.com), I meticulously designed and developed the platform to showcase the agency's comprehensive services and impressive portfolio. The website features a user-friendly interface, emphasizing Youtiqa's expertise in marketing strategies and their successful projects. My focus was on creating a visually appealing site that effectively communicates the agency's value proposition to potential clients.",
  },
  {
    id: 5,
    title: "Volts Electric Limited Website",
    description:
      "I designed and developed the comprehensive website for Volts Electric Limited (voltselectric.co.nz), showcasing the breadth of electrical services and expertise offered by the company. The project involved a strategic layout to highlight the company's extensive portfolio, ensuring a user-friendly experience that promotes engagement. Key features were integrated to demonstrate Volts Electric Limited's capabilities, from residential to commercial projects, reinforcing their position as a leading electrical contractor.",
  },
  {
    id: 6,
    title: "De Castro Group Website",
    description:
      "As the sole developer, I built the website for De Castro Group (decastro.group), a multifaceted platform designed to showcase the diverse services offered by the company. The site features an elegant design, with a focus on user experience and engagement, effectively communicating the company's strengths in multiple sectors, including hospitality, real estate, and consulting.",
  },
  {
    id: 7,
    title: "Regenerative Hospitality Institute",
    description:
      "I developed the website for the Regenerative Hospitality Institute (lms.decastro.group), focusing on promoting the institute's mission to redefine hospitality through sustainability and regeneration. The site was built to serve as an educational resource, providing access to a wealth of knowledge, courses, and certifications aimed at transforming the hospitality industry.",
  },
];
const ProjectWrapper = document.querySelector(".project-wrapper");
function createProjectData() {
  ProjectWrapper.innerHTML = projectsData
    ?.map((data) => {
      return `<div class="project-card px-4 py-2 rounded-2xl group hover:scale-105 duration-700 cursor-pointer">
                  <div class="flex items-center justify-between">
                    <h1 class="text-3xl xs:text-4xl sm:text-7xl leading-none font-black text-stroke group-hover:text-stroke-hover cursor-pointer">
                    ${data.id}
                    </h1>
                    <span
                      class="w-10 h-10 bg-primary-200 grid place-items-center rounded-full group-hover:-translate-x-1 duration-500 hover:scale-105 active:scale-95 group"
                      ><i class="fa-solid fa-arrow-up rotate-45 duration-500 group-hover:scale-105"></i
                    ></span>
                  </div>

                  <h2 class="text-primary-100 font-bold text-xs xsm:text-base md:text-2xl border-b-2 border-slate-200 pb-1">
                  ${data.title}
                  </h2>
                  <p class="text-xs md:text-sm font-medium text-primary-600 leading-tight text-justify mt-2">
                    ${data.description}
                  </p>
                </div>`;
    })
    .join(" ");
}
createProjectData();
//<======= Project section End =======>

//<======= Service section Start =======>
const servicesData = [
  {
    title: "Web Development",
    icon: "fa-solid fa-code",
    description: "Building and maintaining websites, ensuring optimal performance and responsive design.",
  },
  {
    title: "Web Design",
    icon: "fa-solid fa-paint-brush",
    description: "Crafting visually appealing and user-friendly website interfaces with attention to UX/UI principles.",
  },
  {
    title: "Search Engine Optimization (SEO)",
    icon: "fa-solid fa-search",
    description: "Improving website rankings on search engines, increasing visibility, and driving organic traffic.",
  },
  {
    title: "WordPress Design",
    icon: "fa-brands fa-wordpress",
    description: "Specializing in creating and customizing WordPress websites to meet business and personal needs.",
  },
  {
    title: "Database Development",
    icon: "fa-solid fa-database",
    description: "Designing and maintaining structured databases, ensuring data integrity and accessibility.",
  },
  {
    title: "Cloud Management",
    icon: "fa-solid fa-cloud",
    description: "Overseeing cloud infrastructure, optimizing performance, and ensuring data security in cloud systems.",
  },
  {
    title: "Digital Marketing",
    icon: "fa-solid fa-chart-line",
    description: "Creating and managing online marketing strategies to promote brands and engage customers.",
  },
  {
    title: "Advertising",
    icon: "fa-solid fa-bullhorn",
    description: "Implementing targeted advertising campaigns to increase reach and attract potential customers.",
  },
];
const ServiceWrapper = document.querySelector(".service-wrapper");
function createServiceData() {
  ServiceWrapper.innerHTML = servicesData
    ?.map((data) => {
      return `<div class="p-3 about-card rounded-lg hover:scale-105 duration-700 cursor-pointer group xs-mx:rounded-tr-[50px] md:rounded-tr-[50px] md-mx:rounded-tr-[80px] bs:rounded-tr-[80px] relative">
              <span class="xs-mx:text-2xl md-mx:text-4xl md:text-2xl  bs:text-4xl mb-4 text-left rounded-full absolute border-b-8 border-[#edf4fa] border-t-0 p-3 xs-mx:-top-8 md:-top-8 md-mx:-top-10  bs:-top-10 left-5 shadow-lg shadow-primary-400 md:w-14 md:h-14 xs-mx:w-14 xs-mx:h-14 md-mx:w-20 md-mx:h-20 bs:w-20 bs:h-20 grid place-items-center text-primary-200"><i class="${data.icon} "></i></span>   
              <div class="p-6 rounded-lg flex flex-col items-center text-center">
                
                <h3 class="text-lg font-semibold text-primary-100">${data.title}</h3>
                <p class="text-sm mt-2 text-primary-600 font-medium">${data.description}</p>
             </div>
            </div>`;
    })
    .join(" ");
}
createServiceData();

//<======= Service section End =======>

//<======= Contact section Start =======>
const contactInfo = [
  {
    icon: "fa-solid fa-location-dot", // Font Awesome icon class for location
    label: "Location:",
    details: "Chattogram, Bangladesh",
  },
  {
    icon: "fa-solid fa-phone", // Font Awesome icon class for phone
    label: "Phone:",
    details: "+8801793109660",
  },
  {
    icon: "fa-solid fa-envelope", // Font Awesome icon class for email
    label: "Email:",
    details: "arnab.gupta.011@gmail.com",
  },
];
const contactWrapper = document.querySelector(".contact-info");
function createContactData() {
  contactWrapper.innerHTML = contactInfo
    ?.map((data) => {
      return `<div class="p-3 about-card rounded-lg w-8/12 hover:scale-105 duration-700 text-center cursor-pointer group">
              <i class="${data.icon} text-xl xsm:text-2xl sm:text-3xl text-primary-200 mb-2 group-hover:scale-105"></i>
              <h3 class="text-base xsm:text-lg font-semibold text-primary-500">${data.label}</h3>
              <h3 class="text-sm xsm:text-base font-medium text-primary-600 break-words">${data.details}</h3>
            </div>`;
    })
    .join(" ");
}
createContactData();
//<======= Contact section End =======>
