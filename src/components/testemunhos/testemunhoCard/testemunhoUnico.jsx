import testemunhoCard from "../../../assets/Testemunhos/testemunho.png"
import caneta from "../../../assets/MinhasVelas/caneta.png"
import trash from "../../../assets/MinhasVelas/trash.png"
import "../testemunhoCard/styles.css"
import React, {useContext, useState} from "react";
import FormularioTestemunho from "../formulario/formularioTestemunho.jsx"
import SegundoPopUp from "../editPopUp/segundoPopUp/segundoPopUp.jsx";
import { TestemunhosContext } from "../context/testemunhos.jsx";
import EditVelaPopup from "../../velas/editPopUp/primeroPopUp/primeiroPopUp.jsx";

const TestemunhoUnico = ({testemunho}) => {
    const { cidade, titulo, motivo_descricao} = testemunho

    const [showEditPopup, setShowEditPopup] = useState(false);
    const [showNextPopup, setShowNextPopup] = useState(false);
    const [switchState, setSwitchState] = useState(false); // Estado do switch

    const { editarTestemunho, excluirTestemunho} = useContext(TestemunhosContext)

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

    // const handleSaveChanges = (updatedVela) => {
    //     console.log("Vela editada:", updatedVela);
    //     handleCloseEditPopup();
    //     // Lógica para salvar a vela editada
    // };
    const handleSaveChanges = (testemunho) => {
        handleCloseEditPopup(); // Fecha a popup de edição
        handleNextPopup(); // Abre a próxima popup

        editarTestemunho(testemunho)

        // console.log(velas)
    };

    const handleDeleteTestemunho = () => {
        excluirTestemunho(testemunho.id)
    }

    const toggleSwitch = () => {
        setSwitchState(!switchState);
    };



    return (
        <>
                    {showEditPopup && (
                        <div className="overlay">
                            <div className="popup-container">
                                <div className="popup">
                                    <button onClick={handleCloseEditPopup} className="fechar-popup">x</button>
                                
                                    <FormularioTestemunho testemunho={testemunho} mode={'editar'} onSubmit={handleSaveChanges} />
                                </div>
                            </div>
                        </div>
                    )}

                    {showNextPopup && (
                        <SegundoPopUp callback={handleCloseNextPopup} />
                    )}
                    <div className={`card-vela ${switchState ? '' : 'apagada'}`}>
                <div className={`card-info ${switchState ? '' : 'apagada'}`}>
                    <div className={`dados-vela ${switchState ? '' : 'apagada'}`}>
                        <img alt="" className={`dados-img ${switchState ? '' : 'apagada'}`} src={testemunhoCard} />
                        <div className="card-titulo">
                            <h5 className={`card-h5 ${switchState ? '' : 'apagada'}`}>{cidade}</h5>
                            <h4 className={`card-h4 ${switchState ? '' : 'apagada'}`}>{titulo}</h4>
                        </div>
                    </div>

                    <p className={`card-motivo ${switchState ? '' : 'apagada'}`}>"{motivo_descricao}"</p>

                    <div className="card-acoes">
                        <div className="editar-card" onClick={handleEditTestemunho}>
                            <img alt='' className={`vela-edit-img ${switchState ? '' : 'apagada'}`} src={caneta} />
                            <p className={`vela-edit-p ${switchState ? '' : 'apagada'}`}>Editar testemunho</p>
                        </div>

                        <div className="excluir-card" onClick={handleDeleteTestemunho}>
                            <img alt='' className={`vela-edit-img ${switchState ? '' : 'apagada'}`} src={trash} />
                            <p className={`vela-edit-p ${switchState ? '' : 'apagada'}`}>Excluir testemunho</p>
                        </div>
                    </div>
                </div>

                <div className='card-switch'>
                    <label className="switch">
                        <input id="mySwitch" type="checkbox" checked={switchState} onChange={toggleSwitch} />
                        <span className="slider round"></span>
                    </label>
                    <p className={`legenda-switch ${switchState ? '' : 'apagada'}`}>{switchState ? 'Ativo' : 'Expirado'}</p>
                </div>

            </div>
        </>
    )

}

export default TestemunhoUnico