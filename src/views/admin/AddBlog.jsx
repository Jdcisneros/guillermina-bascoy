import axios from 'axios';
import { useState } from 'react';

const AddBlog = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    resumen: '',
    parrafo: '',
    imagenes: [], // Cambiamos a un array para manejar múltiples imágenes
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
  
    if (name === 'imagenes') {
      setFormData({ ...formData, imagenes: Array.from(files) }); // Convertir FileList a Array
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = new FormData();
    data.append('titulo', formData.titulo);
    data.append('resumen', formData.resumen);
    data.append('parrafo', formData.parrafo);
  
    // Agregar las imágenes al FormData
    for (let i = 0; i < formData.imagenes.length; i++) {
      data.append('imagenes', formData.imagenes[i]);
    }
  
    console.log("Data para enviar:", Array.from(data.entries())); // Verifica que se estén enviando los archivos
    try {
      const response = await axios.post('http://localhost:3000/blogs', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Blog creado:', response.data);
      // Resetear el formulario si es necesario
    } catch (error) {
      console.error('Error al crear el blog:', error);
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
        name="resumen"
        value={formData.resumen}
        onChange={handleChange}
        placeholder="Resumen"
        required
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <textarea
        name="parrafo"
        value={formData.parrafo}
        onChange={handleChange}
        placeholder="Contenido"
        required
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <input
  type="file"
  name="imagenes" // Este nombre debe coincidir con el que se usa en el backend
  onChange={handleChange}
  accept="image/*"
  multiple
  required
/>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Agregar Blog
      </button>
    </form>
  );
};

export default AddBlog;