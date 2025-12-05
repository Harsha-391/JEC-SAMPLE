import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { storage } from '../../firebase'; // Adjust path if needed
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

const ImageUpload = ({ onUploadComplete, label = "Upload Image" }) => {
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setUploading(true);
    // Create a unique file name: images/banner-uniqueID.png
    const storageRef = ref(storage, `images/banner-${uuidv4()}`);
    
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const p = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(p);
      },
      (error) => {
        console.error("Upload error:", error);
        setUploading(false);
        alert("Image upload failed!");
      },
      async () => {
        // Success! Get the URL
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setUploading(false);
        onUploadComplete(downloadURL); // Send URL back to the parent form
      }
    );
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop, 
    accept: {'image/*': []},
    multiple: false
  });

  return (
    <div className="image-upload-container" style={{ margin: '10px 0' }}>
      <label style={{display:'block', marginBottom:'5px', fontWeight:'bold'}}>{label}</label>
      
      <div 
        {...getRootProps()} 
        style={{
          border: '2px dashed #ccc',
          padding: '20px',
          textAlign: 'center',
          cursor: 'pointer',
          backgroundColor: isDragActive ? '#f0f8ff' : '#fafafa',
          borderRadius: '8px'
        }}
      >
        <input {...getInputProps()} />
        {uploading ? (
          <p>Uploading... {Math.round(progress)}%</p>
        ) : (
          <p>Drag & drop an image here, or click to select one</p>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;