import React from 'react';
import spinner from '../../assets/spinner.gif';

function Spinner() {
    return (
        <div>
            <img
                src={spinner}
                style={{ width: '150px', margin: 'auto', display: 'block'}}
                alt='loading'
            />
        </div>
    )
}

export default Spinner;
