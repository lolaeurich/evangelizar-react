import React, { useContext, useState, useEffect } from 'react';
import { TestemunhosContext } from "../context/testemunhos.jsx"
import TestemunhoUnico from "../testemunhoCard/testemunhoUnico.jsx"
import { useNavigate } from "react-router-dom";
import "/src/components/velas/listVelas/styles.css";
import blueArrow from "../../../assets/areaLogada/blue-arrow.png";
import velaCinza from "../../../assets/Home/vela-cinza.png";

import "../../velas/listVelas/styles.css"

const ListaTestemunhos = () => {
    const { testemunhos } = useContext(TestemunhosContext);
    const [hasTestemunhos, setHasTestemunhos] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const navigate = useNavigate();

    const routeChange = () => { 
        let path = `/TodosOsTestemunhos`; 
        navigate(path);
    }

    useEffect(() => {
        setHasTestemunhos(testemunhos.length > 0);
    }, [testemunhos]);

    useEffect(() => {
        const testemunhoUnicoElements = document.querySelectorAll('.vela-unica');
        setShowButton(hasTestemunhos && testemunhoUnicoElements && testemunhoUnicoElements.length > 0);
    }, [hasTestemunhos]);

    return (
        <>
            <div className="acender-velalist" style={{marginBottom: "160PX"}}>
                {/* {velas.map(vela => <VelaUnica vela={vela} key={vela.id}/>)} */}
                <h3 className="vela2-titulo">Meus testemunhos</h3>
                {hasTestemunhos ? (
                    <div className='listar-duas' style={{paddingTop: "530px"}}>
                        {testemunhos.slice(0, 2).map(testemunho => <TestemunhoUnico testemunho={testemunho} key={testemunho.id} className="vela-unica" />)}
                        <button className="btn-velalist" onClick={routeChange}>
                        <span>Ver todos os testemunhos</span>
                        <img className="arrow2" alt="" src={blueArrow} />
                    </button>
                    </div>
                    
                ) : (
                    <div className="gray-square-container" style={{marginTop: "350PX"}}>
                        <img alt='vela-cinza' className='vela-cinza' src={velaCinza}/>
                        <p className="no-velas-text">Você ainda não tem testemunhos cadastrados.</p>
                        <p className='no-velas-text2'>Utilize o formulário ao lado para acender uma nova vela. Você pode acender quantas velas for necessário, ficarão todas listadas aqui.</p>    
                    </div>
                )}
            
                {/* {showButton && (
                    <button className="btn-velalist" onClick={routeChange}>
                        <span>Ver todas as minhas velas</span>
                        <img className="arrow2" alt="" src={blueArrow} />
                    </button>
                )} */}

            </div>
        </>
    )
}

export default ListaTestemunhos;
