import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../Modal/Modal';

function APIData() {
  const [data, setData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <div>
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
          <button onClick={() => setModalOpen(true)}>Open Modal</button>
          <Modal isOpen={modalOpen} closeModal={closeModal} />
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default APIData;
