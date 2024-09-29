import AddBlog from "./AddBlog"
import AddProject from "./AddProject"
import Blogs from "./blogs"


function Admin() {
  return (
    <div className="flex justify-center flex-col p-10 w-full">
    <h1>Dashboard de Administración</h1>

    <div className="m-5">
    <Blogs/>
    <h2 className="m-5">Agregar Blog</h2>
    <AddBlog />

    </div>
    <div>

    <h2 className="m-5">Agregar Proyecto</h2>
    <AddProject />
    </div>
    
  </div>
  )
}

export default Admin