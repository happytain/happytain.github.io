let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear); //currentMonth where: Jan = 0, Dec = 11
}

// function redirect() {
//   // $('#day_22-6-2020').css( "background-color", "red" );
//   // window.location = "page/6.8.20.html";

//   // $(document).delegate("div", "click", function() {
//   //  window.location = $(this).find("#day_22-6-2020").attr("page/6.8.20.html");
//   // });

//   // $(document).ready(function(){
//   //   $("#day_22-6-2020").click(function(){
//   //       window.location = ("page/6.8.20.html"
//   //   });
//   // });

// }


function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let tbl = document.getElementById("calendar-body"); // body of the calendar


    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");
        row.classList.add("days");
        // $("td").attr('id', 'day_'); //REMOVED AS IT GENERATED ID ONLY WHEN CLICK

     

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
                cell.classList.add("nully");              

            }


            else if (date > daysInMonth) {
                break;
            } 

            //for any cell before day 1 


            else {
              var dateB;
               if(date < 10)
                {
                  dateB = "0" + date;
                }
                else
                  dateB = date;
                let cell = document.createElement("td");
                let cellText = document.createTextNode(dateB);

                console.log(date);
                
                // Colors today's date:
                // if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                // cell.classList.add("bg-info");
                // } 
                
                //Colors articles posted in:
                //– JUNE:
                if (month === 5){ if (date === 8 || date === 15 || date === 22){ cell.classList.add("heyo");}}
                //– JULY:
                // if (month === 6){ if (date === ... ){ cell.classList.add("heyo");}}


                cell.appendChild(cellText);    
                row.appendChild(cell);
                cell.setAttribute("id", "day_");
                date++;


                $(document.body).ready(function() {
                  $( "td" ).each(function( i ) {
                    
                    if (this.id == "day_" && this.className !== "nully" ) { 
                      let nullies = $('.nully').length-1;
                      console.log(nullies);
                      let newNumber = i - nullies;
                      let realMonth = currentMonth + 1;
                      $(this).attr('id','day_' + newNumber + '-' + realMonth + '-' + currentYear);                   
                    } 
                    
                    if (this.className == "nully" ){
                      $(this).attr('id','number' + '0')
                    }

                  });

                  // ('#day_' + newNumber + '-' + realMonth + '-' + currentYear)
                  
                  $("#day_22-6-2020").click(function(){
                  window.location = "page/22-6-2020.html";
                  });
                  $("#day_15-6-2020").click(function(){
                  window.location = "page/15-6-2020.html";
                  });
                  $("#day_8-6-2020").click(function(){
                  window.location = "page/8-6-2020.html";
                  });

                });
                    
            }
        }
        tbl.appendChild(row); // appending each row into calendar body.
    }
}