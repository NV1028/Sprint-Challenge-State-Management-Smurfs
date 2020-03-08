import uuid from "uuid";

export const initialState = [
    {
        name: 'Brainey',
        age: 200,
        height: '5cm',
        id: 0
      }
];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SMURF":
      return [...state, 
        { 
          name: action.payload.name, 
          age: action.payload.age,
          height: action.payload.height, 
          id: uuid() 
        }];
    
    default:
      return state;
  }
};
