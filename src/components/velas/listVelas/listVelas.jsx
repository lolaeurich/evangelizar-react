import React, { useContext, useState, useEffect } from 'react';
import { VelasContext } from '../context/velas';
import VelaUnica from '../velaCard/velaUnica';
import { useNavigate } from "react-router-dom";
import "/src/components/velas/listVelas/styles.css";
import blueArrow from "../../../assets/areaLogada/blue-arrow.png";
import velaCinza from "../../../assets/Home/vela-cinza.png";

import "../listVelas/styles.css"

const ListaVelas = () => {
    const { velas } = useContext(VelasContext);
    const [hasVelas, setHasVelas] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const navigate = useNavigate();

    const routeChange = () => { 
        let path = `/TodasAsVelas`; 
        navigate(path);
    }

    useEffect(() => {
        setHasVelas(velas.length > 0);
    }, [velas]);

    useEffect(() => {
        const velaUnicaElements = document.querySelectorAll('.vela-unica');
        setShowButton(hasVelas && velaUnicaElements && velaUnicaElements.length > 0);
    }, [hasVelas]);

    return (
        <>
            <div className="acender-velalist" style={{marginBottom: "160PX"}}>
                <div className='titulo-fixo'>
                    <h3 className="vela2-titulo">Minhas Velas</h3>
                </div>
                {hasVelas ? (
                    <div className='listar-duas'>
                        {velas.slice(0, 2).map(vela => <VelaUnica vela={vela} key={vela.id} className="vela-unica" />)}
                        <button className="btn-velalist" onClick={routeChange}>
                        <span>Ver todas as minhas velas</span>
                        <img className="arrow2" alt="" src={blueArrow} />
                    </button>
                    </div>
                    
                ) : (
                    <div className="gray-square-container">
                        <img alt='vela-cinza' className='vela-cinza' src={velaCinza}/>
                        <p className="no-velas-text">Você ainda não tem velas acesas.</p>
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

export default ListaVelas;
