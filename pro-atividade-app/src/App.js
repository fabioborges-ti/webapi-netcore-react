import { useEffect, useState } from "react";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";
import "./index.css";

function App() {
  const [index, setIndex] = useState(0);
  const [atividade, setAtividade] = useState({ id: 0 });
  const [atividades, setAtividades] = useState([]);

  useEffect(() => {
    atividades.length <= 0
      ? setIndex(1)
      : setIndex(
          Math.max.apply(
            Math,
            atividades.map((item) => item.id)
          ) + 1
        );
  }, [atividades]);

  function adicionarAtividade(obj) {
    setAtividades([
      ...atividades,
      {
        ...obj,
        id: index,
      },
    ]);
  }

  function exibirAtividade(id) {
    const atividade = atividades.filter((item) => item.id === id);
    setAtividade(atividade[0]);
  }

  function editarAtividade(obj) {
    setAtividades(atividades.map((item) => (item.id === obj.id ? obj : item)));
    setAtividade({ id: 0 });
  }

  function removerAtividade(id) {
    const atividadesFiltradas = atividades.filter((item) => item.id !== id);
    setAtividades([...atividadesFiltradas]);
  }

  function cancelarAtividade() {
    setAtividade({ id: 0 });
  }

  return (
    <div>
      <AtividadeForm
        atividade={atividade}
        atividades={atividades}
        adicionarAtividade={adicionarAtividade}
        editarAtividade={editarAtividade}
        cancelarAtividade={cancelarAtividade}
      />
      <AtividadeLista
        atividades={atividades}
        exibirAtividade={exibirAtividade}
        removerAtividade={removerAtividade}
      />
    </div>
  );
}

export default App;
