import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { VelasContext } from '../context/velas';
import atencao from "../../../assets/MinhasVelas/atencao.png";
import arrow2 from "../../../assets/Home/arrow2.png";

const FormularioVela = ({ vela, mode, onSubmit, inPopup, onClose }) => {
    const { inserirVela, editarVela } = useContext(VelasContext);

    const [motivos, setMotivos] = useState([]);
    const [titulo, setTitulo] = useState(mode === 'editar' ? vela.titulo : '');
    const [motivo, setMotivo] = useState(mode === 'editar' ? vela.motivo : '');
    const [cidade, setCidade] = useState(mode === 'editar' ? vela.cidade : '');
    const [descricao, setDescricao] = useState(mode === 'editar' ? vela.motivo_descricao : '');
    const [anonimo, setAnonimo] = useState(mode === 'editar' ? vela.anonimo : false);
    const [atencaoCheck, setAtencaoCheck] = useState(mode === 'editar' ? vela.termo_aceite : false);

    useEffect(() => {
        fetchMotivos();
    }, []);

    const fetchMotivos = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('https://arearestritaevangelizar.belogic.com.br/api/vela/motivos', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setMotivos(response.data.data);
        } catch (error) {
            console.error('Erro ao carregar motivos:', error);
        }
    };

    const handleAddVela = async () => {
        try {
            const token = localStorage.getItem('token');
            const data = {
                titulo,
                motivo,
                cidade,
                motivo_descricao: descricao,
                termo_aceite: true
            };
            await inserirVela(data);
            clearFormAndClose(); // Limpar formulário e fechar popup após adição
        } catch (error) {
            console.error('Erro ao adicionar vela:', error);
        }
    };

    const handleEditVela = async () => {
        try {
            const data = {
                id: vela.id,
                titulo,
                motivo,
                cidade,
                motivo_descricao: descricao,
                termo_aceite: true
            };
            await editarVela(data);
            clearFormAndClose(); // Limpar formulário e fechar popup após edição
        } catch (error) {
            console.error('Erro ao editar vela:', error);
        }
    };

    const clearFormAndClose = () => {
        clearForm();
        onClose(); // Chama a função para fechar o popup
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
                <h2 className="edit-pop">Editar informações da vela</h2>
            ) : (
                <h3 className="acender-h3">Acender nova vela</h3>
            )}
            <form className="vela-form">
                <div className="titulo">
                    <label className="vela-label">TÍTULO</label>
                    <input className='inputvela' value={titulo} maxLength="30" type='text' name="titulo" placeholder="Adicionar texto" onChange={(e) => setTitulo(e.target.value)} />
                </div>

                <div className="titulo">
                    <label className="vela-label">QUAL O MOTIVO DA SUA VELA?</label>
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
                    <label className="vela-label">DESCREVA O MOTIVO DA SUA VELA</label>
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
                    <span className="atencao-span">Sua vela ficará acesa por 09 dias.</span> Após esse período, será apagada automaticamente, mas você pode reacendê-la novamente. Para saber mais, consulte nossa política de privacidade.
                </p>
            </div>
            <hr className="vela-hr" />
            {mode === 'editar' ? (
                <button className="btn-vela22" onClick={handleEditVela}>
                    <span>Salvar Alteração</span>
                </button>
            ) : (
                <button className="btn-vela-form" onClick={handleAddVela}>
                    <span>Adicionar vela</span>
                </button>
            )}
        </div>
    );
};

export default FormularioVela;
