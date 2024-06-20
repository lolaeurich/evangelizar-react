import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import "../../velas/formulario/styles.css"
import { TestemunhosContext } from "../context/testemunhos.jsx"
import atencao from "../../../assets/MinhasVelas/atencao.png";

const FormularioTestemunho = ({ testemunho, mode, onSubmit, inPopup, onClose }) => {
    const { inserirTestemunho, editarTestemunho } = useContext(TestemunhosContext);

    const [motivos, setMotivos] = useState([]);
    const [titulo, setTitulo] = useState(testemunho?.titulo || ''); // Inicializa com o valor do testemunho se existir
    const [motivo, setMotivo] = useState(testemunho?.motivo || ''); // Inicializa com o valor do testemunho se existir
    const [cidade, setCidade] = useState(testemunho?.cidade || ''); // Inicializa com o valor do testemunho se existir
    const [descricao, setDescricao] = useState(testemunho?.motivo_descricao || ''); // Inicializa com o valor do testemunho se existir
    const [anonimo, setAnonimo] = useState(testemunho?.anonimo || false); // Inicializa com o valor do testemunho se existir
    const [atencaoCheck, setAtencaoCheck] = useState(testemunho?.termo_aceite || false); // Inicializa com o valor do testemunho se existir
    
    

    useEffect(() => {
        fetchMotivos();
    }, []);

    const fetchMotivos = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('https://arearestritaevangelizar.belogic.com.br/api/testemunho/motivos', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setMotivos(response.data.data);
        } catch (error) {
            console.error('Erro ao carregar motivos:', error);
        }
    };

    const handleAddTestemunho = async () => {
        try {
            const token = localStorage.getItem('token');
            const data = {
                titulo,
                motivo,
                cidade,
                motivo_descricao: descricao,
                termo_aceite: true
            };
            await inserirTestemunho(data);
            clearFormAndClose(); // Limpar formulário e fechar popup após adição
        } catch (error) {
            console.error('Erro ao adicionar testemunho:', error);
        }
    };
    
    const handleEditTestemunho = async () => {
        try {
            const token = localStorage.getItem('token');
            const testemunhoAtualizado = {
                titulo,
                motivo,
                publicar_anonimamente: anonimo ? 1 : 0,
                termo_aceite: true
            };
    
            const response = await axios.put(
                `https://arearestritaevangelizar.belogic.com.br/api/testemunho/${testemunho.id}`,
                testemunhoAtualizado,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
    
            console.log('Resposta da edição:', response.data); // Verifique a resposta da API
    
            clearFormAndClose(); // Limpar formulário e fechar popup após edição
        } catch (error) {
            console.error('Erro ao editar testemunho:', error.response.data);
        }
    };
      

    const clearForm = () => {
        setTitulo('');
        setMotivo('');
        setCidade('');
        setDescricao('');
        setAnonimo(false);
        setAtencaoCheck(false);
    };
    
    return (
        <div className={`acenderVela1 ${inPopup ? 'popupFormulario' : ''}`}>
            {mode === 'editar' ? (
                <h2 className="edit-pop">Editar informações do testemunho</h2>
            ) : (
                <h3 className="acender-h3">Adicionar novo testemunho</h3>
            )}
            <form className="vela-form">
                <div className="titulo">
                    <label className="vela-label">TÍTULO</label>
                    <input className='inputvela' value={titulo} maxLength="30" type='text' name="titulo" placeholder="Adicionar texto" onChange={(e) => setTitulo(e.target.value)} />
                </div>

                <div className="titulo">
                    <label className="vela-label">QUAL O MOTIVO DO SEU TESTEMUNHO?</label>
                    <select className='inputvela-select' type='select' name="motivo" placeholder="Selecionar texto" value={motivo} onChange={(e) => setMotivo(e.target.value)}>
                        {motivos.map((motivo) => (
                            <option key={motivo.nome} value={motivo.nome}>{motivo.nome}</option>
                        ))}
                    </select>
                </div>

                <div className="titulo">
                    <label className="vela-label">SUA CIDADE (OPCIONAL)</label>
                    <input className='inputvela' value={cidade} maxLength="30" type='text' name="cidade" placeholder="Adicionar texto" onChange={(e) => setCidade(e.target.value)} />
                </div>

                <div className="titulo">
                    <label className="vela-label">DESCREVA O MOTIVO DO SEU TESTEMUNHO</label>
                    <textarea className='inputvela-motivo' maxLength="150" value={descricao} type='text' name="descricao" style={{ wordWrap: 'break-word' }} placeholder="Adicionar texto" onChange={(e) => setDescricao(e.target.value)} />
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
                Quero publicar esse testemunho anonimamente, sem divulgar meu nome.
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
                    <span className="atencao-span">Sua vela ficará acesa por 09 dias.</span> Após esse período, será apagada automaticamente, mas você pode reacendê-la novamente. Para saber mais, consulte nossa política de privacidade.
                </p>
            </div>
            <hr className="vela-hr" />
            {mode === 'editar' ? (
                <button className="btn-vela22" onClick={handleEditTestemunho}>
                    <span>Salvar Alteração</span>
                </button>
            ) : (
                <button className="btn-vela-form" onClick={handleAddTestemunho}>
                    <span>Adicionar testemunho</span>
                </button>
            )}
        </div>
    );
};

export default FormularioTestemunho;
