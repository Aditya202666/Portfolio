import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import RootLayout from "./layout/RootLayout"
import AboutPage from "./pages/AboutPage"
import ProjectsPage from "./pages/ProjectsPage"
import ContactPage from "./pages/ContactPage"

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route  element={<RootLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/> }/>
        <Route path="/projects" element={<ProjectsPage/> }/>
        <Route path="/contact" element={ <ContactPage/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
