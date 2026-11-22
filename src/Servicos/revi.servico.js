import {
  buscarNoLocalStorage,
  salvarNoLocalStorage,
} from "./localstorage.servico";

export const salvarReview = (review) => {
  const reviews = buscarNoLocalStorage("reviews") || [];
  if (!review.id) {
    
    review.id = Date.now();
    reviews.push(review);
  } else {
    
    const index = reviews.findIndex((r) => r.id === review.id);
    reviews[index] = review;
  }
  
  salvarNoLocalStorage("reviews", reviews);
};

export const buscarReview = () => {
  return buscarNoLocalStorage("reviews") || [];
};