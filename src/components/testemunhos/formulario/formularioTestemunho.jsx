
import React, { useState, useContext } from 'react'
import "/src/components/velas/formulario/styles.css"

import atencao from "../../../assets/MinhasVelas/atencao.png"
import arrow2 from "../../../assets/Home/arrow2.png"
import { TestemunhosContext } from '../context/testemunhos'

const FormularioTestemunho = ({testemunho, mode, callback, onSubmit }) => {

    const { inserirTestemunho } = useContext(TestemunhosContext)

    const [titulo, setTitulo] = useState(mode === 'editar' ? testemunho.titulo : '')
    const [motivo, setMotivo] = useState(mode === 'editar' ? testemunho.motivo : 1)
    //todo: ver motivo usando select.
    const [cidade, setCidade] = useState(mode === 'editar' ? testemunho.cidade : '')
    const [descricao, setDescricao] = useState(mode === 'editar' ? testemunho.descricao : '')

    const [anonimo, setAnonimo] = useState(mode === 'editar' ? testemunho.anonimo : false)
    const [atencaoCheck, setAtencaoCheck] = useState(mode === 'editar' ? testemunho.atencaoCheck : false)

    const handleAddTestemunho = () => {
        if (atencaoCheck) {
            const data = {
                // id: Date.now().toString(),
                titulo,
                motivo: 'Cura',
                motivo_descricao: descricao,
                cidade,
                termo_aceite: atencaoCheck
            };
            inserirTestemunho(data);
        } else {
            alert('Por favor, diga estar ciente da publicação das informações antes de prosseguir');
        }
    };


    const handleEditTestemunho = () => {
        const data = {
            id: testemunho.id,
            titulo,
            motivo,
            cidade,
            // motivo_descricao,
            termo_aceite: atencaoCheck
            // anonimo,
            // atencaoCheck
        }

        onSubmit(data)
    }


    return (
        <div className="acenderVela1">
        {mode === 'editar' ? 
            (
                <>
                    <button onClick={callback} className="fechar-vela">x</button>
                    <h2 className="edit-pop">Editar informações do testemunho</h2>
                </>
            )
            :
            (
                <>
                <h3 className="acender-h3">Add novo testemunho</h3>
                </>
            )
        }

        
        <form className="vela-form">
            <div className="titulo">
                <label className="vela-label">TÍTULO</label>
                <input className='inputvela' value={titulo} maxLength="30" type='text' name="titulo" placeholder="Adicionar texto" onChange={(e) => setTitulo(e.target.value)}/>
            </div>    

            <div className="titulo">
                <label className="vela-label">QUAL O MOTIVO DO SEU TESTEMUNHO?</label>
                <select className='inputvela-select' type='select' name="motivo" placeholder="Selecionar texto">
                    <option className="option" value="1">Cura</option>
                    <option className="option" value="1">Libertação</option>
                    <option className="option" value="1">Jesus das Santas Chagas</option>
                    <option className="option" value="1">Conversão</option>
                    <option className="option" value="1">Emprego</option>
                    <option className="option" value="1">Família</option>
                    <option className="option" value="1">Agradecimento</option>
                    <option className="option" value="1">Questões Jurídicas / Financeiras</option>
                </select>
            </div> 

            <div className="titulo">
                <label className="vela-label">SUA CIDADE (OPCIONAL)</label>
                <input className='inputvela' value={cidade} maxLength="30" type='text' name="cidade" placeholder="Adicionar texto" onChange={(e) => setCidade(e.target.value)}/>
            </div> 

            <div className="titulo">
                <label className="vela-label">DESCREVA O MOTIVO DO SEU TESTEMUNHO</label>
                <textarea className='inputvela-motivo' maxLength="150" value={descricao} type='text' name="motivo" style={{ wordWrap: 'break-word' }} placeholder="Adicionar texto" onChange={(e) => setDescricao(e.target.value)}/>
            </div> 
        </form>
        <div className="topping1">
            <input className="check2" type="checkbox" id="topping" name="topping" 
            value="Paneer" checked={anonimo} onChange={(e) => setAnonimo(e.target.checked)}/>
            Quero publicar esse testemunho anonimamente, sem divulgar meu nome.
        </div>

        <div className="topping1">
            <input className="check2" type="checkbox" id="topping" name="topping" checked={atencaoCheck}
            onChange={(e) => setAtencaoCheck(e.target.checked)}/>
            <span style={{fontWeight: "900"}}>ATENÇÃO:</span> Ao clicar no botão de “Adicionar testemunho”, você declara estar
            ciente que o conteúdo será publicado no site e poderá ser lido por 
            outras pessoas. Evite escrever o nome completo das pessoas e outros
            dados pessoais que possam identificar o titular, pois os testemunhos
            poderão ser arquivados em mecanismos de busca da internet, a exemplo 
            do Google. De acordo com o Marco Civil da Internet e demais legislações
            vigentes, a Associação Evangelizar É Preciso está isenta de toda e 
            qualquer responsabilidade proveniente do conteúdo constante da sua 
            publicação.
        </div>

        <hr className="vela-hr"/>

        <div className="atencao1-vela">
            <img className="atencao-img" alt="" src={atencao}/>
            <p className="atencao-p"><span className="atencao-span">Seu testemunho ficará ativo por 09 dias.</span> Após esse período, será apagada 
                automaticamente, mas você pode reacendê-la novamente. Para saber 
                mais, consulte nossa política de privacidade.</p>
        </div>

        {mode === 'editar' ?
            <button className="btn-vela22" onClick={handleEditTestemunho}>
                <span>Salvar Alteração</span>
            </button>
        :

        <button className="btn-vela-form" onClick={handleAddTestemunho} style={{width: "250px"}}>
            <span>Adicionar testemunho</span>
            <img className="arrow2" alt="" src={arrow2} />
        </button>
    }


    </div>
    )
}

export default FormularioTestemunho