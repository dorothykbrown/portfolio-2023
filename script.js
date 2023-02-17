import "bootstrap";

//show hide case studies as needed using filters
$("#project-type-selector .li").on("click", function () {
    var $filterButton = $(this);
    $("#project-type-selector .li").removeClass("active");
    $filterButton.addClass("active");
    var $data = $filterButton.parent().parent().find(".filter-items");
    var $filter,$outerFilter;
    if ($filterButton.attr("id") === "filter__All") {
      $data.find('.flip-card-inner').removeClass("project-card-show");
      $data.find('.flip-card-inner').addClass("project-card-hide");
  
      $filter = $data.find('.flip-card-inner');
  
      $filter.removeClass("project-card-hide");
      setTimeout(function () { $filter.addClass("project-card-show"); },20 );
  
    //  $filter.slideDown(800);
    } else {
      $filter = $data.find('.flip-card-inner[data-category=' + $filterButton.attr("data-category") + ']');
      $data.find('.flip-card-inner').removeClass("project-card-show");
      $data.find('.flip-card-inner').addClass("project-card-hide");
  
      $filter.removeClass("project-card-hide");
      setTimeout(function () { $filter.addClass("project-card-show"); },20 );
    }
});
  

// function filterProjects(){
//   let container = document.getElementById("project-type-selector");
//   let tab = container.querySelector(".tab-underlined");
//   let element = document.querySelector(".card-project");
//   let elementStructural = element.querySelector(".structural");
//   let elementDeveloper = element.querySelector(".developer");

//   tab.addEventListener("click", (event) => {
//     // Do something (callback)
//     switch(tab) {
//     case "All":
//       // code block
//       // Show
//       element.style.display = "";

//       break;
//     case "Structural":
//       // code block
//       // Hide
//       elementDeveloper.style.display = "none";

//       // Show
//       elementStructural.style.display = "";
//       break;
//       case "Structural":
//       // code block
//       // Hide
//       elementStructural.style.display = "none";

//       // Show
//       elementDeveloper.style.display = "";
//       break;
//     default :
//       // code block
//       // Show
//       element.style.display = "";
//   }
//     const displayElement = document.querySelector(".tab-underlined");
//     const hideElement = document.querySelector(CSS_SELECTOR);
//   });
// }

// function changeActiveClass(){
//   // Get the container element
//   var tabContainer = document.getElementById("project-type-selector");

//   // Get all buttons with class="btn" inside the container
//   var tabs = tabContainer.getElementsByClassName("tab-underlined");

//   // Loop through the buttons and add the active class to the current/clicked button
//   for (var i = 0; i < tabs.length; i++) {
//     tabs[i].addEventListener("click", function() {
//       var current = document.getElementsByClassName("active");
//       current[0].className = current[0].className.replace(" active", "");
//       this.className += " active";
//     });
//   }
// }

// filterProjects();
// changeActiveClass();

// export { filterProjects, changeActiveClass };
