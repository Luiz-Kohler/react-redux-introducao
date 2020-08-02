import React from 'react';
import { connect } from 'react-redux'

import Card from './Card';

function Soma(props) {

    const {min, max} = props.numeros
    const soma = min + max

    return (
        <Card tittle="Soma dos numeros" Blue>
            <div>
                <span>Resultado </span>
                <strong>{soma}</strong>
            </div>
        </Card>
    );
}

const MapStateToProps = state => {
    return {
        numeros: state.numeros
    }
}

export default connect(MapStateToProps)(Soma);