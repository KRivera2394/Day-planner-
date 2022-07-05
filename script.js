//TEXT AREA//
var textOne = $(".textOne");
var textTwo = $(".textTwo");
var textThree = $(".textThree");
var textFour = $(".textFour");
var textFive = $(".textFive");
var textSix = $(".textSix");
//BUTTONS
var saveBtnOne = $(".saveButtonOne");
var saveBtnTwo = $(".saveButtonTwo");
var saveBtnThree = $(".saveButtonThree");
var saveBtnFour = $(".saveButtonFour");
var saveBtnFive = $(".saveButtonFive");
var saveBtnSix = $(".saveButtonSix");
//EVENTLISTENERS
$(saveBtnOne).click(saveInputOne);
$(saveBtnTwo).click(saveInputTwo);
$(saveBtnThree).click(saveInputThree);
$(saveBtnFour).click(saveInputFour);
$(saveBtnFive).click(saveInputFive);
$(saveBtnSix).click(saveInputSix);
var hourMinuteSecond = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(hourMinuteSecond);
var currentHour = moment().hour();
console.log(currentHour);

$(".textOne").val(localStorage.a) 
$(".textTwo").val(localStorage.b)
$(".textThree").val(localStorage.c)
$(".textFour").val(localStorage.d)
$(".textFive").val(localStorage.e)
$(".textSix").val(localStorage.f)


//9AM COLOR FUNCTION
$(document).ready(function () {
  var nineColor = textOne.attr("data-number");

  if (nineColor < currentHour) {
    textOne.addClass("past");
  }

  if (nineColor = currentHour) {
    textOne.addClass("present");
  } else {
    textOne.addClass("future");
  }
});

//10AM COLOR FUNCTION
$(document).ready(function () {
  var TenColor = textTwo.attr("data-number");

  if (TenColor < currentHour) {
    textTwo.addClass("past");
  }

  if (TenColor = currentHour) {
    textTwo.addClass("present");
  } else {
    textTwo.addClass("future");
  }
});
//11AM COLOR FUNCTION
$(document).ready(function () {
  var ElevenColor = textThree.attr("data-number");

  if (ElevenColor < currentHour) {
    textThree.addClass("past");
  }

  if (ElevenColor = currentHour) {
    textThree.addClass("present");
  } else {
    textThree.addClass("future");
  }
});
//12PM COLOR FUNCTION
$(document).ready(function () {
  var TwelveColor = textFour.attr("data-number");

  if (TwelveColor < currentHour) {
    textFour.addClass("past");
  }

  if (TwelveColor = currentHour) {
    textFour.addClass("present");
  } else {
    textFour.addClass("future");
  }
});
//1PM COLOR FUNCTION
$(document).ready(function () {
  var oneColor = textFive.attr("data-number");

  if (oneColor < currentHour) {
    textFive.addClass("past");
  }

  if (oneColor = currentHour) {
    textFive.addClass("present");
  } else {
    textFive.addClass("future");
  }
});

//2PM COLOR FUNCTION
$(document).ready(function () {
  var twoColor = textSix.attr("data-number");

  if (twoColor < currentHour) {
    textSix.addClass("past");
  }

  if (twoColor = currentHour) {
    textSix.addClass("present");
  } else {
    textSix.addClass("future");
  }
});

//CLOCK
setInterval(() => {
  var today = moment().format("dddd, MMMM Do, YYYY, h:mm:ss");
  $(".currentDate").text(today);
});

//BUTTON FUNCTIONS
function saveInputOne() {
  localStorage.a = $(".textOne").val().trim()

  console.log(textOne.val());
  console.log(window);
}

function saveInputTwo() {
  localStorage.b = $(".textTwo").val().trim();
  console.log(textTwo.val());
}

function saveInputThree() {
  localStorage.c = $(".textThree").val().trim()
  console.log(textThree.val());
}

function saveInputFour() {
  localStorage.d = $(".textFour").val().trim()
  console.log(textFour.val());
}

function saveInputFive() {
  localStorage.e = $(".textFive").val().trim()
  console.log(textFive.val());
}

function saveInputSix() {
  localStorage.f = $(".textSix").val().trim()
  console.log(textSix.val());
}
