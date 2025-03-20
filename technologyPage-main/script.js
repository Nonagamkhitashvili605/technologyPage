// ვასელექთებ ბურგერაიქონს,ნავიგაციას
let navigation = document.getElementById("navigation");
let burger = document.getElementById("burger");
// აიქონზე დაკლიკებისას
burger.addEventListener("click", function () {
  if (navigation.classList.contains("activeNavigation")) {
    navigation.classList.remove("activeNavigation");
    burger.innerHTML = ' <i class="fa-solid fa-bars"></i>';
  } else {
    navigation.classList.add("activeNavigation");
    burger.innerHTML = '<i class="fas fa-times"></i>';
  }
});

let currentPage = 1;
let totalPages;

function getUsers(page) {
  fetch("https://reqres.in/api/users?page=" + page, {
    method: "GET",
  })
    .then(function (response) {
      if (response.status !== 200) {
        throw response.status;
      }
      return response.json();
    })
    .then(function (responseData) {
      // let container = document.getElementById('container')
      let fragment = document.createDocumentFragment();
      totalPages = responseData.total_pages;
      console.log(responseData);

      responseData.data.forEach(function (item) {
        let li = document.createElement("li");
        li.textContent = item.email;
        let image = document.createElement("img");
        image.src = item.avatar;
        fragment.appendChild(li);
        fragment.appendChild(image);
      });

      document.getElementById("ul_list").innerHTML = " ";
      document.getElementById("ul_list").appendChild(fragment);
    })
    .catch(function () {
      let container = document.getElementById("container");
      let p = document.createElement("p");
      p.textContent = "server error 404";
      container.appendChild(p);
    });
}

document.getElementById("loadprev").addEventListener("click", function () {
  if (currentPage == 1) {
    return;
  }

  currentPage -= 1;
  getUsers(currentPage);
  // currentPage =currentPage -1
});

document.getElementById("loadnext").addEventListener("click", function () {
  if (currentPage == totalPages) {
    return;
  }
  currentPage += 1;
  getUsers(currentPage);
});

getUsers(currentPage);
