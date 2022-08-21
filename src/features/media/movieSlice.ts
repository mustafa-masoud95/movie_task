import { createSlice,PayloadAction ,createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, API_URL } from "../../components/common/Api/data";
import {RootState} from '../store'


/* -------if we need to use createAsyncThunk types------- */
// interface SerializedError {
//     name?: string
//     message?: string
//     code?: string
//     stack?: string
//   }
  
//   interface PendingAction<ThunkArg> {
//     type: string
//     payload: undefined
//     meta: {
//       requestId: string
//       arg: ThunkArg
//     }
//   }
  
//   interface FulfilledAction<ThunkArg, PromiseResult> {
//     type: string
//     payload: PromiseResult
//     meta: {
//       requestId: string
//       arg: ThunkArg
//     }
//   }
  
//   interface RejectedAction<ThunkArg> {
//     type: string
//     payload: undefined
//     error: SerializedError | any
//     meta: {
//       requestId: string
//       arg: ThunkArg
//       aborted: boolean
//       condition: boolean
//     }
//   }
  
//   interface RejectedWithValueAction<ThunkArg, RejectedValue> {
//     type: string
//     payload: RejectedValue
//     error: { message: 'Rejected' }
//     meta: {
//       requestId: string
//       arg: ThunkArg
//       aborted: boolean
//     }
//   }
  
//   type Pending = <ThunkArg>(
//     requestId: string,
//     arg: ThunkArg
//   ) => PendingAction<ThunkArg>
  
//   type Fulfilled = <ThunkArg, PromiseResult>(
//     payload: PromiseResult,
//     requestId: string,
//     arg: ThunkArg
//   ) => FulfilledAction<ThunkArg, PromiseResult>
  
//   type Rejected = <ThunkArg>(
//     requestId: string,
//     arg: ThunkArg
//   ) => RejectedAction<ThunkArg>
  
//   type RejectedWithValue = <ThunkArg, RejectedValue>(
//     requestId: string,
//     arg: ThunkArg
//   ) => RejectedWithValueAction<ThunkArg, RejectedValue>



  type MovieState={
      movies?:[] 
  
  }
  const initialState={
  
      movies:[],
    
      loading: 'idle',
    
  
  } as MovieState

/* --------fetching data using createAsyncThunk------  */

// export const fetchAsyncMovies =createAsyncThunk('media/fetchAsyncMovies',async() =>{
    
//     fetch(`${API_URL}discover/movie?api_key=${API_KEY}`)
//     .then(res=>res.json())
//     .then(data=>{return data.results})
 
// })




const movieSlice=createSlice({
    name:"media",
    initialState,
    reducers:{
        addMovies:(state,{payload}:PayloadAction<[]>)=>{
            state.movies=payload

        },
     


    },
//     extraReducers:(builder)=>{
        
     
//          builder
//          .addCase(fetchAsyncMovies.pending,(state,action:PayloadAction)=>{
//             console.log("pending")
//             state.status='loading...'
//         })
//         .addCase(fetchAsyncMovies.fulfilled,(state,action:PayloadAction)=>{
//             console.log("Success")            
//             state.movies?.push(action.payload)
//         })
//         .addCase(fetchAsyncMovies.rejected,(state,{payload})=>{
//             console.log("rejected")
//         })
 

// },

       

})

export const { addMovies } = movieSlice.actions
export const getAllMovies=(state:RootState)=>state.media.movies
export default movieSlice.reducer

