components -> tudo que não precisa de rotas (seções)
routes -> tudo que precisa de rotas (novas páginas)
routes precisa de mais dependencias do que ja vem em 'package.json' -> 
comando:npm install react-router-dom  = Cria-se "react-router-dom": "^6.26.1"
Importaremos as rotas na 'main' pois todos componentes deverão respeitar ele -> import { createBrowseRouter, RouterProvider} from 'react-router-dom'
Depois retira-se o app/ do main e coloca     <RouterProvider router={router} />
Criando os elementos FILHOS na MAIN (dentro do negocio) ->
Children:[
  {path:'/', element:<home/>},
  {path:'/aluno', element}
]
Executando sistema de outras paginas (routes) -> cria <Outlet/> no app +  import {Outlet} from 'react-router-dom'

Exportando dados para serem recebidos em outra pagina (componente -> app)
export const Dados={} --> no componente import { Dados } from "../components/Dados"



