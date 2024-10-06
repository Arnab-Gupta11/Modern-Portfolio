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
