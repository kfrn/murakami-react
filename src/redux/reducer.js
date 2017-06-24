import initialState from '../redux/initialState';
import clone from 'clone';

const reducer = (state = initialState, { type, payload = {} }) => {
  const newState = clone(state);
  const bookIndex = newState.cart.findIndex(elem => elem.bookID === payload);

  switch (type) {
    case 'ADD_TO_CART':
      newState.cart.push({ bookID: payload, quantity: 1 });
      return newState;

    case 'INCREMENT_QUANTITY':
      newState.cart[bookIndex].quantity += 1;
      return newState;

    case 'REMOVE_FROM_CART':
      newState.cart.splice(bookIndex, 1);
      return newState;

    default:
      return newState;
  }
};

export default reducer;
