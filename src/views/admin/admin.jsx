import AddBlog from "./AddBlog"
import AddProject from "./AddProject"
import Blogs from "./blogs"


function Admin() {
  return (
    <div className="mt-80">
    <h1>Dashboard de Administración</h1>
    <Blogs/>
    <h2>Agregar Proyecto</h2>
    <AddProject />
    <h2>Agregar Blog</h2>
    <AddBlog />
  </div>
  )
}

export default Admin