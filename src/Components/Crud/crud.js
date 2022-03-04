import React from "react";
import "./crud.css";

class Crud extends React.Component {
  state = {
    registro: [],
    id: 0,
    data: { nome: "", cognome: "", id: 0 },
  };

  CambioEntrata = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.id]: e.target.value,
      },
    });
  };

  Aggiungi = () => {
    if (this.state.data.id === this.state.id) {
      this.setState({
        registro: [...this.state.registro, this.state.data],
        data: { nome: "", cognome: "", id: this.state.id + 1 },
        id: this.state.id + 1,
      });
    } else {
      const tmp = this.state.registro.map((e) => {
        return e.id === this.state.data.id ? this.state.data : e;
      });
      this.setState({
        registro: tmp,
        data: { nome: "", cognome: "", id: this.state.id },
      });
    }
    document.getElementById("nome")?.focus();
  };

  Delete = (index) => {
    this.setState({
      registro: this.state.registro.filter((e, i) => i !== index),
    });
  };

  render() {
    const { nome, cognome } = this.state.data;
    const { registro } = this.state;
    return (
      <>
        <div className="input">
          <span>Nome: </span>
          <input id="nome" value={nome} onChange={this.CambioEntrata} />
        </div>
        <div className="input">
          <span>Cognome: </span>
          <input id="cognome" value={cognome} onChange={this.CambioEntrata} />
        </div>
        <button onClick={this.Aggiungi}>AGGIUNGI</button>
        <hr />
        <div>
          Registro
          <ol>
            {registro.map((e, i) => (
              <li key={i}>
                {e.nome} {e.cognome} {e.id}
                <button
                  onClick={() =>
                    this.setState({ data: this.state.registro[i] })
                  }
                >
                  Edit
                </button>
                <button onClick={() => this.Delete(i)}> X </button>
              </li>
            ))}
          </ol>
        </div>
      </>
    );
  }
}

export default Crud;
