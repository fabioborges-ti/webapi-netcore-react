import React from "react";

export default function Atividade(props) {
  function prioridadeColor(param) {
    switch (param) {
      case "1":
        return "text-success";
      case "2":
        return "text-secondary";
      case "3":
        return "text-danger";
      default:
        return "Não definido";
    }
  }

  function prioridadeIcon(param) {
    switch (param) {
      case "1":
        return "fa-smile";
      case "2":
        return "fa-meh";
      case "3":
        return "fa-frown";
      default:
        return "Não definido";
    }
  }

  function prioridadeLabel(param) {
    switch (param) {
      case "1":
        return "Baixa";
      case "2":
        return "Normal";
      case "3":
        return "Alta";
      default:
        return "Não definido";
    }
  }

  return (
    <div className="card mb-2 shadow-sm border-secondary">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge rounded-pill bg-secondary me-1">
              {props.item.id}
            </span>
            {props.item.titulo}
          </h5>
          <h6>
            Prioridade:
            <span className={`ms-1 ${prioridadeColor(props.item.prioridade)}`}>
              <i
                className={`me-1 far ${prioridadeIcon(props.item.prioridade)}`}
              ></i>
              {prioridadeLabel(props.item.prioridade)}
            </span>
          </h6>
        </div>
        <p className="card-text">{props.item.descricao}</p>
        <div>
          <div className="d-flex justify-content-end pt-2 m-0">
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => props.exibirAtividade(props.item.id)}
            >
              <i className="fas fa-pen me-2"></i>Editar
            </button>
            <button
              className="btn btn-sm btn-outline-danger ms-2"
              onClick={() => props.removerAtividade(props.item.id)}
            >
              <i className="fas fa-trash me-2"></i>Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
