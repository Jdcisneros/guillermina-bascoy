import axios from 'axios';
import { useEffect, useState } from 'react';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [editBlog, setEditBlog] = useState(null); // Para manejar la edición

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = await axios.get('http://localhost:3000/blogs');
    setBlogs(response.data);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/blogs/${id}`);
      fetchBlogs(); // Refrescar la lista
    } catch (error) {
      console.error('Error al eliminar el blog:', error);
    }
  };

  const handleEdit = (blog) => {
    setEditBlog(blog); // Establecer el blog en modo edición
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
  
    // Validar que no haya campos vacíos
    if (!editBlog.titulo || !editBlog.resumen || !editBlog.parrafo) {
      console.error('Faltan campos requeridos para actualizar el blog');
      return;
    }
  
    try {
      await axios.put(`http://localhost:3000/blogs/${editBlog.id}`, editBlog);
      setEditBlog(null);
      fetchBlogs();
    } catch (error) {
      console.error('Error al actualizar el blog:', error);
    }
  };

  return (
    <div className="">
      {editBlog ? (
        <form onSubmit={handleUpdate} className="space-y-4 bg-white shadow-md rounded-md p-4">
          <input
            type="text"
            name="titulo"
            value={editBlog.titulo}
            onChange={(e) => setEditBlog({ ...editBlog, titulo: e.target.value })}
            placeholder="Título"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <textarea
            name="resumen"
            value={editBlog.resumen}
            onChange={(e) => setEditBlog({ ...editBlog, resumen: e.target.value })}
            placeholder="Resumen"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <textarea
            name="parrafo"
            value={editBlog.parrafo}
            onChange={(e) => setEditBlog({ ...editBlog, parrafo: e.target.value })}
            placeholder="Contenido"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Actualizar Blog
          </button>
          <button
            type="button"
            onClick={() => setEditBlog(null)}
            className="w-full bg-gray-500 text-white font-bold py-2 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            Cancelar
          </button>
        </form>
      ) : (
        blogs.map(blog => (
          <div key={blog.id} className="p-3 bg-white shadow-md rounded-md mb-4">
            <h2 className="text-xl font-semibold">Título: {blog.titulo}</h2>
            <p className="text-gray-700">Resumen: {blog.resumen}</p>
            <div className="mt-2">
              <button
                className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300 ease-in-out"
                onClick={() => handleDelete(blog.id)}
              >
                Eliminar
              </button>
              <button
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out ml-2"
                onClick={() => handleEdit(blog)}
              >
                Editar
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;