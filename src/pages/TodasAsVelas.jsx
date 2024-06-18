import React, { useState, useEffect } from "react";
import { useContext } from 'react';
import "../pages/styles/TodasAsVelas.css"
import logo from "../assets/Home/logo.svg"
import heart from "../assets/Home/heart.png"
import logo2 from "../assets/Home/logo2.png"
import facefooter from "../assets/Home/face-footer.png"
import instafooter from "../assets/Home/insta-footer.png"
import ytbfooter from "../assets/Home/ytb-footer.png"
import hx from "../assets/Home/hx.png"
import arrow from "../assets/Home/arrow.png"
import lupa from "../assets/Home/lupa.png"
import arrow2 from "../assets/Home/arrow2.png"
import blueArrow from "../assets/areaLogada/blue-arrow.png"
import vela from "../assets/areaLogada/vela.png"
import velaAmarela from "../assets/MinhasVelas/vela-amarela.png"
import atencao from "../assets/MinhasVelas/atencao.png"
import caneta from "../assets/MinhasVelas/caneta.png"
import trash from "../assets/MinhasVelas//trash.png"
import check from "../assets/MinhasVelas/check.png"
import SegundoPopUp from "../components/velas/editPopUp/segundoPopUp/segundoPopUp.jsx";
import VelaUnica from "../components/velas/velaCard/velaUnica.jsx";
import { VelasContext } from "../components/velas/context/velas.jsx";
import ListaVelas from "../components/velas/listVelas/listVelas.jsx";
import ListaTodasAsVelas from "../components/velas/listVelas/listTodasAsVelas.jsx";
import { VelasProvider } from '../components/velas/context/velas';
import axios from 'axios'; // Importe o axios se você não o fez ainda

import { useNavigate } from "react-router-dom";

