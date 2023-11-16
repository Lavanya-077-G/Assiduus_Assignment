import React, { useState } from 'react';
import Modal from 'react-modal';

const FileUploadModal = ({setIsModalOpen, isModalOpen}) => {

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFileUpload = (event) => {
    console.log('File uploaded:', event.target.files[0]);
    closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="File Upload Modal"
      >
        <h2>File Upload</h2>
        <input type="file" onChange={handleFileUpload} />
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default FileUploadModal;
