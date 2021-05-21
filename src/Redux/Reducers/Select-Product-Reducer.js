export const SelectProductReducer = (initialstate = [], action) => {
  switch (action.type) {
    case "SELECT_PRODUCT":
      return action.payload;

    default:
      return initialstate;
  }
};
