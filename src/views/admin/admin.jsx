import AddBlog from "./AddBlog";
import AddProject from "./AddProject";
import Blogs from "./blogs";
import Projects from "./projects";

function Admin() {
  return (
    <div className="flex">
      <aside className="w-1/4 bg-gray-800 text-white p-5">
        <h2 className="text-xl font-bold">Menú</h2>
        <ul className="mt-4">
          <li className="py-2 hover:bg-gray-700">
            <a href="#blogs">Blogs</a>
          </li>
          <li className="py-2 hover:bg-gray-700">
            <a href="#add-blog">Agregar Blog</a>
          </li>
          <li className="py-2 hover:bg-gray-700">
            <a href="#project">Projectos</a>
          </li>
          <li className="py-2 hover:bg-gray-700">
            <a href="#add-project">Agregar Proyecto</a>
          </li>
        </ul>
      </aside>
      
      <main className="flex-1 p-10">
        <h1 className="text-2xl font-bold">Dashboard de Administración</h1>
        
        <div id="blogs" className="m-5">
          <Blogs />
        </div>
        
        <div id="add-blog" className="m-5">
          <h2 className="text-xl font-bold">Agregar Blog</h2>
          <AddBlog />
        </div>
        <div id="project" className="m-5">
          <Projects/>
        </div>
        <div id="add-project" className="m-5">
          <h2 className="text-xl font-bold">Agregar Proyecto</h2>
          <AddProject />
        </div>
      </main>
    </div>
  );
}

export default Admin;