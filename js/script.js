/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate

//storing li elements containing student info
const studentItem = document.querySelectorAll(".student-item");
const studentDiv = document.querySelector("ul.student-list");

// Create a function to hide all of the items in the list except for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four

const displayStudents = (studentStart, studentEnd) => {
// Setting intial state where all students are hidden
  for (let count = 0; count < studentItem.length; count++) {
    studentItem[count].style.display = "none";

  }

  for (let count = studentStart; count < studentEnd; count++){
    studentItem[count].style.display = "block";

  }

};


// Create and append the pagination links - Creating a function that can do this is a good approach
// displayStudents(0, 10); students 1 to 10
//displayStudents(10, 20); student 11 to 20
//displayStudents(20, 30); student 21 to 30
// displayStudents(30, 40); student 31 to 40
//displayStudents(40, 50); student 41 to 50
//displayStudents(50, 54); student 51 to 54



// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here

// let studentDiv = document.querySelector("ul.student-list");
const paginationButtons =
    `<ul class="pagination">
        <li id="buttonOne"><a href="#">1</a></li>
        <li id="buttonTwo"><a href="#">2</a></li>
        <li id="buttonThree"><a href="#">3</a></li>
        <li id="buttonFour"><a href="#">4</a></li>
        <li id="buttonFive"><a href="#">5</a></li>
     </ul>`;

studentDiv.innerHTML += paginationButtons;
//
// let buttonOne = document.getElementById("buttonOne");
// let buttonTwo = document.getElementById("buttonTwo");
// let buttonThree = document.getElementById("buttonThree");
// let buttonFour = document.getElementById("buttonFour");
// let buttonFive = document.getElementById("buttonFive");

// buttonOne.addEventListener("click", function (event) {
//   event.preventDefault();
//   displayStudents(0, 10);
// });

// Setting page default where first 10 students are displayed
// displayStudents(0, 10);
