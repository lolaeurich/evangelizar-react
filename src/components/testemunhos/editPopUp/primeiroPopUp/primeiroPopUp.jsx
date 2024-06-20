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
                        mode={'editar'}
                        onSubmit={onSave} // Agora estamos passando onSave diretamente
                        inPopup={true} // ou false, dependendo de como você define
                        onClose={onClose} // Fechar a popup
                    />
                </div>
            </div>
        </div>
    );
}

export default EditTestemunhoPopup;
