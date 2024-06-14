import React, { useContext, useState } from 'react'
import { VelasContext } from '../context/velas'
import VelaUnica from '../velaCard/velaUnica'
import { useNavigate } from "react-router-dom";
import "/src/components/velas/listVelas/styles.css"
import blueArrow from "../../../assets/areaLogada/blue-arrow.png"
import velaCinza from "../../../assets/Home/vela-cinza.png"

const ListaTodasAsVelas = () => {
    const { velas = [] } = useContext(VelasContext); // Inicializando velas como um array vazio caso não haja dados disponíveis
    const [hasVelas, setHasVelas] = useState(velas.length > 0); // Estado para verificar se há velas
    
    let navigate = useNavigate(); 

    const routeChange = () => { 
        let path = `/TodasAsVelas`; 
        navigate(path);
    }

    const quatroVelas = Array.isArray(velas) ? velas.slice(0, 4) : [];

    return (
        <>
            <div className="acender-velalist" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", columnGap: "25px", marginTop: "50px", marginInline: "50px", width: "100%", paddingLeft: "256px"}}>
                {/* Verifica se há velas na lista */}
                {Array.isArray(quatroVelas) && quatroVelas.length > 0 ? quatroVelas.map(vela => <VelaUnica vela={vela} key={vela.id}/>) : null}
                {/* Renderiza o quadrado cinza se não houver velas */}
                {/* {!hasVelas && (
                    <div className="gray-square-container">
                        <img alt='vela-cinza' className='vela-cinza' src={velaCinza}/>
                        <p className="no-velas-text">Você ainda não tem velas acesas.</p>
                        <p className='no-velas-text2'>Utilize o formulário ao lado para acender uma nova vela. Você pode acender quantas velas for necessário, ficarão todas listadas aqui.</p>    
                    </div>
                )} */}
            
            </div>
        </>
    )
}

export default ListaTodasAsVelas