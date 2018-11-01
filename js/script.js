/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate

//storing li elements containing student info
const studentItem = document.querySelectorAll(".student-item");

// Create a function to hide all of the items in the list except for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four

//Testing here hiding everything except for the first 10. Delete later

const displayStudents = (studentStart, studentEnd) => {

  for (let count = 0; count < studentItem.length; count++) {
    studentItem[count].style.display = "none";

  }

  for (let count = studentStart; count < studentEnd; count++){
    studentItem[count].style.display = "block";

  }

};

// for (count = 10; count < 54; count++) {
//   studentItem[count].style.display = "none";
//
// }


// Create and append the pagination links - Creating a function that can do this is a good approach




// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here

displayStudents(0, 10);
