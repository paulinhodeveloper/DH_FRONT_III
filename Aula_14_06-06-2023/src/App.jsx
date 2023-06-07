import React, { useEffect, useState } from 'react';
import '../src/App.css';
import './App.css';

function App() {
  const [comments, setComments] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar comentários:', error);
      });
  }, []);

  const handleNextComment = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousComment = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const comment = {
      title: 'foo',
      body: newComment,
      userId: 1,
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Novo comentário enviado:', data);
      })
      .catch((error) => {
        console.error('Erro ao enviar comentário:', error);
      });

    setNewComment('');
  };

  return (
    <div className="container">
      <h1>Lista de Comentários</h1>
      <div className="card-container">
        {comments.length > 0 && (
          <div className="card">
            <p>{comments[currentIndex].body}</p>
          </div>
        )}
        <div className="button-container">
          <button
            type="button"
            className="next-button"
            onClick={handlePreviousComment}
            disabled={currentIndex === 0}
          >
            Anterior
          </button>
          <button
            type="button"
            className="next-button"
            onClick={handleNextComment}
            disabled={currentIndex === comments.length - 1}
          >
            Próximo
          </button>
        </div>
      </div>
      <div className="form-container">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="comment">Comentário:</label>
          <textarea
            id="comment"
            name="comment"
            value={newComment}
            onChange={handleCommentChange}
            className="form-input"
          ></textarea>
          <div className="button-container">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;