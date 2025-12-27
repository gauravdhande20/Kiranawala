import React from 'react'
import Home from './Pages/Home'
import Signup from './Components/Signup'
// import BuyingCard from './Components/BuyingCard'
import  {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './Components/Login'

const path = createBrowserRouter([{
path:"/",
element:<Home/>
},
{
  path:"/signup",
  element:<Signup/>
},
{
   path:"/login",
  element:<Login/>
}
]
)

function App() {
  return (
   <>
 <RouterProvider router={path}/>
   </>
  )
}

export default App