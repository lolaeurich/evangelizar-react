import React from 'react';
import FormularioTestemunho from '../../formulario/formularioTestemunho';

const EditTestemunhoPopup = ({ testemunho, onSave, onClose }) => {
    return (
        <div className="popup-container">
            <div className="popup">
                <button onClick={onClose} className="fechar-popup">x</button>
                <div style={{ width: "500px" }}>
                    {/* Aqui adicionamos a prop inPopup com o valor true */}
                    <FormularioTestemunho
                        testemunho={testemunho}
                        mode={mode}
                        onSubmit={handleSubmit}
                        inPopup={true} // ou false, dependendo de como você define
                        onClose={handleClose} // verifique se handleClose é uma função válida
                    />
                </div>
                </div>
        </div>
    );
}

export default EditTestemunhoPopup;