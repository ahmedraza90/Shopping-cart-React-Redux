const Add = (products) => {
    return {
      type: "Add To Cart",
      payload: products,
    };
  };
const Remove = (products) => {
    return {
      type: "Remove From Cart",
      payload: products,
    };
  };

export { Add, Remove }