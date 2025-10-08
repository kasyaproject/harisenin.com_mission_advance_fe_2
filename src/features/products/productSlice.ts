import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "@/types/Product";
import productServices from "@/services/product.service";

interface ProductState {
  items: IProduct[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  items: [],
  loading: false,
  error: null,
};

// Ambil semua product dari API
export const fetchProducts = createAsyncThunk(
  "products/getAll",
  async (_, thunkAPI) => {
    try {
      const res = await productServices.getAllProducts();

      return res.data;
    } catch (error) {
      if (error instanceof Error) {
        // Tangani error standar
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

// Tambah product baru
export const createProduct = createAsyncThunk(
  "products/create",
  async (productData: IProduct, thunkAPI) => {
    try {
      const response = await productServices.addProduct(productData);

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        // Tangani error standar
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

// Update product existing
export const updateProduct = createAsyncThunk(
  "products/update",
  async (productData: IProduct, thunkAPI) => {
    try {
      const response = await productServices.updateProduct(
        productData.id,
        productData
      );

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        // Tangani error standar
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

// Hapus product berdasarkan ID
export const removeProduct = createAsyncThunk(
  "products/delete",
  async (id: string, thunkAPI) => {
    try {
      await productServices.deleteProduct(id);
      return id;
    } catch (error) {
      if (error instanceof Error) {
        // Tangani error standar
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Optional local reducers (tidak async)
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
    editProduct: (state, action) => {
      const index = state.items.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // ✅ Fetch All
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload || [];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // ✅ Create
      .addCase(createProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      // ✅ Update
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })

      // ✅ Delete
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((p) => p.id !== action.payload);
      });
  },
});

export const { addProduct, deleteProduct, editProduct } = productSlice.actions;
export default productSlice.reducer;
