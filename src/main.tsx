import React, { Suspense,lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter,createRoutesFromElements,Route } from "react-router-dom"
import { RouterProvider } from 'react-router-dom'
import Loading from './components/Loading.tsx'
const Home = lazy(()=>import ('./pages/Home.tsx')) 
const Search = lazy(()=>import ('./pages/Search.tsx')) 
const Cart = lazy(()=>import ('./pages/Cart.tsx')) 


// const router = createBrowserRouter(
//   [
//   {
//     path:"/",
//     element:<App/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"search",
//         element:<Search/>
//       },
//       {
//         path:"cart",
//         element:<Cart/>
//       },
//     ]
//   }
// ]
// )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path=""
        element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="search"
        element={
          <Suspense fallback={<Loading />}>
            <Search />
          </Suspense>
        }
      />
      <Route
        path="cart"
        element={
          <Suspense fallback={<Loading />}>
            <Cart />
          </Suspense>
        }
      />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
