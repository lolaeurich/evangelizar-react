import React, { useContext, useState } from "react";
import FormularioTestemunho from "../formulario/formularioTestemunho.jsx";
import SegundoPopUp from "../editPopUp/segundoPopUp/segundoPopUp.jsx";
import { TestemunhosContext } from "../context/testemunhos.jsx";
import chat from "../../../assets/areaLogada/chat.png"
import caneta from "../../../assets/MinhasVelas/caneta.png";
import trash from "../../../assets/MinhasVelas/trash.png";

const TestemunhoUnico = ({ testemunho }) => {
    const { cidade, titulo, motivo_descricao } = testemunho;
    const { editarTestemunho, excluirTestemunho } = useContext(TestemunhosContext);

    const [showEditPopup, setShowEditPopup] = useState(false);
    const [showNextPopup, setShowNextPopup] = useState(false);
    const [switchState, setSwitchState] = useState(false); // Estado do switch

    const handleEditTestemunho = () => {
        setShowEditPopup(true);
    };

    const handleCloseEditPopup = () => {
        setShowEditPopup(false);
    };

    const handleNextPopup = () => {
        setShowNextPopup(true);
        setShowEditPopup(false); // Certifica-se de que a outra popup esteja fechada
    };

    const handleCloseNextPopup = () => {
        setShowNextPopup(false);
    };

    const handleSaveChanges = (testemunhoAtualizado) => {
        editarTestemunho(testemunhoAtualizado);
        handleCloseEditPopup(); // Fecha a popup de edição
        handleNextPopup(); // Abre a próxima popup
    };

    const handleDeleteTestemunho = () => {
        excluirTestemunho(testemunho.id);
    };

    const toggleSwitch = () => {
        setSwitchState(!switchState);

        // Define o status da vela com base no switch
        const novoStatus = switchState ? 'Inativo' : 'Ativo';

        // Cria uma cópia da vela com o novo status
        const testemunhoAtualizado = {
            ...testemunho,
            status: novoStatus
        };

        // Chama a função para salvar as alterações na vela
        editarTestemunho(testemunhoAtualizado);
    };

    return (
        <>
            {showEditPopup && (
                <div className="overlay">
                    <div className="popup-container">
                        <div className="popup">
                            <button onClick={handleCloseEditPopup} className="fechar-popup">x</button>
                            <FormularioTestemunho
                                testemunho={testemunho}
                                mode={'editar'}
                                onSubmit={handleSaveChanges}
                                inPopup={true} // ou false, dependendo de como você define
                                onClose={handleCloseEditPopup} // Fechar a popup de edição
                            />
                        </div>
                    </div>
                </div>
            )}

            {showNextPopup && (
                <SegundoPopUp callback={handleCloseNextPopup} />
            )}

            <div className={`card-vela ${switchState ? "" : "apagada"}`}>
                <div className={`card-info ${switchState ? "" : "apagada"}`}>
                    <div className={`dados-vela ${switchState ? "" : "apagada"}`}>
                        <img
                            alt=""
                            className={`dados-img ${
                                switchState ? "" : "apagada"
                            }`}
                            src={chat}
                        />
                        <div className="card-titulo" style={{paddingLeft: "15px"}}>
                            <h5
                                className={`card-h5 ${
                                    switchState ? "" : "apagada"
                                }`}
                            >
                                {cidade}
                            </h5>
                            <h4
                                className={`card-h4 ${
                                    switchState ? "" : "apagada"
                                }`}
                            >
                                {titulo}
                            </h4>
                        </div>
                    </div>

                    <p
                        className={`card-motivo ${
                            switchState ? "" : "apagada"
                        }`}
                    >
                        "{motivo_descricao}"
                    </p>

                    <div className="card-acoes" style={{width: "80%"}}>
                        <div className="editar-card" onClick={handleEditTestemunho}>
                            <img
                                alt=""
                                className={`vela-edit-img ${
                                    switchState ? "" : "apagada"
                                }`}
                                src={caneta}
                            />
                            <p
                                className={`vela-edit-p ${
                                    switchState ? "" : "apagada"
                                }`}
                            >
                                Editar Testemunho
                            </p>
                        </div>

                        <div
                            className="excluir-card"
                            onClick={handleDeleteTestemunho}
                        >
                            <img
                                alt=""
                                className={`vela-edit-img ${
                                    switchState ? "" : "apagada"
                                }`}
                                src={trash}
                            />
                            <p
                                className={`vela-edit-p ${
                                    switchState ? "" : "apagada"
                                }`}
                            >
                                Excluir testemunho
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card-switch">
                    <label className="switch">
                        <input
                            id="mySwitch"
                            type="checkbox"
                            checked={switchState}
                            onChange={toggleSwitch}
                        />
                        <span className="slider round"></span>
                    </label>
                    <p
                        className={`legenda-switch ${
                            switchState ? "" : "apagada"
                        }`}
                    >
                        {switchState ? "Acesa" : "Apagada"}
                    </p>
                </div>
            </div>
        </>
    );
};

export default TestemunhoUnico;
