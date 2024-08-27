import { children, StrictMode } from "react"
import { createRoot } from "react-dom/client"

// Instalando o pacote de dependencias para criar as rotas
import { createBrowserRouter,RouterProvider } from "react-router-dom" 
import App from "./App.jsx"
import Error from "./routes/Error.jsx"
import Aluno from "./routes/Aluno.jsx"

// Criando a funçao createBrowserRouter
const router = createBrowserRouter([
  {
    // Criando os elementos PAI
    path:"/",element:<App/>,
    errorElement:<Error/>,

    // Criando os elementos FILHOS
    children:[
      {path:'/', element:<home/>},
      {path:'/aluno', element: <Aluno/>}
    ]
  }
])


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Criando a desestruturação para que seja renderizada */}
    <RouterProvider router={router} />
  </StrictMode>,
)

