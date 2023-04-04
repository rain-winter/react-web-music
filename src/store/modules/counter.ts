import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    message: 'hello Redux'
  },
  reducers: {
    changeNumAction(state, { payload }) {
      console.log(payload)
      state.count += payload
    }
  }
})
// 导出方法
export const { changeNumAction } = counterSlice.actions

export default counterSlice.reducer
