const InitialState = {
  addedItems: [],
  total:0,
};

function cartReducer(state = InitialState, action){
  console.log(state.addedItems)
  let cart=state.addedItems
  switch (action.type) {
    case "addtocart":
       //check if the action id exists in the addedItems
       let existed_item= state.addedItems.find(item=> action.payload.id === item.id)
       if(existed_item)
       {
        action.payload.quantity += 1 
           return{
              ...state,
               total: state.total + action.price 
                }
      }
      else{
        action.payload.quantity = 1 
        cart.push(action.payload);
        console.log("add to cart",cart)
        let newTotal = state.total + action.price 
        return {  
          ...state,
          addedItems: cart,
        };  
      }
      
    case "Remove From Cart":
      let itemToRemove= state.addedItems.find(item=> action.id === item.id)
      let new_items = state.addedItems.filter(item=> action.id !== item.id)
      let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
      return{
        ...state,
        addedItems: new_items,
        total: newTotal
    }  
    case "ADD_QUANTITY":
      let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newtotal = state.total + addedItem.price
          return{
              ...state,
              total: newtotal
          }
    default:
      return state;
  }
};

export default cartReducer;
