import { configureStore} from "@reduxjs/toolkit"
import { productsApi } from "./services/productsApi"
import { setupListeners } from "@reduxjs/toolkit/query"
import { authApi } from "./services/authApi"

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddelware) => getDefaultMiddelware().concat(productsApi.middleware, authApi.middleware)
})

setupListeners(store.dispatch)