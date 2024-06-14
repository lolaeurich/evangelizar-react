import check from "../../../../assets/MinhasVelas/check.png";
import React from "react";

const SegundoPopUpTest = ({callback}) => {

    return (
        <div className="next-popup-container">
            <button onClick={callback} className="fechar-vela">x</button>
            <div className="next-popup">
                <button onClick={callback} className="fechar-vela2">
                    x
                </button>
                <img alt="" className="check-icon" src={check}/>
                <h3 className="check-h3">Testemunho alterado com sucesso!</h3>
                <p className="check-p">“Lorem ipsum dolor sit amet, consectetur adipiscing er sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incidid tempor incididunt...”</p>
                <button className="btn-vela24">
                    <span>Excluir testemunho</span>
                </button>

            </div>
        </div>
    )
}

export default SegundoPopUpTest;