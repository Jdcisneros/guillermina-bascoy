import axios from 'axios';
import { useEffect, useState } from 'react';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [editBlog, setEditBlog] = useState(null);
  const [newImages, setNewImages] = useState([]); // Para las nuevas imágenes a agregar
  const [imagesToRemove, setImagesToRemove] = useState([]); // Para las imágenes a eliminar
  const [previewImages, setPreviewImages] = useState([]);

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
      fetchBlogs();
    } catch (error) {
      console.error('Error al eliminar el blog:', error);
    }
  };

  const handleEdit = (blog) => {
    setEditBlog({ ...blog, imagenes: [...blog.imagenes] }); // Copia las imágenes
    setNewImages([]); // Reiniciar nuevas imágenes
    setImagesToRemove([]); // Reiniciar imágenes a eliminar
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editBlog.titulo || !editBlog.resumen || !editBlog.parrafo) {
      console.error('Faltan campos requeridos para actualizar el blog');
      return;
    }

    const formData = new FormData();
    formData.append('titulo', editBlog.titulo);
    formData.append('resumen', editBlog.resumen);
    formData.append('parrafo', editBlog.parrafo);

    newImages.forEach((image) => {
      formData.append('imagenes', image);
    });

    formData.append('imagesToRemove', JSON.stringify(imagesToRemove)); // Agregar imágenes a eliminar

    try {
      await axios.put(`http://localhost:3000/blogs/${editBlog.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setEditBlog(null);
      setNewImages([]);
      setImagesToRemove([]); // Limpiar después de la actualización
      fetchBlogs();
    } catch (error) {
      console.error('Error al actualizar el blog:', error);
    }
  };

  const handleChangeImages = (e) => {
    const files = Array.from(e.target.files);
    setNewImages(files); // Guardar archivos nuevos
    setPreviewImages(files.map(file => URL.createObjectURL(file)));
  };

  const handleRemoveImage = (index) => {
    const removedUrl = editBlog.imagenes[index]; // Obtener URL de la imagen que se va a eliminar
    const newImages = editBlog.imagenes.filter((_, i) => i !== index);
    setEditBlog({ ...editBlog, imagenes: newImages });
    setImagesToRemove((prev) => [...prev, removedUrl]); // Guardar URL para eliminar
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Blogs</h1>
      {editBlog ? (
        <form onSubmit={handleUpdate} className="space-y-4 bg-white shadow-md rounded-md p-4 mb-5">
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

          <input
            type="file"
            onChange={handleChangeImages}
            accept="image/*"
            multiple
          />

<div className="flex flex-wrap gap-2 mt-4">
        {previewImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Vista previa ${index + 1}`}
            className="w-20 h-20 object-cover rounded-md"
          />
        ))}
      </div>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {editBlog.imagenes && editBlog.imagenes.map((imagen, index) => (
              <div key={index} className="relative">
                <img
                  src={imagen}
                  alt={`Imagen de ${editBlog.titulo}`}
                  className="w-32 h-32 object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                >
                  X
                </button>
              </div>
            ))}
          </div>

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
          <div key={blog.id} className="p-4 bg-white shadow-md rounded-md mb-4 border border-gray-200">
            <h2 className="text-xl font-semibold">{blog.titulo}</h2>
            <p className="text-gray-700 mb-2">{blog.resumen}</p>
            <p className="text-gray-600 mb-2">{blog.parrafo}</p>

            {blog.imagenes && blog.imagenes.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {blog.imagenes.map((imagen, index) => (
                  <img
                    key={index}
                    src={imagen}
                    alt={`Imagen de ${blog.titulo}`}
                    className="w-32 h-32 object-cover rounded-md"
                  />
                ))}
              </div>
            )}

            <p className="text-gray-500 mt-2">Creado: {new Date(blog.createdAt).toLocaleDateString()}</p>
            <p className="text-gray-500">Actualizado: {new Date(blog.updatedAt).toLocaleDateString()}</p>

            <div className="mt-4 flex justify-end space-x-2">
              <button
                className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300 ease-in-out"
                onClick={() => handleDelete(blog.id)}
              >
                Eliminar
              </button>
              <button
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
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