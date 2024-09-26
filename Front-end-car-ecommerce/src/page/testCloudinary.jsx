import { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const [uploadedUrls, setUploadedUrls] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 6) {
      alert('You can only upload up to 6 images.');
      return;
    }
    setImages([...images, ...files]);
  };

  const handleUpload = async () => {
    const urls = [];

    for (const image of images) {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', 'RoddeeCar'); 

      try {

        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/di8f9idgx/image/upload', 
          formData
        );

        const imageUrl = response.data.secure_url;
        urls.push(imageUrl);
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('Failed to upload image');
        return;
      }
    }

    // Log the URLs of uploaded images
    console.log('Uploaded image URLs:', urls);
    setUploadedUrls(urls);
  };

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={handleImageUpload}
        accept="image/*"
        disabled={images.length >= 6}
      />
      <button onClick={handleUpload} className=' bg-lime-200 border border-rose-700'>Upload Images</button>

      <div>
        <h3>Uploaded Image URLs:</h3>
        <ul>
          {uploadedUrls.map((url, index) => (
            <li key={index}>{url}
            <img src={url}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImageUpload;