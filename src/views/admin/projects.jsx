import axios from 'axios';
import { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [editProject, setEditProject] = useState(null);

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
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!editProject.titulo || !editProject.parrafo || !editProject.referencia) {
      console.error('Faltan campos requeridos para actualizar el proyecto');
      return;
    }
    console.log(editProject.id)
    try {
      await axios.put(`http://localhost:3000/projects/${editProject.id}`, editProject);
      setEditProject(null);
      fetchProjects();
    } catch (error) {
      console.error('Error al actualizar el proyecto:', error);
    }
  };

  const handleRemoveCollageImage = (index) => {
    const newCollage = editProject.collage.filter((_, i) => i !== index);
    setEditProject({ ...editProject, collage: newCollage });
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

          {/* Mostrar la imagen principal */}
          <div>
            <h3>Imagen Principal</h3>
            <img
              src={editProject.imagen_principal}
              alt={`Imagen principal de ${editProject.titulo}`}
              className="w-full h-48 object-cover rounded-md mb-2"
            />
          </div>

          {/* Mostrar y permitir la eliminación de las imágenes del collage */}
          <h3>Collage</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {editProject.collage && editProject.collage.map((imagen, index) => (
              <div key={index} className="relative">
                <img
                  src={imagen}
                  alt={`Collage de ${editProject.titulo}`}
                  className="w-32 h-32 object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveCollageImage(index)}
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

            <img
              src={project.imagen_principal}
              alt={`Imagen principal de ${project.titulo}`}
              className="w-full h-48 object-cover rounded-md mb-2"
            />

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