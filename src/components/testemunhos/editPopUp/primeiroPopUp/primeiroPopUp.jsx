import React from 'react';
import FormularioTestemunho from '../../formulario/formularioTestemunho';

const EditTestemunhoPopup = ({ testemunho, onSave, onClose }) => {
    return (
        <div className="popup-container">
            <div className="popup">
                <button onClick={onClose} className="fechar-popup">x</button>
                <FormularioTestemunho testemunho={testemunho} onClose={clearFormAndClose} />
            </div>
        </div>
    );
}

export default EditTestemunhoPopup;