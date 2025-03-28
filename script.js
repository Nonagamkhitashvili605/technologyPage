function getUsers() {
  let request = new XMLHttpRequest();
  request.addEventListener("load", render);
  request.addEventListener("error", errorRender);

  request.open("GET", "https://reqres.in/api/users?page=1");
  request.send();
}

// fetch 28 february
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
        // კონტეინერი სურათისა და მეილისთვის
        let userContainer = document.createElement("div");
        userContainer.style.textAlign = "center"; // ცენტრირება
        userContainer.style.marginBottom = "20px"; // სივრცე თითოეულ ელემენტს შორის

        // სურათი
        let image = document.createElement("img");
        image.src = item.avatar;
        image.style.display = "block";
        image.style.margin = "0 auto";
        image.style.width = "150px";
        image.style.height = "150px";
        image.style.borderRadius = "30px";
        image.style.marginTop = "10px";

        // მეილი
        let email = document.createElement("p");
        email.textContent = item.email;
        email.style.marginTop = "10px"; // სივრცე სურათისა და მეილის შორის
        email.style.fontSize = "15px";

        // მეილი და სურათი კონტეინერში
        userContainer.appendChild(image);
        userContainer.appendChild(email);

        // ამ კონტეინერის დამატება ფრაგმენტში
        fragment.appendChild(userContainer);
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
