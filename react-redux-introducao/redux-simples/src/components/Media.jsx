import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

function Media(props) {

    const { min, max } = props.numeros;
    const media = (min + max) / 2

    return (
        <Card tittle="Media dos numeros" Green>
            <div>
                <span>Resultado </span>
                <strong>{media}</strong>
            </div>
        </Card>
    );
}


const mapStateToProps = state => {
    return {
        numeros: state.numeros
    }
}

export default connect(mapStateToProps)(Media);