// export const productReducer = (state = { product: [] }, action) => {
//   if (action.type === "ADD_PRODUCT") {
//     return { ...state, product: [...action.data, ...state.product] };
//   }
//   if (action.type === "SELECTED_PRODUCT") {
//     return { ...state, selectedProduct: [state.product] };
//   }
//   if (action.type === "REMOVE_PRODUCT") {
//     const filterd = state.product.filter((item) => item !== action.data);
//     return { ...state, product: [...filterd] };
//   }
//   return state;
// };

export const productReducer = (state = { product: [] }, action) => {
  if (action.type === "ADD-PRODUCT") {
    return { ...state, product: [...state.action, ...action.data] };
  }
  if (action.type === "SELECTED-PRODUCT") {
    return { ...state, sedlectedproduct: [action.data] };
  }
  if (action.type === "REMOVE-PRODUCT") {
    const filt = state.product.filter((elem) => elem !== action.data);
    return { ...state, product: [...filt] };
  }
};
