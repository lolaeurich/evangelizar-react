import React, { useState } from 'react';
import "./styles/MinhasVelas.css"
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
import hand from "../assets/areaLogada/hand.png"
import vela from "../assets/areaLogada/vela.png"
import velaAmarela from "../assets/MinhasVelas/vela-amarela.png"
import atencao from "../assets/MinhasVelas/atencao.png"
import caneta from "../assets/MinhasVelas/caneta.png"
import trash from "../assets/MinhasVelas//trash.png"

import { useNavigate } from "react-router-dom";

import FormularioVela from '../components/velas/formulario/formularioVela'
import ListaVelas from '../components/velas/listVelas/listVelas'
import { VelasProvider } from '../components/velas/context/velas';

function MinhasVelas () {
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
    const [titulo, setTitulo] = useState("")
    //todo: ver motivo usando select.
    const [cidade, setCidade] = useState("")
    const [descricao, setDescricao] = useState("")

    const [anonimo, setAnonimo] = useState(false)
    const [atencaoCheck, setAtencaoCheck] = useState(false)

    const handleAddVela = () => {
        const data = {
            titulo,
            cidade,
            descricao,
            anonimo,
            atencaoCheck
        }
        console.log(data)
    }
    
    let navigate = useNavigate(); 
    
    const routeChange = () =>{ 
      let path = `/TodasAsVelas`; 
      navigate(path);
    }

    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
      setIsToggled(!isToggled);
    };

    const [switchState, setSwitchState] = useState(false); // Estado inicial do switch

    // Função para alternar o estado do switch
    const toggleSwitch = () => {
        setSwitchState(!switchState); // Alterna o estado do switch
    };

      const handleButtonClick = () => {
    // Redireciona para o site desejado quando o botão é clicado
    window.location.href = 'https://doar.evangelizarepreciso.com.br/doacoes-site';
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
                <div className="nova-div-nav">
                <button className="donationok" onClick={handleButtonClick} href="https://doar.evangelizarepreciso.com.br/doacoes-site">
                  <img className="span-btn" alt="" src={heart} />
                  <span>Faça sua doação</span>
              </button>
                <h4 className="menu-superior-h4">Área Restrita</h4>
            </div>  
            </div>
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
            <div className="velas-banner">
                <img alt="" className="velaAmarela" src={velaAmarela}/>
                <div className="banner-text">
                    <h3 className="velas-h3">Minhas Velas</h3>
                    <p className="velas-p">Veja suas velas acesas e acenda novas</p>
                </div>
            </div>

             {/* PRINCIPAL */}
          <div className="vela-principal" style={{marginBottom: '20px'}}>

                <VelasProvider>
                <>
                    <FormularioVela/>
                    <div className="linha-vertical"></div> 
                    <ListaVelas/>
                </>
                </VelasProvider>
             
            </div>

             {/* <div className="linha-vertical"></div> Linha vertical */} 



            <div className='ajude-banner'>
                <h3 className='ajude-h3'>Faça uma doação</h3>
                <p className='ajude-p'>Ajude outras pessoas a poderem sempre acender uma vela.te acessível para todos</p>
                <button className="donationok" onClick={handleButtonClick} href="https://doar.evangelizarepreciso.com.br/doacoes-site">
                  <img className="span-btn" alt="" src={heart} />
                  <span>Faça sua doação</span>
              </button>
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

export default MinhasVelas
