import React from "react";
import Atividade from "./Atividade";

export default function AtividadeLista(props) {
  return (
    <div className="mt-3">
      {props.atividades.map((item) => (
        <Atividade
          item={item}
          key={item.id}
          exibirAtividade={props.exibirAtividade}
          editarAtividade={props.editarAtividade}
          removerAtividade={props.removerAtividade}
          cancelarAtividade={props.cancelarAtividade}
        />
      ))}
    </div>
  );
}
