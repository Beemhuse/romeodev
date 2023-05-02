import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



export const fetchProducts = createAsyncThunk ('fetchProducts', async () => { 
  // const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const response = await fetch('https://api-test.innoloft.com/product/6781/')
  const data = await response.json()
  return data
})



export const productSlice = createSlice({
  name: 'products',
  initialState: {
    isLoading:false,
    data: null,
    isError: false
  },
  reducers: {
    viewProducts: (state, action) =>{
        state.posts = [...action.payload]
        return state
    },
    addProducts: (state, action) =>{
        state.push(action.payload);
        // state.posts = [...action.payload]
        return state
    },
    deleteProducts:(state, action) =>{
        state= state.filter((user) => user.id !== action.payload.id)
        // return state
    },
    updateProducts:(state, action) =>{
        state.map((user) => {
            if(user.id === action.payload.id){
                user.title = action.payload.title
                user.postText = action.payload.postText
            }
            return state
        })
    }
},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
        state.isLoading = true
  })
      builder.addCase(fetchProducts.fulfilled, (state, action) =>
      {
        state.isLoading = false
        state.data = action.payload
      })
      builder.addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        console.log('Error', action.payload)
        })

    }

})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = productSlice.actions
export const {viewProduct, deleteProduct, updateProduct, addProduct} = productSlice.actions
export const selectAllProducts = (state) => state.products
export default productSlice.reducer