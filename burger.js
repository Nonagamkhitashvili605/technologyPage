let navigation = document.getElementById("navigation");
let burger = document.getElementById("burger");

// burger.addEventListener("click", function () {
//   if (navigation.classList.contains("activeNavigation")) {
//     //ნავიგაციას აქრობს
//     navigation.classList.remove("activeNavigation");
//     //ბურგერ მენიუდ გადააქცევს x
//     burger.innerHTML = '<i class="fa-solid fa-times"></i> ';
//   } else {
//     //გამოიტანს ნავიგაციის მენიუს
//     navigation.classList.add("activeNavigation");
//     //გამოაჩენს x
//     burger.innerHTML = '<i class="fa-solid fa-bars"></i>';
//   }
// });
// document.addEventListener("DOMContentLoaded", function () {
//   let navigation = document.getElementById("navigation");
//   let burger = document.getElementById("burger");

//   burger.addEventListener("click", function () {
//     if (navigation.classList.contains("activeNavigation")) {
//       navigation.classList.remove("activeNavigation");
//       burger.innerHTML = '<i class="fa-solid fa-bars"></i>';
//     } else {
//       navigation.classList.add("activeNavigation");
//       burger.innerHTML = '<i class="fa-solid fa-times"></i>';
//     }
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  let navigation = document.getElementById("navigation");
  let burger = document.getElementById("burger");

  burger.addEventListener("click", function () {
    navigation.classList.toggle("activeNavigation");

    if (navigation.classList.contains("activeNavigation")) {
      burger.innerHTML = '<i class="fa-solid fa-times"></i>';
    } else {
      burger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });
});
