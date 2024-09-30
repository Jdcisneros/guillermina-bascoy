import axios from 'axios';
import { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [editProject, setEditProject] = useState(null);
  const [newMainImage, setNewMainImage] = useState(null);
  const [newCollageImages, setNewCollageImages] = useState([]);
  const [collageToRemove, setCollageToRemove] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const response = await axios.get('http://localhost:3000/proyectos');
    setProjects(response.data);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/proyectos/${id}`);
      fetchProjects();
    } catch (error) {
      console.error('Error al eliminar el proyecto:', error);
    }
  };

  const handleEdit = (project) => {
    setEditProject(project);
    setNewMainImage(null);
    setNewCollageImages([]);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    
    if (!editProject.titulo || !editProject.parrafo || !editProject.referencia) {
      console.error('Faltan campos requeridos para actualizar el proyecto');
      return;
    }
    
    const formData = new FormData();
    
    formData.append('titulo', editProject.titulo);
    formData.append('parrafo', editProject.parrafo);
    formData.append('referencia', editProject.referencia);
    
    if (newMainImage) {
      formData.append('imagen_principal', newMainImage);
    } else if (!editProject.imagen_principal) {
      formData.append('imagen_principal', null);
    }
  
    newCollageImages.forEach((image) => {
      formData.append('collage', image);
    });
  
    formData.append('collageToRemove', JSON.stringify(collageToRemove)); // Enviar las imágenes a eliminar
  
    try {
      await axios.put(`http://localhost:3000/proyectos/${editProject.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setEditProject(null);
      setNewCollageImages([]);
      setCollageToRemove([]); // Limpiar después de la actualización
      fetchProjects();
    } catch (error) {
      console.error('Error al actualizar el proyecto:', error);
    }
  };

  
  const handleRemoveImage = (index) => {
    const removedUrl = editProject.collage[index];
    setEditProject((prev) => ({
      ...prev,
      collage: prev.collage.filter((_, i) => i !== index),
    }));
    setCollageToRemove((prev) => [...prev, removedUrl]); // Guardar la URL para eliminar
  };

  const handleCollageImageChange = (e) => {
    const files = Array.from(e.target.files);
    setNewCollageImages((prevImages) => [...prevImages, ...files]);
  };

  const handleRemoveMainImage = () => {
    setEditProject({ ...editProject, imagen_principal: null });
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Proyectos</h1>
      {editProject ? (
        <form onSubmit={handleUpdate} className="space-y-4 bg-white shadow-md rounded-md p-4 mb-5">
          <input
            type="text"
            name="titulo"
            value={editProject.titulo}
            onChange={(e) => setEditProject({ ...editProject, titulo: e.target.value })}
            placeholder="Título"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="parrafo"
            value={editProject.parrafo}
            onChange={(e) => setEditProject({ ...editProject, parrafo: e.target.value })}
            placeholder="Descripción"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="referencia"
            value={editProject.referencia}
            onChange={(e) => setEditProject({ ...editProject, referencia: e.target.value })}
            placeholder="Referencia"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Mostrar y eliminar imagen principal */}
        {editProject.imagen_principal && (
  <div className="flex items-center">
    <img
      src={editProject.imagen_principal}
      alt="Imagen principal"
      className="w-32 h-32 object-cover rounded-md mr-2"
    />
    <button
      type="button"
      onClick={handleRemoveMainImage}
      className="bg-red-500 text-white font-bold py-1 px-2 rounded hover:bg-red-700 transition duration-300 ease-in-out"
    >
      Eliminar Imagen Principal
    </button>
  </div>
)}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNewMainImage(e.target.files[0])}
            className="mt-2"
          />

          {/* Mostrar y eliminar imágenes del collage */}
          {editProject.collage && editProject.collage.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Collage</h3>
              <div className="flex flex-wrap gap-2">
                {editProject.collage.map((imagen, index) => (
                  <div key={index} className="relative">
                    <img
                      src={imagen}
                      alt={`Collage ${index + 1}`}
                      className="w-32 h-32 object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-0 right-0 bg-red-500 text-white font-bold text-xs py-1 px-2 rounded hover:bg-red-700 transition duration-300 ease-in-out"
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Input para agregar nuevas imágenes al collage */}
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleCollageImageChange}
            className="mt-2"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Actualizar Proyecto
          </button>
          <button
            type="button"
            onClick={() => setEditProject(null)}
            className="w-full bg-gray-500 text-white font-bold py-2 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            Cancelar
          </button>
        </form>
      ) : (
        projects.map(project => (
          <div key={project.id} className="p-4 bg-white shadow-md rounded-md mb-4 border border-gray-200">
            <h2 className="text-xl font-semibold">{project.titulo}</h2>
            <p className="text-gray-700 mb-2">{project.parrafo}</p>
            <p className="text-gray-600 mb-2">Referencia: {project.referencia}</p>

            {/* Visualización de la imagen principal */}
            <img
              src={project.imagen_principal}
              alt={`Imagen principal de ${project.titulo}`}
              className="w-full h-48 object-cover rounded-md mb-2"
            />

            {/* Visualización del collage */}
            {project.collage && project.collage.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {project.collage.map((imagen, index) => (
                  <img
                    key={index}
                    src={imagen}
                    alt={`Collage de ${project.titulo}`}
                    className="w-32 h-32 object-cover rounded-md"
                  />
                ))}
              </div>
            )}

            {/* Visualización de fechas */}
            <p className="text-gray-500 mt-2">Creado: {new Date(project.createdAt).toLocaleDateString()}</p>
            <p className="text-gray-500">Actualizado: {new Date(project.updatedAt).toLocaleDateString()}</p>

            <div className="mt-4 flex justify-end space-x-2">
              <button
                className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300 ease-in-out"
                onClick={() => handleDelete(project.id)}
              >
                Eliminar
              </button>
              <button
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
                onClick={() => handleEdit(project)}
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

export default Projects;