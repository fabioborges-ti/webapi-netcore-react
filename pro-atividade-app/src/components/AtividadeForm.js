import { useEffect, useState } from "react";

const atividadeInicial = {
  id: 0,
  titulo: "",
  prioridade: 0,
  descricao: "",
};

export default function AtividadeForm(props) {
  const [atividade, setAtividade] = useState(atividadeAtual());

  useEffect(() => {
    if (props.atividade.id !== 0) {
      setAtividade(props.atividade);
    }
  }, [props.atividade]);

  function atividadeAtual() {
    if (props.atividade.id !== 0) {
      return props.atividade;
    } else {
      return atividadeInicial;
    }
  }

  const inputTextHandler = (e) => {
    const { name, value } = e.target;

    setAtividade({ ...atividade, [name]: value });
  };

  const cancelarHandler = (e) => {
    e.preventDefault();

    props.cancelarAtividade();

    setAtividade(atividadeInicial);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (props.atividade.id !== 0) {
      props.editarAtividade(atividade);
    } else {
      props.adicionarAtividade(atividade);
    }

    setAtividade(atividadeInicial);
  };

  return (
    <div>
      <h1>Atividade {atividade.id === 0 ? "" : atividade.id}</h1>
      <hr />
      <form className="row g-3" onSubmit={submitHandler}>
        <div className="col-md-6">
          <label htmlFor="titulo" className="form-label">
            Título
          </label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            className="form-control shadow-sm"
            placeholder="Título"
            value={atividade.titulo}
            onChange={inputTextHandler}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="prioridade" className="form-label">
            Prioridade
          </label>
          <select
            id="prioridade"
            name="prioridade"
            className="form-select"
            value={atividade.prioridade}
            onChange={inputTextHandler}
          >
            <option defaultValue="0">Selecionar</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>
        <div className="col-md-12">
          <label htmlFor="descricao" className="form-label">
            Descrição
          </label>
          <textarea
            id="descricao"
            name="descricao"
            rows="5"
            className="form-control shadow-sm"
            placeholder="Descrição"
            value={atividade.descricao}
            onChange={inputTextHandler}
          ></textarea>
        </div>
        <div className="col-12">
          {atividade.id === 0 ? (
            <button
              className="btn btn-outline-secondary shadow-sm"
              type="submit"
            >
              <i className="fas fa-plus me-2"></i> Atividade
            </button>
          ) : (
            <>
              <button
                className="btn btn-outline-success shadow-sm me-2"
                type="submit"
              >
                <i className="fas fa-plus me-2"></i> Salvar
              </button>
              <button
                className="btn btn-outline-warning shadow-sm"
                onClick={cancelarHandler}
              >
                <i className="fas fa-plus me-2"></i>
                Cancelar
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
