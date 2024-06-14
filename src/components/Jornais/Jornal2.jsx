import HTMLFlipBook from "react-pageflip";
import pag1 from "../../assets/Jornais/Jornal2/1.jpg"
import pag2 from "../../assets/Jornais/Jornal2/2.jpg"
import pag3 from "../../assets/Jornais/Jornal2/3.jpg"
import pag4 from "../../assets/Jornais/Jornal2/4.jpg"
import pag5 from "../../assets/Jornais/Jornal2/5.jpg"
import pag6 from "../../assets/Jornais/Jornal2/6.jpg"
import pag7 from "../../assets/Jornais/Jornal2/7.jpg"
import pag8 from "../../assets/Jornais/Jornal2/8.jpg"
import pag9 from "../../assets/Jornais/Jornal2/9.jpg"
import pag10 from "../../assets/Jornais/Jornal2/10.jpg"
import pag11 from "../../assets/Jornais/Jornal2/11.jpg"
import pag12 from "../../assets/Jornais/Jornal2/12.jpg"
import pag13 from "../../assets/Jornais/Jornal2/13.jpg"
import pag14 from "../../assets/Jornais/Jornal2/14.jpg"
import pag15 from "../../assets/Jornais/Jornal2/15.jpg"
import pag16 from "../../assets/Jornais/Jornal2/16.jpg"
import pag17 from "../../assets/Jornais/Jornal2/17.jpg"
import pag18 from "../../assets/Jornais/Jornal2/18.jpg"
import pag19 from "../../assets/Jornais/Jornal2/19.jpg"
import pag20 from "../../assets/Jornais/Jornal2/20.jpg"
import pag21 from "../../assets/Jornais/Jornal2/21.jpg"
import pag22 from "../../assets/Jornais/Jornal2/22.jpg"
import pag23 from "../../assets/Jornais/Jornal2/23.jpg"
import pag24 from "../../assets/Jornais/Jornal2/24.jpg"


import logo from "../../assets/Home/logo.svg"
import logo2 from "../../assets/Home/logo2.png"
import facefooter from "../../assets/Home/face-footer.png"
import instafooter from "../../assets/Home/insta-footer.png"
import ytbfooter from "../../assets/Home/ytb-footer.png"
import hx from "../../assets/Home/hx.png"
import arrow from "../../assets/Home/arrow.png"
import lupa from "../../assets/Home/lupa.png"
import arrow2 from "../../assets/Home/arrow2.png"
import revista from "../../assets/Revista/revista-amarela.png"
import revista1 from "../../assets/Revista/revista1.png"
import eye from "../../assets/Home/eye.png"
import heart from "../../assets/Home/heart.png"

import React, {useState} from "react";

import "../Revistas/revistas.css"
import { useNavigate } from "react-router-dom";

function MyJornal2(props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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

    const handleButtonClick = () => {
      // Redireciona para o site desejado quando o botão é clicado
      window.location.href = 'https://doar.evangelizarepreciso.com.br/doacoes-site';
  };



  const [currentPage, setCurrentPage] = useState(1);
  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    border: "1px solid #ccc"
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
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
    <div className='revista-main'>
        <div className='revista-text'>
            <img alt='revista' className='icon-revista' src={revista} />
            <h2 className='revista-h2'>Revista Turma do Manzottinho</h2>
            <p className='revista-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit placerat iaculis. Fusce fermentum nisi et finibus tincidunt. Maecenas nec orci at velit commodo convallis sit amet eget mauris. Phasellus mattis dui vitae egestas feugiat. Pellentesque posuere porttitor purus eget volutpat. Phasellus ligula enim, venenatis in condimentum quis, tincidunt quis turpis.</p>
            <button className="btn-revista" >
                <span>Ver as edições da revista</span>
                <img className="arrow2" alt="" src={arrow2} />
            </button>
        </div>

        <div className='revista-edicao'>
            <p className='edicao-p'>Confira a 1º edição gratuitamente</p>
            <img alt='revista1' className='revista1-img' src={pag1}/>
        </div>
    </div>

<div className="flipbook-container">
    <div className='vitrine-revistas-1'>
      <HTMLFlipBook className="flipbook" width={500} height={700} showCover={true} onPageChange={(e) => setCurrentPage(e.data)}
        style={{ marginLeft: currentPage === 1 ? "-100px" : "auto", marginRight: currentPage === 20 ? "-100px" : "auto" }}>
        <div style={pageStyle}>
          <img src={pag1} alt="Imagem 1" style={{ width: "100%", height: "100%", marginRight: "200px" }} />
        </div>
        <div style={pageStyle}>
          <img src={pag2} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={pag3} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={pag4} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={pag5} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={pag6} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={pag7} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={pag8} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={pag9} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={pag10} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={pag11} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={pag12} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={pag13} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={pag14} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={pag15} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={pag16} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={pag17} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={pag18} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={pag19} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={pag20} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={pag21} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={pag22} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={pag23} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={pag24} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
      </HTMLFlipBook>  
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
  );
}

export default MyJornal2;
