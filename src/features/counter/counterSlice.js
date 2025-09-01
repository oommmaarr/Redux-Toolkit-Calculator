import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:0,
  result:0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
      console.log(action.payload)
    },
    add : (currestate,action)=>{
      const sum = Number(action.payload.firstNum)+Number(action.payload.SecondNum);
      currestate.result = sum
    },
    Subtract : (currentState,action)=>{
      const subtract = Number(action.payload.firstNum) - Number(action.payload.SecondNum)
      currentState.result = subtract 
    },
    multiplication : (currentState , action)=>{
      const mul = Number(action.payload.firstNum) * Number(action.payload.SecondNum)
      currentState.result = mul
    },
    division: (currentState,action)=>{
      const division = Number(action.payload.firstNum) / Number(action.payload.SecondNum)
      currentState.result = division
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount , add , Subtract , multiplication ,division } = counterSlice.actions

export default counterSlice.reducer