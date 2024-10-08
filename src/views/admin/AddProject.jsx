import axios from 'axios';
import { useState } from 'react';

const AddProject = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    parrafo: '',
    referencia: '',
    imagen_principal: null, // Para la imagen principal
    collage: [], // Para las imágenes del collage
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    if (name === 'collage') {
      setFormData({ ...formData, collage: Array.from(e.target.files) });
    } else if (name === 'imagen_principal') {
      setFormData({ ...formData, imagen_principal: e.target.files[0] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('titulo', formData.titulo);
    data.append('parrafo', formData.parrafo);
    data.append('referencia', formData.referencia);
    data.append('imagen_principal', formData.imagen_principal); // Imagen principal

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
    } catch (error) {
      console.error('Error al crear el proyecto:', error);
    }
  };

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