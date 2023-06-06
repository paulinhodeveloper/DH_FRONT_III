import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('O comando foi carregado após 2 segundos...');
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    console.log('O componente foi atualizado...');
  });

  const handleCancel = () => {
    alert('Pedido cancelado...');
  };

  return (
    <>
      <h2>Ciclo de Vida (Hook: useEffect())</h2>
      <button onClick={handleCancel}>Cancelar Pedido</button>
    </>
  );
}

export default App;
