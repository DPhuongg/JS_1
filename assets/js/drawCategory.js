import { fetchApi } from "./fetchApi.js";
import { API_CATEGORY } from "./constants.js";
import { params, paginationPage} from "./variable.js";
import { drawProduct } from "./drawProduct.js";

export const drawCategory = () =>{
  fetchApi(API_CATEGORY) 
  .then(data => {
    const arrHTML = data.map(item => {
      return `
        <div class = "category__item">${item}</div>
      `
    });
    const stringHTML = arrHTML.join("");
    // console.log(stringHTML);
    category.innerHTML = stringHTML;

    const listCategory = document.querySelectorAll("#category .category__item");
    listCategory.forEach(item => {
      item.addEventListener("click", function(){
        params.category = item.innerText;
        params.page = 1;
        paginationPage.innerHTML= params.page;
        // console.log(params.category);
        drawProduct();
      })
    })
  }) 
}