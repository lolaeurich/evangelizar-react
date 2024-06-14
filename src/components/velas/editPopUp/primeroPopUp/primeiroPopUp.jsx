import React from 'react';
import FormularioVela from '../../formulario/formularioVela';

const EditVelaPopup = ({ vela, onSave, onClose }) => {
    const formularioVelaStyles = {
        // Adicione estilos inline aqui conforme necessário
        padding: '20px',
        backgroundColor: '#f0f0f0',
        // Outros estilos...
    };

    return (
        <div className="popup-container">
            <div className="popup">
                <button onClick={onClose} className="fechar-popup">x</button>
                {/* <h2>Editar Vela</h2> */}
                <div style={{ width: "500px" }}>
                    {/* Aqui adicionamos a prop inPopup com o valor true */}
                    <FormularioVela vela={vela} mode={'editar'} onSubmit={onSave} inPopup={true} />
                </div>
            </div>
        </div>
    );
}

export default EditVelaPopup;
