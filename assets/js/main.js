
import { product, category, buttonSearch, inputSearch, params, paginationNext, paginationPage, paginationPre, sort } from "./variable.js";
import { drawProduct } from "./drawProduct.js";
import { drawCategory} from "./drawCategory.js";


drawCategory();


drawProduct();

// Search
const search = () =>{
  params.q = inputSearch.value;
  drawProduct();
}
buttonSearch.addEventListener("click", function(){
  search();
})

inputSearch.addEventListener("keyup", function(e){
  if(e.key == "Enter"){
    search()
  }
})


// Page

paginationNext.addEventListener("click", function(){
  if(params.page < 3)
    params.page += 1;
  paginationPage.innerHTML= params.page;
  drawProduct();
});

paginationPre.addEventListener("click", function(){
  if(params.page > 1)
    params.page -= 1;
  paginationPage.innerHTML= params.page;
  drawProduct();
})


// Sort
sort.addEventListener("change", function(e){
  switch(e.target.value){
    case "mac-dinh":
      params.sort = "";
      params.order = "";
      break;
    case "asc":
      params.sort = "price";
      params.order = "asc";
      break;
    case "desc":
      params.sort = "price";
      params.order = "desc";
      break;
    case "percent":
      params.sort = "discountPercentage";
      params.order = "desc";
      break;
    default:
      break;
  }
  drawProduct();
})






