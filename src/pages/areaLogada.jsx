import React, {useState} from "react";
import "./styles/AreaLogada.css"
import logo from "../assets/Home/logo.svg"
import heart from "../assets/Home/heart.png"
import perfil from "../assets/areaLogada/perfil.png"
import logo2 from "../assets/Home/logo2.png"
import facefooter from "../assets/Home/face-footer.png"
import instafooter from "../assets/Home/insta-footer.png"
import ytbfooter from "../assets/Home/ytb-footer.png"
import hx from "../assets/Home/hx.png"
import arrow from "../assets/Home/arrow.png"
import lupa from "../assets/Home/lupa.png"
import arrow2 from "../assets/Home/arrow2.png"
import blueArrow from "../assets/areaLogada/blue-arrow.png"
import hand from "../assets/areaLogada/hand.png"
import vela from "../assets/areaLogada/vela.png"
import chat from "../assets/areaLogada/chat.png"
import livro from "../assets/areaLogada/livro.png"
import jornal from "../assets/areaLogada/jornal.png"

import { useNavigate } from "react-router-dom";

function AreaLogada () {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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



    let navigate2 = useNavigate(); 
    const routeChange2 = () =>{ 
      let path = `/MeusTestemunhos`; 
      navigate2(path);
    }

    let navigate3 = useNavigate(); 
    const routeChange3 = () =>{ 
      let path = `/VerRevista`; 
      navigate2(path);
    }

    let navigate8 = useNavigate(); 
    const routeChange8 = () =>{ 
      let path = `/VerJornal`; 
      navigate8(path);
    }

       const handleButtonClick = () => {
      // Redireciona para o site desejado quando o botão é clicado
      window.location.href = 'https://doar.evangelizarepreciso.com.br/doacoes-site';
  };

  const handleButtonClick2 = () => {
    // Redireciona para o site desejado quando o botão é clicado
    window.location.href = 'https://evangelizar-minha-conta.belogic.com.br/login';
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
          <li className="barra-text">Produtos que Evangelizam</li>
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

      {/*BANNER*/}   
        <div className="banner">
            <div className="welcome">
                <h2 className="welcome-h2">Seja bem-vinda, Giovanna</h2>
                <p className="welcome-p">O que gostaria de fazer hoje?</p>
            </div>
            <button className="donation" onClick={handleButtonClick} href="https://doar.evangelizarepreciso.com.br/doacoes-site">
                  <img className="span-btn" alt="" src={heart} />
                  <span>Faça sua doação</span>
            </button>
        </div>


        {/*PRINCIPAL*/} 
        <div className="principal">
            <div className="parte11">
                <div className="conta">
                    <div className="perfil">
                        <img alt="" className="perfil-nome" src={perfil} />
                        <h3 className="perfil-h3">Minha conta</h3>
                    </div>
                    <p className="parte1-p">Edite aqui suas informações de perfil, complete seu cadastro ou cadastre novos usuários mirins</p>
                    <button className="parte1-btn" onClick={handleButtonClick2}>
                        <span>Site minha conta</span>
                        <img className="span-btn2" alt="" src={blueArrow} />
                    </button>
                </div>

                <div className="doacao">
                    <img alt="" className="hand" src={hand}/>
                    <div className="doacao-text">
                        <h3 className="doacao-h3">Faça sua doação</h3>
                        <p className="doacao-p">Ajude a transformar a vida de milhares de pessoas.</p>
                    </div>
                    <img alt="" className="arrow2" src={arrow2} onClick={handleButtonClick} href="https://doar.evangelizarepreciso.com.br/doacoes-site"/>
                </div>
            </div>

            <div className="parte8">
                <div className="quadro1">
                    <img alt="" className="vela" src={vela}/>
                        <div className="vela-text">
                            <h3 className="vela-h3">Minhas Velas</h3>
                            <p className="vela-p">Acenda e apague suas velas virtuais a qualquer momento.</p>
                        </div>
                    <img alt="" className="arrow" src={blueArrow} onClick={routeChangeVela}/>
                </div>
                <div className="quadro2">
                    <img alt="" className="livro" src={livro}/>
                        <div className="livro-text">
                            <h3 className="livro-h3">Revista Turma do Manzottinho</h3>
                            <p className="livro-p">Acesse as revistas da Turminha e cadastre novos associados mirins.</p>
                        </div>
                    <img alt="" className="arrow" src={blueArrow} onClick={routeChange3}/>
                </div>
            </div>

            <div className="parte3">
                <div className="quadro3">
                    <img alt="" className="chat" src={chat}/>
                        <div className="chat-text">
                            <h3 className="chat-h3">Meus Testemunhos</h3>
                            <p className="chat-p">Inspire outras pessoas por meio do seu testemunho. Escreva-o aqui.</p>
                        </div>
                    <img alt="" className="arrow" src={blueArrow} onClick={routeChange2}/>
                </div>
                <div className="quadro4">
                    <img alt="" className="jornal" src={jornal}/>
                        <div className="jornal-text">
                            <h3 className="jornal-h3">Jornal do Evangelizador</h3>
                            <p className="jornal-p">Acesse as últimas edições do Jornal do Evangelizador e atualize seu cadastro.</p>
                        </div>
                    <img alt="" className="arrow" src={blueArrow} onClick={routeChange8}/>
                </div>
            </div>
        </div>


     {/*  FOOTER */} 
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

export default AreaLogada
