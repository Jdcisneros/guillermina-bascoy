import axios from 'axios';
import { useState } from 'react';

const AddProject = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    parrafo: '',
    referencia: '',
    imagen_principal: null,
    collage: [],
  });
  const [collagePreviews, setCollagePreviews] = useState([]); // Estado para las vistas previas

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    if (name === 'collage') {
      const files = Array.from(e.target.files);
      setFormData({ ...formData, collage: files });
      
      // Crear URLs para las vistas previas
      setCollagePreviews(files.map(file => URL.createObjectURL(file)));
    } else if (name === 'imagen_principal') {
      const file = e.target.files[0];
      setFormData({ ...formData, imagen_principal: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('titulo', formData.titulo);
    data.append('parrafo', formData.parrafo);
    data.append('referencia', formData.referencia);
    data.append('imagen_principal', formData.imagen_principal);

    // Agregar cada imagen del collage al FormData
    formData.collage.forEach((file) => {
      data.append('collage', file);
    });

    console.log("Data para enviar:", Array.from(data.entries())); // Verifica que se estén enviando los archivos

    try {
      const response = await axios.post('http://localhost:3000/proyectos', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Proyecto creado:', response.data);
      // Resetear el formulario si es necesario
      setFormData({
        titulo: '',
        parrafo: '',
        referencia: '',
        imagen_principal: null,
        collage: [],
      });
      setCollagePreviews([]); // Limpiar vistas previas
    } catch (error) {
      console.error('Error al crear el proyecto:', error);
    }
  };

  console.log("collage",collagePreviews);
  

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow-md rounded-md">
      <input
        type="text"
        name="titulo"
        value={formData.titulo}
        onChange={handleChange}
        placeholder="Título"
        required
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <textarea
        name="parrafo"
        value={formData.parrafo}
        onChange={handleChange}
        placeholder="Descripción"
        required
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <input
        type="file"
        name="imagen_principal"
        onChange={handleFileChange}
        accept="image/*"
        required
        className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <input
        type="text"
        name="referencia"
        value={formData.referencia}
        onChange={handleChange}
        placeholder="Referencia"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <input
        type="file"
        name="collage"
        onChange={handleFileChange}
        multiple
        accept="image/*"
        required
        className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Vista previa de las imágenes del collage */}
      <div className="flex flex-wrap gap-2 mt-4">
        {collagePreviews.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Vista previa ${index + 1}`}
            className="w-20 h-20 object-cover rounded-md"
          />
        ))}
      </div>
      
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Agregar Proyecto
      </button>
    </form>
  );
};

export default AddProject;