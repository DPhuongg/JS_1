import {API_PRODUCT} from './constants.js';
import { fetchApi } from "./fetchApi.js";
import { paginationNext, paginationPre, params } from './variable.js';


export const drawProduct = () => {
  const api = API_PRODUCT;
  let category = "";
  if (params.category != ""){
    category = `&category=${params.category}`;
  }
  fetchApi(`${api}?q=${params.q}&_page=${params.page}&_per_page=${params._per_page}&_sort=${params.sort}&_order=${params.order}${category}`)
  .then(data => {
    const arrHTML = data.map(item => {
      return `
      <div class="product__item">
      <div class="product__image">
      <img src = "${item.thumbnail}" atl = "ảnh sản phẩm">
      <div class="product__percent">
        ${item.discountPercentage}%
      </div>
      </div>
      <div class="product__content">
        <h3 class = "product__title">${item.title}</h3>
        <div class="product__meta">
          <div class="product__price">
            ${item.price}$
          </div>
          <div class="product__stock">
          Còn lại: ${item.stock} sp
          </div>
        </div>
      </div>
      </div>
      `
    });
    const stringHTML = arrHTML.join("");
    product.innerHTML = stringHTML;

    if(data.length < params._per_page){
      paginationNext.style.display = "none";
    }
    else{
      paginationNext.style.display = "inline-block";
    }

    if(params.page <= 1)
    {
      paginationPre.style.display = "none";
    }
    else{
      paginationPre.style.display = "inline-block";
    }
  })
}