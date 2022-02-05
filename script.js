let nowDate = new Date(),
    curYear = nowDate.getFullYear(),
    curMonth = nowDate.getMonth(),
    curDateNum = nowDate.getDate(),
    monthName = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];
    container = document.getElementById('month-calendar'),
    monthContainer = container.getElementsByClassName('month-name')[0],
    yearContainer = container.getElementsByClassName('year-name')[0],
    daysContainer = container.getElementsByClassName('days')[0],
    prev = container.getElementsByClassName('prev')[0],
    next = container.getElementsByClassName('next')[0]



let curDate = nowDate.setMonth(nowDate.getMonth() - 1);


function setCurMonthAndYear() {
    let month = monthName[curMonth];
    monthContainer.innerHTML = month;
    yearContainer.innerHTML = curYear;
}
setCurMonthAndYear();


function setMonthCalendar(year,month) {
    let days = new Date(year, month + 1, 0).getDate(),
    monthPrefix = new Date(year, month, 0).getDay(),
    monthDaysText = '';

    monthContainer.innerText = monthName[month];
    yearContainer.innerText = year;
    daysContainer.innerHTML = '';

    if (monthPrefix > 0){
      for (let i = 1  ; i <= monthPrefix; i++){
        monthDaysText += '<li></li>';
      }
    }
    
    for (let i = 1; i <= days; i++){
      monthDaysText += '<li>' + i + '</li>';
    }

    daysContainer.innerHTML = monthDaysText;   

    if (month == curMonth && year == curYear){
        days = daysContainer.getElementsByTagName('li');
        days[monthPrefix + curDateNum - 1].classList.add('date-now');                
    }

    addPrice();
       
}

setMonthCalendar(curYear,curMonth);

prev.addEventListener("click", function() {
  let curDate = new Date(yearContainer.textContent, monthName.indexOf(monthContainer.textContent));
  curDate.setMonth(curDate.getMonth() - 1);
  let curYear = curDate.getFullYear(),
      curMonth = curDate.getMonth();

    setMonthCalendar(curYear, curMonth);
    
});

prev.addEventListener("click", function() {
    let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));
    curDate.setMonth(curDate.getMonth() + 1);

    let curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();

    setMonthCalendar(curYear,curMonth);
    
});


function addPrice() {
  let weekdayPrice = "10",
      weekendPrice = "30",
      weeksArr = [],
      weekLength = 7    

      
  daysArr = document.querySelectorAll('.days')[0].children;   
  arr = Array.prototype.slice.call(daysArr)

  for(let i = 0; i < arr.length; i += weekLength) {
    let cuhunk = arr.slice(i, i + weekLength)
    weeksArr.push(cuhunk);      
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i].appendChild(document.createElement('p')).classList.add('price'); 
  }  

  for(let i = 0, j = 0; i < weeksArr.length; i++) {

      for (let j = 0; j < daysArr.length; j++) {
            if (weeksArr[i][j].innerText !== " ") {
                if (j <= 5) {
                   document.querySelectorAll('.price')[j].innerText = weekdayPrice;
                } else {
                    document.querySelectorAll('.price')[j].innerText = weekendPrice;
                }            
            }                    
      }
    
  }



  
//   let priceArr = document.querySelectorAll(".price");


    
}
