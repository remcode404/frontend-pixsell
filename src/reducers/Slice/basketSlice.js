import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  loading: false,
  cartItems: [],
  token: localStorage.getItem("token"),
  decodedPayload: null,
  basket: {},
};

export const parseJwt = (token) => {
  let base64Url = token.split(".")[1];
  let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  let jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  console.log(JSON.parse(jsonPayload));
  return JSON.parse(jsonPayload);
};

export const getBasket = createAsyncThunk("basket/get", async (_, thunkAPI) => {
//   const token = thunkAPI.getState().registration.token;
//   console.log(token);
  try {
    const res = await fetch("http://localhost:3001/basket/user", {
      method: "GET",
      headers: { Authorization: `Bearer ${initialState.token}` },
    });
    const basket = await res.json();
console.log(basket);
    if (basket.error) {
      return thunkAPI.rejectWithValue(basket.error);
    }
   
    return thunkAPI.fulfillWithValue(basket);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const addBasket = createAsyncThunk(
  "basket/add",
  async (id , thunkAPI) => {
 
    try {
      const res = await fetch(`http://localhost:3001/basket`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
         Authorization: `Bearer ${initialState.token}`,
        },
        body: JSON.stringify({ product: { productId: id } }),
      });
      const data = await res.json();
      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }
      return thunkAPI.fulfillWithValue(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeBasket = createAsyncThunk(
  "basket/delete",
  async (productId, thunkAPI) => {
    const token = thunkAPI.getState().registration.token;
    try {
      await fetch(`http://localhost:3001/basket/delete/${productId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return productId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(addBasket.fulfilled, (state, action) => {
      state.basket.products.push({
        productId: action.payload,
        amount: 1,
      });
    });

    builder.addCase(removeBasket.fulfilled, (state, action) => {
      state.basket.products = state.basket.products.filter(
        (item) => item.productId !== action.payload
      );
    });

    builder.addCase(getBasket.fulfilled, (state, action) => {
      state.basket = action.payload;
    });
  },
});

export default cartSlice.reducer;
