import { configureStore } from '@reduxjs/toolkit'
import { HabitantSlice} from './features'

const store = configureStore({
  reducer: {
    habitant: HabitantSlice,
  },
})
export default store
