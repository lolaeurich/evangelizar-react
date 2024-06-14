import React from 'react';
import FormularioTestemunho from '../../formulario/formularioTestemunho';

const EditTestemunhoPopup = ({ testemunho, onSave, onClose }) => {
    return (
        <div className="popup-container">
            <div className="popup">
                <button onClick={onClose} className="fechar-popup">x</button>
                <h2>Editar Testemunho</h2>
                <FormularioTestemunho vela={testemunho} mode={'editar'} onSubmit={onSave} />
            </div>
        </div>
    );
}

export default EditTestemunhoPopup;