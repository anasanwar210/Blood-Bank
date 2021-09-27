// Navigation Variabls
let aboutOffset = $("#about").offset().top,
  statusOffset = $("#status").offset().top,
  achievmentOffset = $("#achievment").offset().top,
  testimonialOffset = $("#testimonial").offset().top,
  contactOffset = $("#contact").offset().top,
  navHeight = $("nav").outerHeight();

// Popup Variabls
let fnInput = document.getElementById("FnInput"),
  lnInput = document.getElementById("LnInput"),
  emailInput = document.getElementById("EmailInput"),
  mobInput = document.getElementById("MobInput"),
  bloodType = document.querySelector(".bloodType"),
  loca = document.querySelector(".location"),
  subBtn = document.getElementById("SubBtn");

// Status Variabls
let donation = document.querySelector(".donation"),
  SearchDiv = document.querySelector("#SearchDiv"),
  donar_popup = document.querySelector("#donar_popup"),
  invalid_inputs = document.querySelector("#invalid-inputs"),
  skip_error = document.querySelector(".skip-error");

// Search Variabls
let BloodType = document.getElementById("SearchBloodType"),
  City = document.getElementById("SearchCity"),
  BtnSearch = document.querySelector(".saerchButton"),
  TableBody = document.querySelector(".TableBody"),
  result = document.querySelector(".result"),
  table = document.querySelector(".table"),
  mistak = document.querySelector("#mistak"),
  SearchSection = document.getElementById("SearchDiv");

/*
=========================================================================================================================================
=========================================================================================================================================
                                                            Start Popup
==========================================================================================================================================
==========================================================================================================================================
*/

$(window).click(function (e) {
  console.log(e);
});

$(".close-icon").click(function () {
  $("#donar_popup").fadeOut(1000);
});

$(".donation").click(function () {
  $("#donar_popup").fadeIn(1000);
});

donation.onclick = () => {
  var donationProcess = [];
  if (localStorage.getItem("getBlood") == null) {
    donationProcess = [];
  } else {
    donationProcess = JSON.parse(localStorage.getItem("getBlood"));
  }

  subBtn.onclick = () => {
    if (
      fnInput.value != "" &&
      loca.value != "" &&
      bloodType.value != "" &&
      lnInput.value != "" &&
      emailInput.value != "" &&
      mobInput.value != ""
    ) {
      fnInput = document.getElementById("FnInput").value;
      lnInput = document.getElementById("LnInput").value;
      emailInput = document.getElementById("EmailInput").value;
      mobInput = document.getElementById("MobInput").value;
      bloodType = document.querySelector(".bloodType").value;
      loca = document.querySelector(".location").value;

      donation = {
        firstName: fnInput,
        lastName: lnInput,
        loca: loca,
        getBlood: bloodType,
        email: emailInput,
        mobile: mobInput,
      };

      donationProcess.push(donation);

      localStorage.setItem("getBlood", JSON.stringify(donationProcess));

      clearInputs();

      $("#donar_popup").fadeOut(1000);
      location.reload();
    } else {
      $("#invalid-inputs").fadeIn(500);
      $("#donar_popup :is(input , select)").attr("disabled", "on");
    }
  };
};

skip_error.onclick = function () {
  $("#invalid-inputs").fadeOut(500);
  $("#donar_popup :is(input , select)").removeAttr("disabled");
};

function clearInputs() {
  document.getElementById("FnInput").value = "";
  document.getElementById("LnInput").value = "";
  document.getElementById("EmailInput").value = "";
  document.getElementById("MobInput").value = "";
  document.querySelector(".bloodType").value = "";
  document.querySelector(".location").value = "";
}

/*
=========================================================================================================================================
=========================================================================================================================================
                                                       End Popup
==========================================================================================================================================
==========================================================================================================================================
*/

/*
=========================================================================================================================================
=========================================================================================================================================
                                                        Start Navigation Toggle
==========================================================================================================================================
==========================================================================================================================================
*/

