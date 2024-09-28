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
    try {
      await axios.put(`http://localhost:3000/blogs/${editBlog.id}`, editBlog);
      setEditBlog(null); // Salir del modo edición
      fetchBlogs(); // Refrescar la lista
    } catch (error) {
      console.error('Error al actualizar el blog:', error);
    }
  };

  return (
    <div>
      {editBlog ? (
        <form onSubmit={handleUpdate}>
          <input type="text" name="titulo" value={editBlog.titulo} onChange={(e) => setEditBlog({ ...editBlog, titulo: e.target.value })} />
          <textarea name="resumen" value={editBlog.resumen} onChange={(e) => setEditBlog({ ...editBlog, resumen: e.target.value })} />
          <textarea name="parrafo" value={editBlog.parrafo} onChange={(e) => setEditBlog({ ...editBlog, parrafo: e.target.value })} />
          <button type="submit">Actualizar Blog</button>
          <button type="button" onClick={() => setEditBlog(null)}>Cancelar</button>
        </form>
      ) : (
        blogs.map(blog => (
          <div key={blog.id}>
            <h3>{blog.titulo}</h3>
            <p>{blog.resumen}</p>
            <button onClick={() => handleDelete(blog.id)}>Eliminar</button>
            <button onClick={() => handleEdit(blog)}>Editar</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;