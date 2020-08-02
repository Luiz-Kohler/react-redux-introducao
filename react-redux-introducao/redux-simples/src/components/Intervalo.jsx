import "./Intervalo.css";
import React from "react";
import { connect } from "react-redux";

import Card from "./Card";
import { alterarNumeroMinimo, alterarNumeroMaximo } from "../store/actions/numeros";

function Intervalo(props) {
  const { min, max } = props;
  
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínino:</strong>
          <input type="number" value={min} 
            onChange={e => props.alterarMinimo(+e.target.value)} />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max} 
            onChange={e => props.alteraMaximo(+e.target.value)}/>
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
    console.log('$mapStateToProps')
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

function mapDispatchToProp(dispatch) {
  return {
    alterarMinimo(novoNumero) {
      console.log('$mapDispatchToProp')
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action);
      console.log('$mapDispatchToProp -> alterarNumeroMinimo(', novoNumero, ')')
    },
    alteraMaximo(novoNumero){
      console.log('$mapDispatchToProp')
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action);
      console.log('$mapDispatchToProp -> alterarNumeroMaximo(', novoNumero, ')')
    }
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Intervalo);