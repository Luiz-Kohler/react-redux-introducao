import React from 'react';
import {connect} from 'react-redux';

import Card from './Card';

function Sorteio(props) {

    const {min, max} = props.numeros

    const numeroAleatorio = parseInt(Math.random() * (max - min + 1))

    return (
        <Card tittle="Sorteio" Pink>
            <div>
                <span>Resultado </span>
                <strong>{numeroAleatorio}</strong>
            </div>
        </Card>
    );
}

const MapStateToProps = state => {
    return{
        numeros: state.numeros
    }
}

export default connect(MapStateToProps)(Sorteio);