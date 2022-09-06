let products = [];

if (localStorage.getItem("products") != null) {
  products = JSON.parse(localStorage.getItem("products"))
}

let tableBody = document.querySelector(".table .table-body");
console.log(tableBody);

for (const product of products) {
  tableBody.innerHTML += ` <tr>
    <td><img src="${product.image}" height="100px" width="100px" class="card-img-top" alt="..."></td>
    <td>${product.name}</td>
    <td>${product.desc}</td>
    <td>${product.count}</td>
    <td class= "delete"><i  class="fa-solid fa-circle-xmark"></i></td>


  </tr>`




}



let deleteProducts = document.querySelectorAll(".delete");



deleteProducts.forEach((element) => {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    this.parentElement.remove();
    localStorage.clear();
    document.querySelector("sup").innerText = products.length -= 1;
  });
});



document.querySelector("sup").innerText = getProductCount(products);

function getProductCount(items) {
  let resultCount = 0;
  for (const item of items) {
    resultCount += item.count
  }

  return resultCount;
}