$(window).scroll(function () {
  let wScroll = $(window).scrollTop();

  if (wScroll >= 100) {
    $("#mainNav").fadeOut();
    $("#secNav").slideDown();
  } else {
    $("#mainNav").fadeIn();
    $("#secNav").slideUp();
  }
});

$(".home, .about, .status, .achievment, .testimonial, .contact").click(
  function () {
    $(".home").attr("href", "#navigation");
    $(".about").attr("href", "#about");
    $(".status").attr("href", "#status");
    $(".achievment").attr("href", "#achievment");
    $(".testimonial").attr("href", "#testimonial");
    $(".contact").attr("href", "#contact");
  }
);

$(".home").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 1000);
});

$(".about").click(function () {
  $("html,body").animate({ scrollTop: aboutOffset - navHeight }, 1000);
});

$(".status").click(function () {
  $("html,body").animate({ scrollTop: statusOffset - navHeight }, 1000);
});

$(".achievment").click(function () {
  $("html,body").animate({ scrollTop: achievmentOffset - navHeight }, 1000);
});

$(".testimonial").click(function () {
  $("html,body").animate({ scrollTop: testimonialOffset - navHeight }, 1000);
});

$(".contact").click(function () {
  $("html,body").animate({ scrollTop: contactOffset - navHeight }, 1000);
});

// Click On Animation And Go To About Section

$(".animation").click(function () {
  $("html,body").animate({ scrollTop: aboutOffset - 200 }, 1000);
});

$(window).scroll(function () {
  if ($(window).scrollTop() >= aboutOffset - 400) {
    $(".animation").fadeOut();
  } else {
    $(".animation").fadeIn();
  }
});

/* 
=========================================================================================================================================
=========================================================================================================================================
                                                       End Navigation Toggle
==========================================================================================================================================
==========================================================================================================================================
*/

/* 
=========================================================================================================================================
=========================================================================================================================================
                                                       Start Testimonial
==========================================================================================================================================
==========================================================================================================================================
*/

$(function () {
  $(".test").owlCarousel({
    items: 1,
    autoPlay: true,
    smartSpeed: 700,
    look: true,
    autoPlayHoverPause: true,
  });
});

/* 
=========================================================================================================================================
=========================================================================================================================================
                                                       End Testimonial
==========================================================================================================================================
==========================================================================================================================================
*/

// -----------------search Section------------------------------------//
var city = document.getElementById("city"),
  blood = document.getElementById("blood");
$("#CloseIcon").click(function () {
  $("#SearchDiv").fadeOut(500);
  $(".result").fadeOut(1000);
  BloodType.value = blood.value;
  City.value = city.value;
});

$(".get_blood").click(function () {
  $("#SearchDiv").fadeIn(500);
});

let SearchArray = [];
if (localStorage.getItem("getBlood") == null) {
  SearchArray = [];
} else {
  SearchArray = JSON.parse(localStorage.getItem("getBlood"));
}

BtnSearch.addEventListener("click", function () {
  //Search Function

  let Trs = ``;
  for (let i = 0; i < SearchArray.length; i++) {
    if (
      SearchArray[i].loca == City.value &&
      SearchArray[i].getBlood == BloodType.value
    ) {
      table.classList.remove("d-none");
      mistak.classList.add("d-none");
      mistak.classList.remove("d-block");

      Trs += `<tr>
                <td>${SearchArray[i].firstName} ${SearchArray[i].lastName}</td>
                <td>${SearchArray[i].email}</td>
                <td>${SearchArray[i].mobile}</td>
              </tr>`;
      TableBody.innerHTML = Trs;
    } else {
      if (
        (BloodType.value == "Blood Type" && City.value == "Choose City") ||
        BloodType.value == "" ||
        City.value == ""
      ) {
        $("#mistak").fadeOut(10);
        $("#req").fadeIn(500);
      } else if (
        SearchArray[i].loca != City.value &&
        SearchArray[i].getBlood != BloodType.value
      ) {
        table.classList.add("d-none");
        // $("#mistak").fadeIn(500);
        $("#req").fadeOut(10);
        mistak.classList.add("d-block");
        mistak.classList.remove("d-none");
      }
    }
  }
});
