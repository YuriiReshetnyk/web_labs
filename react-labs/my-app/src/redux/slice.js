import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cars: [],
        loggedIn: false
    },
    reducers: {
        addCar: (state, action) => {
            const carIndex = state.cars.findIndex(item => item.id === action.payload.id);
            if(carIndex === -1){
                state.cars.push({
                    id: action.payload.id,
                    price: action.payload.price,
                    producer: action.payload.producer,
                    horsepower: action.payload.horsepower,
                    image_uri: action.payload.image_uri,
                    amount: action.payload.amount
                });
            } else {
                state.cars[carIndex].amount += 1;
            }
            
        },
        deleteCar: (state, action) => {
            const carIndex = state.cars.findIndex(item => item.id === action.payload.id);
            state.cars[carIndex].amount -= 1;
            if (state.cars[carIndex].amount === 0){
                state.cars.splice(carIndex, 1);
            }
        },
        setLoggedIn: (state, action) => {
            state.loggedIn = action.payload
        }
    }
});

export const { addCar, deleteCar, setLoggedIn } = cartSlice.actions;
export default cartSlice.reducer;
