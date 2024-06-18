import React, { useState, useContext } from 'react';
import "/src/components/velas/formulario/styles.css";
import atencao from "../../../assets/MinhasVelas/atencao.png";
import arrow2 from "../../../assets/Home/arrow2.png";
import { VelasContext } from '../context/velas';

const FormularioVela = ({ vela, mode, callback, onSubmit, inPopup }) => {
    const { inserirVela } = useContext(VelasContext);

    const [titulo, setTitulo] = useState(mode === 'editar' ? vela.titulo : '');
    const [motivo, setMotivo] = useState(mode === 'editar' ? vela.motivo : 1);
    const [cidade, setCidade] = useState(mode === 'editar' ? vela.cidade : '');
    const [descricao, setDescricao] = useState(mode === 'editar' ? vela.descricao : '');
    const [anonimo, setAnonimo] = useState(mode === 'editar' ? vela.anonimo : false);
    const [atencaoCheck, setAtencaoCheck] = useState(mode === 'editar' ? vela.atencaoCheck : false);

    const handleAddVela = () => {
        if (atencaoCheck) {
            const data = {
                titulo,
                motivo: 'Doença',
                motivo_descricao: descricao,
                cidade,
                termo_aceite: atencaoCheck
            };
            inserirVela(data);
        } else {
            alert('Por favor, diga estar ciente da publicação das informações antes de prosseguir');
        }
    };

    const handleEditVela = () => {
        const data = {
            id: vela.id,
            titulo,
            motivo,
            cidade,
            termo_aceite: atencaoCheck
        };
        onSubmit(data);
    };

    return (
        <div className={`acenderVela1 ${inPopup ? 'popupFormulario' : ''}`}>
            {mode === 'editar' ? (
                <>
                    <h2 className="edit-pop">Editar informações da vela</h2>
                </>
            ) : (
                <>
                    <h3 className="acender-h3">Acender nova vela</h3>
                </>
            )}
            <form className="vela-form">
                <div className="titulo">
                    <label className="vela-label">TÍTULO</label>
                    <input className='inputvela' value={titulo} maxLength="30" type='text' name="titulo" placeholder="Adicionar texto" onChange={(e) => setTitulo(e.target.value)}/>
                </div>    

                <div className="titulo">
                    <label className="vela-label">QUAL O MOTIVO DA SUA VELA?</label>
                    <select className='inputvela-select' type='select' name="motivo" placeholder="Selecionar texto">
                        <option className="option" value="1">Doença</option>
                        <option className="option" value="1">Emprego</option>
                        <option className="option" value="1">Família</option>
                        <option className="option" value="1">Conflitos</option>
                        <option className="option" value="1">Finados</option>
                        <option className="option" value="1">Agradecimento</option>
                        <option className="option" value="1">Gravidez</option>
                    </select>
                </div> 

                <div className="titulo">
                    <label className="vela-label">SUA CIDADE (OPCIONAL)</label>
                    <input className='inputvela' value={cidade} maxLength="30" type='text' name="cidade" placeholder="Adicionar texto" onChange={(e) => setCidade(e.target.value)}/>
                </div> 

                <div className="titulo">
                    <label className="vela-label">DESCREVA O MOTIVO DA SUA VELA</label>
                    <textarea className='inputvela-motivo' maxLength="150" value={descricao} type='text' name="motivo" style={{ wordWrap: 'break-word' }} placeholder="Adicionar texto" onChange={(e) => setDescricao(e.target.value)}/>
                </div> 
            </form>
            <div className="topping1" style={{ width: inPopup ? '900px' : '490px' }}> {/* Aplicando largura de 600px se estiver na popup */}
                <input
                    className="check2"
                    type="checkbox"
                    id="topping"
                    name="topping"
                    value="Paneer"
                    checked={anonimo}
                    onChange={(e) => setAnonimo(e.target.checked)}
                />
                Quero publicar essa vela anonimamente, sem divulgar meu nome.
            </div>
            <div className="topping1" style={{ width: inPopup ? '850px' : '490px' }}>
                <input
                    className="check2"
                    type="checkbox"
                    id="topping"
                    name="topping"
                    checked={atencaoCheck}
                    onChange={(e) => setAtencaoCheck(e.target.checked)}
                />
                <span style={{ width: inPopup ? '1500px' : '513px', marginRight: inPopup ? '150px' : '0px'  }}>ATENÇÃO:</span> Ao clicar no botão de “Adicionar vela”, você declara estar ciente que o conteúdo será publicado no site e poderá ser lido por outras pessoas. Evite escrever o nome completo das pessoas e outros dados pessoais que possam identificar o titular, pois os testemunhos poderão ser arquivados em mecanismos de busca da internet, a exemplo do Google. De acordo com o Marco Civil da Internet e demais legislações vigentes, a Associação Evangelizar É Preciso está isenta de toda e qualquer responsabilidade proveniente do conteúdo constante da sua publicação.
            </div>
            <hr className="vela-hr" />
            <div className="atencao1-vela" style={{ width: inPopup ? '900px' : '610px' }}>
                <img className="atencao-img" alt="" src={atencao} />
                <p className="atencao-p">
                    <span className="atencao-span">Sua vela ficará acesa por 09 dias.</span> Após esse período, será apagada automaticamente, mas você pode reacendê-la. Para saber mais, consulte nossa política de privacidade.
                </p>
            </div>
            {mode === 'editar' ? (
                <button className="btn-vela22" onClick={handleEditVela}>
                    <span>Salvar Alteração</span>
                </button>
            ) : (
                <button className="btn-vela-form" onClick={handleAddVela}>
                    <span>Adicionar vela</span>
                    <img className="arrow2" alt="" src={arrow2} />
                </button>
            )}
        </div>
    );
};

export default FormularioVela;
