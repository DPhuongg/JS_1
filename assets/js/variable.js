

export const category = document.querySelector("#category");
export const product = document.querySelector("#product");
export const inputSearch = document.querySelector("#search input");
export const buttonSearch =  document.querySelector("#search button");
export const paginationPre = document.querySelector("#pagination__pre");
export const paginationNext = document.querySelector("#pagination__next");
export const paginationPage = document.querySelector("#pagination__page");
export const sort = document.querySelector("#sort");

export let params = {
  q: "",
  page: 1,
  _per_page: 10,
  category: "",
  sort: "",
  order: ""
}