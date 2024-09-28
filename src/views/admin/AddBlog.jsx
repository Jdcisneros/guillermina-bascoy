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

    // Si es un input de tipo archivo, actualizamos las imágenes
    if (name === 'imagenes') {
      setFormData({ ...formData, imagenes: files });
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

    try {
      const response = await axios.post('http://localhost:3000/blogs', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Blog creado:', response.data);
      
      // Resetear el formulario si es necesario
      setFormData({
        titulo: '',
        resumen: '',
        parrafo: '',
        imagenes: [],
      });
    } catch (error) {
      console.error('Error al crear el blog:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} placeholder="Título" required />
      <textarea name="resumen" value={formData.resumen} onChange={handleChange} placeholder="Resumen" required />
      <textarea name="parrafo" value={formData.parrafo} onChange={handleChange} placeholder="Contenido" required />
      <input type="file" name="imagenes" onChange={handleChange} accept="image/*" multiple required />
      <button type="submit">Agregar Blog</button>
    </form>
  );
};

export default AddBlog;