function TodasAsVelas () {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleButtonClick = () => {
    // Redireciona para o site desejado quando o botão é clicado
    window.location.href = 'https://doar.evangelizarepreciso.com.br/doacoes-site';
};

  const handleHomeClick = () => {
    // Redirecionar para a página inicial do site
    window.location.href = "/AreaLogada";
  };


    let navigateVela = useNavigate(); 
    const routeChangeVela = () =>{ 
      let path = `/MinhasVelas`; 
      navigateVela(path);
    }

    let navigateTest = useNavigate(); 
    const routeChangeTest = () =>{ 
      let path = `/MeusTestemunhos`; 
      navigateTest(path);
    }

    let navigateRevista = useNavigate(); 
    const routeChangeRevista = () =>{ 
      let path = `/VerRevista`; 
      navigateRevista(path);
    }

    let navigateJornal = useNavigate(); 
    const routeChangeJornal = () =>{ 
      let path = `/VerJornal`; 
      navigateJornal(path);
    }

    const { velas } = useContext(VelasContext);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [showNextPopup, setShowNextPopup] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

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
    
      // const handleSaveChanges = () => {
      //   handleCloseEditPopup(); // Fecha a popup de edição
      //   handleNextPopup(); // Abre a próxima popup
      // };

      const flexWrapStyle = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%"
    };

      

      useEffect(() => {
        const fetchTotalVelas = async () => {
            try {
                const response = await axios.get('https://arearestritaevangelizar.belogic.com.br/api/vela');
                const totalVelas = response.data.total; // Supondo que a API retorna o número total de velas
                const calculatedTotalPages = Math.ceil(totalVelas / 4);
                setTotalPages(calculatedTotalPages);
            } catch (error) {
                console.error('Erro ao obter o número total de velas:', error);
            }
        };

        fetchTotalVelas();
    }, []);

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1)); // Impede que currentPage seja menor que 1
    };

    const goToNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages)); // Impede que currentPage seja maior que totalPages
    };


    return(
        <div>
            {/* BARRA SUPERIOR */}
            <div className="barra">
                <ul className="barra-lista">
                <li className="barra-text" id='evangelizar'>Associação Evangelizar</li>
                <li className="barra-text">|</li>
                <li className="barra-text">TV Evangelizar</li>
                <li className="barra-text">IDe+</li>
                <li className="barra-text">IDePlay</li>
                <li className="barra-text">Rádio Evangelizar</li>
                <li className="barra-text">Jesus das Santas Chagas</li>
                <li className="barra-text">Turma do Manzottinho</li>
                <li className="barra-text">Produtos Que Evangelizam</li>
                </ul>
            </div>

            {/* MENU SUPERIOR */}
      <div className="nav">
            <div className="menu-superior">
                <div className="menu-sanduiche" onClick={toggleDropdown}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <img className="menu-superior-img" alt="" src={logo}/>
                <h4 className="menu-superior-h4">Área Restrita</h4>
            </div>  
            <img className="lupa" alt="" src={lupa}/> 
            {isDropdownOpen && (
          <div className="dropdown">
              <ul>
                <li onClick={routeChangeVela}>Minhas Velas<img alt="" src={arrow} onClick={routeChangeVela}/></li>
                <hr className="linha-drop" />
                <li onClick={routeChangeTest}>Meus Testemunhos<img alt="" src={arrow}/></li>
                <hr className="linha-drop" />
                <li onClick={routeChangeRevista}>Revista Turma do Manzottinho<img alt="" src={arrow}/></li>
                <hr className="linha-drop" />
                <li onClick={routeChangeJornal}>Jornal do Evangelizador<img alt="" src={arrow}/></li>
                <hr className="linha-drop" />
                <li onClick={handleHomeClick}>Retornar para a página inicial<img alt="" src={arrow}/></li>
                <hr className="linha-drop" />
                <button className="donation-drop" onClick={handleButtonClick} href="https://doar.evangelizarepreciso.com.br/doacoes-site">
                      <img className="span-btn" alt="" src={heart} />
                      <span>Faça sua doação</span>
                </button>
                  {/* Adicione mais itens do menu aqui, se necessário */}
              </ul>
          </div>
        )} 
        </div>   

            {/* BANNER */}
            <div className="velas-banner">
                <img alt="" className="velaAmarela" src={velaAmarela}/>
                <div className="banner-text">
                    <h3 className="velas-h3">Todas as minhas velas</h3>
                </div>
            </div>


            {/* Pop-up para editar a vela */}
            {showEditPopup && (
                <div className="edit-popup-container">
                     
                    <div className="edit-popup">
                    <div className="popup-scrollable">
                        {/* Conteúdo da pop-up de edição */}
                        {/* <button onClick={handleCloseEditPopup} className="fechar-vela">x</button> */}
                        <h2 className="edit-pop">Editar informações da vela</h2>

                        <h3 className="acender-h3">Acender nova vela</h3>
                        {/* <form className="edit-vela-form">
                        <div className="titulo">
                            <label className="vela-label">TÍTULO</label>
                            <input className='inputvela' type='email' name="email" placeholder="Adicionar texto"/>
                        </div>    

                        <div className="titulo">
                            <label className="vela-label">QUAL O MOTIVO DA SUA VELA?</label>
                            <input className='inputvela' type='email' name="email" placeholder="Selecionar texto"/>
                        </div> 

                        <div className="titulo">
                            <label className="vela-label">SUA CIDADE (OPCIONAL)</label>
                            <input className='inputvela' type='email' name="email" placeholder="Adicionar texto"/>
                        </div> 

                        <div className="titulo">
                            <label className="vela-label">DESCREVA O MOTIVO DA SUA VELA</label>
                            <input className='inputvela2' type='email' name="email" placeholder="Adicionar texto"/>
                        </div> 
                    </form> */}
                    <div className="topping-edit">
                        <input className="check2" type="checkbox" id="topping" name="topping" 
                        value="Paneer" />
                        Quero publicar essa vela anonimamente, sem divulgar meu nome.
                    </div>

                    <div className="topping-edit2">
                        <input className="check22" type="checkbox" id="topping" name="topping" 
                        value="" />
                        ATENÇÃO: Ao clicar no botão de “Adicionar vela”, você declara estar
                        ciente que o conteúdo será publicado no site e poderá ser lido por 
                        outras pessoas. Evite escrever o nome completo das pessoas e outros
                        dados pessoais que possam identificar o titular, pois os testemunhos
                        poderão ser arquivados em mecanismos de busca da internet, a exemplo 
                        do Google. De acordo com o Marco Civil da Internet e demais legislações
                        vigentes, a Associação Evangelizar É Preciso está isenta de toda e 
                        qualquer responsabilidade proveniente do conteúdo constante da sua 
                        publicação.
                    </div>

                    {/* <hr className="vela-hr"/> */}

                    <div className="atencao22">
                        <img className="atencao-img" alt="" src={atencao}/>
                        <p className="atencao-p"><span className="atencao-span">Sua vela ficará acesa por 09 dias.</span> Após esse período, será apagada 
                            automaticamente, mas você pode reacendê-la. Para saber 
                            mais, consulte nossa política de privacidade.</p>
                    </div>
                    <button className="btn-vela22" onClick={handleSaveChanges}>
                        <span>Salvar Alteração</span>
                    </button>

                    <button className="btn-vela23" >
                        <img alt="" className="" src={trash}/>
                        <span>Excluir vela</span>
                    </button>
                </div>
                    </div>
                    </div>

            )}

              {/* Próxima pop-up */}
              {showNextPopup && (
                  <SegundoPopUp callback={handleCloseNextPopup}/>
                // <div className="next-popup-container">
                //     <div className="next-popup">
                //     <button onClick={handleCloseNextPopup} className="fechar-vela2">
                //         x
                //     </button>
                //         <img  alt="" className="check-icon" src={check}/>
                //         <h3 className="check-h3">Vela alterada com sucesso!</h3>
                //         <p className="check-p">“Lorem ipsum dolor sit amet, consectetur adipiscing er sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid tempor incididunt...”</p>
                //         <button className="btn-vela24" >
                //         <span>Excluir vela</span>
                //     </button>
                //
                //     </div>
                // </div>
            )}

          

            {/* PRINCIPAL */}
            <div className="ver-velas">
                <div className="apenas-velas">
                    <VelasProvider>
                        <ListaTodasAsVelas page={currentPage} style={flexWrapStyle}/> 
                    </VelasProvider>
                </div>
                <div className="velas-paginas">
                    <button className="velas-exc-btn" onClick={goToPreviousPage} disabled={currentPage === 1}>
                        Ver todas as velas apagadas                   </button>
                    <button className="velas-exc-btn" onClick={goToNextPage} disabled={currentPage === totalPages}  style={{width:"50px"}}>
                        1
                    </button>
                </div>
            </div>


             {/* FOOTER */}
      <div className="footer">
        <ul className="footer-list">
          
          <div className='f1'>
            <img className="f1-img" src={logo} alt="" />

            <div className='social-footer'>
              <img className="face-footer" src={facefooter} alt="" />
              <img className="insta-footer" src={instafooter} alt="" />
              <img className="ytb-footer" src={ytbfooter} alt="" />
            </div>

            <p className='endereco'>Associação Evangelizar é Preciso</p>
            <p className='endereco2'>Praça Senador Correia, 55 - CEP 80010-210 - Curitiba, PR</p>
          </div>

          <div className='f2'>
            <div className='lista1'>
              <p className='p'>Contato</p>
              <p className='p'>Anuncie</p>
              <p className='p'>Eventos</p>
              <p className='p'>Rede Evangelizar</p>
            </div>
            <div className='lista2'>
              <p className='p'>Notícias</p>
              <p className='p'>Seja um Associado</p>
              <p className='p'>Termos de Uso</p>
              <p className='p'>Política de Privacidade</p>
            </div>
          </div>

          <div className='f3'>
          <button className="donation22" onClick={() => navigateToPage('doacoes.html')}>Conheça nosso app <img alt='' src={arrow} style={{width: "18px", height: "15px", alignSelf: "center"}}/></button>
          <button className="donation3" onClick={() => navigateToPage('doacoes.html')}>Contribua com nossa Obra</button>
          <img alt='' className='agencia' src={hx}></img>
          </div>



        </ul>
        <div className="footer-banner">
          <div className="footer-images">
            <img className="footer-img2" alt="" src={logo2} />
            <p className='footer-img3'>Associação Evangelizar</p>
          </div>
          <ul className="footer-menu">
            <li className="menu-item">|</li>
            <li className="menu-item">TV Evangelizar</li>
            <li className="menu-item">IDe+</li>
            <li className="menu-item">IDeplay</li>
            <li className="menu-item">Rádio Evangelizar</li>
            <li className="menu-item">Jesus das Santas Chagas</li>
            <li className="menu-item">Turma do Manzottinho</li>
            <li className="menu-item">Loja</li>
            <li className="menu-item">Festival VEM</li>
            <li className="menu-item">Clube FM</li>
          </ul>
        
        </div>
      </div>
        </div>
    )
}

export default TodasAsVelas