import velaCard from "../../../assets/areaLogada/vela.png"
import caneta from "../../../assets/MinhasVelas/caneta.png"
import trash from "../../../assets/MinhasVelas/trash.png"
import "../velaCard/styles.css"
import React, {useContext, useState} from "react";
import FormularioVela from "../formulario/formularioVela.jsx";
import SegundoPopUp from "../editPopUp/segundoPopUp/segundoPopUp.jsx";
import {VelasContext} from "../context/velas.jsx";
import EditVelaPopup from "../editPopUp/primeroPopUp/primeiroPopUp.jsx"

const VelaUnica = ({vela}) => {
    const { cidade, titulo, motivo_descricao} = vela

    const [showEditPopup, setShowEditPopup] = useState(false);
    const [showNextPopup, setShowNextPopup] = useState(false);
    const [switchState, setSwitchState] = useState(false); // Estado do switch

    const { editarVela, excluirVela} = useContext(VelasContext)

    const handleEditVela = () => {
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
    const handleSaveChanges = (vela) => {
        handleCloseEditPopup(); // Fecha a popup de edição
        handleNextPopup(); // Abre a próxima popup

        editarVela(vela)

        // console.log(velas)
    };

    const handleDeleteVela = () => {
        excluirVela(vela.id)
    }

    const toggleSwitch = () => {
        setSwitchState(!switchState);
    
        // Define o status da vela com base no switch
        const novoStatus = switchState ? 'Inativo' : 'Ativo';
    
        // Cria uma cópia da vela com o novo status
        const velaAtualizada = {
            ...vela,
            status: novoStatus
        };
    
        // Chama a função para salvar as alterações na vela
        editarVela(velaAtualizada);
    };


    return (
        <>
                    {showEditPopup && (
                        <div className="overlay">
                            <div className="popup-container">
                                <div className="popup">
                                    <button onClick={handleCloseEditPopup} className="fechar-popup">x</button>
                                    {/* <h2>Editar Vela</h2> */}
                                    <FormularioVela vela={vela} mode={'editar'} onSubmit={handleSaveChanges} />
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
                        <img alt="" className={`dados-img ${switchState ? '' : 'apagada'}`} src={velaCard} />
                        <div className="card-titulo">
                            <h5 className={`card-h5 ${switchState ? '' : 'apagada'}`}>{cidade}</h5>
                            <h4 className={`card-h4 ${switchState ? '' : 'apagada'}`}>{titulo}</h4>
                        </div>
                    </div>

                    <p className={`card-motivo ${switchState ? '' : 'apagada'}`}>"{motivo_descricao}"</p>

                    <div className="card-acoes">
                        <div className="editar-card" onClick={handleEditVela}>
                            <img alt='' className={`vela-edit-img ${switchState ? '' : 'apagada'}`} src={caneta} />
                            <p className={`vela-edit-p ${switchState ? '' : 'apagada'}`}>Editar vela</p>
                        </div>

                        <div className="excluir-card" onClick={handleDeleteVela}>
                            <img alt='' className={`vela-edit-img ${switchState ? '' : 'apagada'}`} src={trash} />
                            <p className={`vela-edit-p ${switchState ? '' : 'apagada'}`}>Excluir vela</p>
                        </div>
                    </div>
                </div>

                <div className='card-switch'>
                    <label className="switch">
                        <input id="mySwitch" type="checkbox" checked={switchState} onChange={toggleSwitch} />
                        <span className="slider round"></span>
                    </label>
                    <p className={`legenda-switch ${switchState ? '' : 'apagada'}`}>{switchState ? 'Acesa' : 'Apagada'}</p>
                </div>

            </div>
        </>
    )

}

export default VelaUnica