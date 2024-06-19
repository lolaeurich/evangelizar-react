import React, { useState, useEffect } from 'react';
import "./styles/VerRevista.css"
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
import revista from "../assets/Revista/revista-amarela.png"
import revista1 from "../assets/Revista/revista1.png"
import eye from "../assets/Home/eye.png"

import { useNavigate } from "react-router-dom";

// import HTMLFlipBook from 'react-pageflip';
// import MyBook from '../components/Revistas/Revistas';

import pag1 from "../assets/Jornais/Jornal1/1.jpg"
import pag2 from "../assets/Jornais/Jornal2/1.jpg"
import pag3 from "../assets/Jornais/Jornal3/1.jpg"
// import maio1 from "../assets/Revistas/Turma2/maio1.jpg"
// import junho1 from "../assets/Revistas/Turma3/1.jpg"
// import pag3 from "../assets/Revistas/Turma1/3.jpg"




function VerJornal () {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [jornais, setJornais] = useState([]);

  useEffect(() => {
    fetchDadosJornal();
  }, []);

  const fetchDadosJornal = async () => {
    try {
      const response = await fetch("https://arearestritaevangelizar.belogic.com.br/api/jornal");
      if (!response.ok) {
        throw new Error(`Erro ao buscar dados da API: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setJornais(data.data); // Assumindo que os dados relevantes estão em data.data conforme exemplo da API
    } catch (error) {
      console.error('Erro na requisição:', error);
      // Aqui você pode definir como deseja tratar o erro (ex: exibir uma mensagem para o usuário)
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleHomeClick = () => {
    // Redirecionar para a página inicial do site
    window.location.href = "/AreaLogada";
  };


  let navigateHome = useNavigate(); 
  const routeChangeHome = () =>{ 
    let path = `/AreaLogada`; 
    navigateHome(path);
  }

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

    const handleButtonClick = () => {
      // Redireciona para o site desejado quando o botão é clicado
      window.location.href = 'https://doar.evangelizarepreciso.com.br/doacoes-site';
  };

     
  let navigate = useNavigate(); 
    
  const routeChange9 = () =>{ 
    let path = `/Jornal1`; 
    navigate(path);
  }

  const routeChange10 = () =>{ 
    let path = `/Jornal2`; 
    navigate(path);
  }

  const routeChange11 = () =>{ 
    let path = `/Jornal3`; 
    navigate(path);
  }

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
                <li onClick={routeChangeHome}>Retornar para a página inicial<img alt="" src={arrow}/></li>
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
            <div className='revista-main'>
                <div className='revista-text'>
                    <img alt='revista' className='icon-revista' src={revista} />
                    <h2 className='revista-h2'>Jornal do Evangelizador</h2>
                    <p className='revista-para'>Publicação mensal enviada como benefício aos associados. Aborda temas para toda família e estimula a fé católica por meio de artigos do Padre Reginaldo Manzotti e outros religiosos, matérias sobre assuntos seculares e da Igreja, textos sobre os Santos, histórias de superação por meio da fé, orientações sobre a vida cristã, novidades e prestações de contas. É possível ouvir o Jornal do Evangelizador em áudio pelo aplicativo da Associação Evangelizar É Preciso.</p>
                    <button className="btn-revista" >
                        <span>Ver as edições do jornal</span>
                        <img className="arrow2" alt="" src={arrow2} />
                    </button>
                </div>

                <div className='revista-edicao'>
                    <p className='edicao-p'>Confira a 1º edição gratuitamente</p>
                    <img alt='revista1' className='revista1-img' src={pag1}/>
                    <button className="btn-ver-revista" >
                        <img className="btn-ver-revista-icon" alt="" src={eye} />
                        <p>Visualizar</p>
                    </button>
                </div>
            </div>

            <div className='vitrine-revistas'>
        <div className='so-revistas'>
          {jornais.map(jornal => (
            <div key={jornal.id} className='revista-solo'>
              <img alt={`Capa do Jornal - ${jornal.edicao}`} className='revista1' src={jornal.imagem_capa}/>
              <p className='revista-legenda'>{jornal.lancamento} - {jornal.edicao}</p>
              <button className="btn-ver-revista2" onClick={routeChange9}>
                <img className="btn-ver-revista-icon" alt="" src={eye} />
                <p>Visualizar</p>
              </button>
            </div>
          ))}
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

<div>


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

export default VerJornal