import React, { useContext, useState } from 'react'
import { TestemunhosContext } from '../context/testemunhos';
import TestemunhoUnico from '../testemunhoCard/testemunhoUnico'
import { useNavigate } from "react-router-dom";
import "/src/components/velas/listVelas/styles.css"
import blueArrow from "../../../assets/areaLogada/blue-arrow.png"
import velaCinza from "../../../assets/Home/vela-cinza.png"

const ListaTodosOsTestemunhos = () => {
    const { testemunhos = [] } = useContext(TestemunhosContext); // Inicializando velas como um array vazio caso não haja dados disponíveis
    const [hasTestemunhos, setHasTestemunhos] = useState(testemunhos.length > 0); // Estado para verificar se há velas
    
    let navigate = useNavigate(); 

    const routeChange = () => { 
        let path = `/TodosOsTestemunhos`; 
        navigate(path);
    }

    const quatroTestemunhos = Array.isArray(testemunhos) ? testemunhos.slice(0, 4) : [];

    return (
        <>
            <div className="acender-velalist" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", columnGap: "25px", marginTop: "50px", marginInline: "50px", width: "100%", paddingLeft: "256px"}}>
                {/* Verifica se há velas na lista */}
                {Array.isArray(quatroTestemunhos) && quatroTestemunhos.length > 0 ? quatroTestemunhos.map(testemunho => <TestemunhoUnico testemunho={testemunho} key={testemunho.id}/>) : null}
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

export default ListaTodosOsTestemunhos