import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import habitantService from '../../config/HabitantService'
import axios from 'axios'
const initialStateHabitant = {
    
    habitant: {},
    habitantList: [],
    habitantChildrenList: [],
    habitantParentId: null,
    habitantChildrenId: null,
    numberOfChildren: 0,
    data: [],
    error: {
      code: '',
      message: '',
      fields: [],
    },
  }
  export const create = createAsyncThunk(
    'habitant/create',
  
    async (payload) => {
      try {
        const response = await fetch(habitantService.create, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
          .then((response) => response.json())
          .catch((error) => console.log(error))
        return response
      } catch (err) {
        return err.response
      }
    },
  )
  export const updateHabitant = createAsyncThunk(
    'habitant/update',
  
    async (payload) => {
      try {
        const response = await fetch(habitantService.update, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
          .then((response) => response.json())
          .catch((error) => console.log(error))
        return response
      } catch (err) {
        return err.response
      }
    },
  )
  export const updateHabitantDetail = createAsyncThunk(
    'habitant/updateDetail',
  
    async (payload) => {
      try {
        const response = await fetch(habitantService.updatebyid, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
          .then((response) => response.json())
          .catch((error) => console.log(error))
        return response
      } catch (err) {
        return err.response
      }
    },
  )
  
  export const findallbyiscitizen = createAsyncThunk('habitant/findallbyiscitizen', async () => {
    const result = await fetch(habitantService.findallbyiscitizen)
      .then((response) => response.json())
      .then((data) => data)
  
    return result
  })
  export const findallbyname = createAsyncThunk('habitant/findallbyname', async (payload) => {
    try {
      console.log(payload)
      const response = await axios.get(habitantService.findallbyname + payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
  
      return response.data
    } catch (error) {
      return error.response.data
    }
  })
  export const findallbyhasdrivinglicense = createAsyncThunk('habitant/findallbyhasdrivinglicense', async () => {
    const result = await fetch(habitantService.findallbyhasdrivinglicense)
      .then((response) => response.json())
      .then((data) => data)
  
    return result
  })
  export const findallnumberbychildren = createAsyncThunk('habitant/findallnumberbychildren', async (payload) => {
    try {
      console.log(payload)
      const response = await axios.get(habitantService.findallnumberbychildren + payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
  
      return response.data
    } catch (error) {
      return error.response.data
    }
  })
  export const findchildrenbyid = createAsyncThunk('habitant/findchildrenbyid', async (payload) => {
    try {
      console.log(payload)
      const response = await axios.get(habitantService.findchildrenbyid + payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
  
      return response.data
    } catch (error) {
      return error.response.data
    }
  })
  
  export const findbyid = createAsyncThunk('habitant/findbyid', async (payload) => {
    try {
      console.log(payload)
      const response = await axios.get(habitantService.findbyid + payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
  
      return response.data
    } catch (error) {
      return error.response.data
    }
  })
  export const getAllHabitant = createAsyncThunk('habitantList/findall', async () => {
    const result = await fetch(habitantService.findall)
      .then((response) => response.json())
      .then((data) => data)
  
    return result
  })
  const habitantSlice = createSlice({
    name: 'habitant',
    initialState: initialStateHabitant,
  
    reducers: {
    
    },
    extraReducers: (build) => {
        build.addCase(create.fulfilled, (state, action) => {
            state.habitant = action.payload
            alert('Habitant created')
        })
        build.addCase(create.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
          })
          build.addCase(create.pending, (state, action) => {
            state.isLoading = true
          })
        build.addCase(updateHabitant.fulfilled, (state, action) => {
            state.habitant = action.payload
            alert('Habitant updated')
        })
        build.addCase(updateHabitant.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
          })
          build.addCase(updateHabitant.pending, (state, action) => {
            state.isLoading = true
          })
          build.addCase(updateHabitantDetail.fulfilled, (state, action) => {
            state.habitant = action.payload
            alert('Habitant updated')
        })
        build.addCase(updateHabitantDetail.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
          })
          build.addCase(updateHabitantDetail.pending, (state, action) => {
            state.isLoading = true
          })
        build.addCase(findallbyiscitizen.fulfilled, (state, action) => {
            state.habitantList = action.payload
        })
        build.addCase(findallbyiscitizen.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
          })
          build.addCase(findallbyiscitizen.pending, (state, action) => {
            state.isLoading = true
          })
        build.addCase(findallbyname.fulfilled, (state, action) => {
          if(action.payload.length === 0){
            alert('Habitant not found')
          }else{state.habitantList = action.payload
            }
        })
        build.addCase(findallbyname.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
          })
          build.addCase(findallbyname.pending, (state, action) => {
            state.isLoading = true
            
          })
        build.addCase(findallbyhasdrivinglicense.fulfilled, (state, action) => {
            state.habitantList = action.payload
        })
        build.addCase(findallbyhasdrivinglicense.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
          })
          build.addCase(findallbyhasdrivinglicense.pending, (state, action) => {
            state.isLoading = true
          })
        build.addCase(findallnumberbychildren.fulfilled, (state, action) => {
            state.numberOfChildren = action.payload
            console.log("cocuk sayısı:"+action.payload) 
        })
        build.addCase(findallnumberbychildren.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
          })
          build.addCase(findallnumberbychildren.pending, (state, action) => {
            state.isLoading = true
          })
          build.addCase(findchildrenbyid.fulfilled, (state, action) => {
            state.habitantChildrenList = action.payload.children
            console.log("cocuklar:"+action.payload.children)
        })
        build.addCase(findchildrenbyid.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
          })
          build.addCase(findchildrenbyid.pending, (state, action) => {
            state.isLoading = true
          })
        build.addCase(findbyid.fulfilled, (state, action) => {
            state.habitant = action.payload
        })
        build.addCase(findbyid.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
            alert('Habitant not found')
          })
          build.addCase(findbyid.pending, (state, action) => {
            state.isLoading = true
          })
        build.addCase(getAllHabitant.fulfilled, (state, action) => {
            state.habitantList = action.payload
        })
        build.addCase(getAllHabitant.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
          })
          build.addCase(getAllHabitant.pending, (state, action) => {
            state.isLoading = true
          })
    },
})


export default habitantSlice.reducer
