import { useState } from 'react';
import './styles.css';

function App() {
  const [disciplina, setDisciplina] = useState('');
  const [nota, setNota] = useState('');
  const [tabela, setTabela] = useState([
    { disciplina: 'Banco de Dados', alunos: 0, media: 0 },
    { disciplina: 'Desenvolvimento Frontend', alunos: 0, media: 0 },
    { disciplina: 'Desenvolvimento Backend', alunos: 0, media: 0 },
  ]);
  const [isSalvarDisabled, setIsSalvarDisabled] = useState(true);
  const [mensagemErro, setMensagemErro] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const notaNum = parseFloat(nota);

    if (!disciplina || isNaN(notaNum) || notaNum < 0 || notaNum > 10) {
      setMensagemErro('Por favor, preencha corretamente os campos.');
      return;
    }

    setMensagemErro('');

    const novaTabela = tabela.map(item => {
      if (item.disciplina === disciplina) {
        const novaMedia = (item.media * item.alunos + notaNum) / (item.alunos + 1);
        return { ...item, alunos: item.alunos + 1, media: novaMedia };
      }
      return item;
    });

    setTabela(novaTabela);
    setDisciplina('');
    setNota('');
  }

  function handleDisciplinaChange(event) {
    setDisciplina(event.target.value);
    setIsSalvarDisabled(false);
    setMensagemErro('');
  }

  function handleNotaChange(event) {
    setNota(event.target.value);
    setIsSalvarDisabled(false);
    setMensagemErro('');
  }

  return (
    <div className="container">
      <h1>Média de Alunos por Disciplina</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container_input">
          <select value={disciplina} onChange={handleDisciplinaChange}>
            <option disabled value="">
              Selecione uma disciplina
            </option>
            {tabela.map(item => (
              <option key={item.disciplina} value={item.disciplina}>
                {item.disciplina}
              </option>
            ))}
          </select>
          <input type="text" value={nota} onChange={handleNotaChange} placeholder="Digite a nota" />
        </div>
        <input type="submit" value="Salvar" disabled={isSalvarDisabled} />
        {mensagemErro && <p className="error">{mensagemErro}</p>}
      </form>

      <div className="container">
        <table border="1" className="line_title">
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>Quantidade de Alunos</th>
              <th>Média das notas dos alunos</th>
            </tr>
          </thead>
          <tbody>
            {tabela.map(item => (
              <tr key={item.disciplina}>
                <td>{item.disciplina}</td>
                <td>{item.alunos}</td>
                <td>{item.media.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;