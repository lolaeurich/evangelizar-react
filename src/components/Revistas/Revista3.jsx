import HTMLFlipBook from "react-pageflip";
import maio1 from "../../assets/Revistas/Turma3/1.jpg"
import maio2 from "../../assets/Revistas/Turma3/2.jpg"
import maio3 from "../../assets/Revistas/Turma3/3.jpg"
import maio4 from "../../assets/Revistas/Turma3/4.jpg"
import maio5 from "../../assets/Revistas/Turma3/5.jpg"
import maio6 from "../../assets/Revistas/Turma3/6.jpg"
import maio7 from "../../assets/Revistas/Turma3/7.jpg"
import maio8 from "../../assets/Revistas/Turma3/8.jpg"
import maio9 from "../../assets/Revistas/Turma3/9.jpg"
import maio10 from "../../assets/Revistas/Turma3/10.jpg"
import maio11 from "../../assets/Revistas/Turma3/11.jpg"
import maio12 from "../../assets/Revistas/Turma3/12.jpg"
import maio13 from "../../assets/Revistas/Turma3/13.jpg"
import maio14 from "../../assets/Revistas/Turma3/14.jpg"
import maio15 from "../../assets/Revistas/Turma3/15.jpg"
import maio16 from "../../assets/Revistas/Turma3/16.jpg"
import maio17 from "../../assets/Revistas/Turma3/17.jpg"
import maio18 from "../../assets/Revistas/Turma3/18.jpg"
import maio19 from "../../assets/Revistas/Turma3/19.jpg"
import maio20 from "../../assets/Revistas/Turma3/20.jpg"

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
import { useNavigate } from "react-router-dom";

import "./revistas.css"


function MyBook3(props) {
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
            <img alt='revista1' className='revista1-img' src={revista1}/>
        </div>
    </div>

<div className="flipbook-container">
    <div className='vitrine-revistas-1'>
      <HTMLFlipBook className="flipbook" width={500} height={700} showCover={true} onPageChange={(e) => setCurrentPage(e.data)}
        style={{ marginLeft: currentPage === 1 ? "-100px" : "auto", marginRight: currentPage === 20 ? "-100px" : "auto" }}>
        <div style={pageStyle}>
          <img src={maio1} alt="Imagem 1" style={{ width: "100%", height: "100%", marginRight: "200px" }} />
        </div>
        <div style={pageStyle}>
          <img src={maio2} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={maio3} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={maio4} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={maio5} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={maio6} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={maio7} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={maio8} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={maio9} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={maio10} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={maio11} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={maio12} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={maio13} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={maio14} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={maio15} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={maio16} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={maio17} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={maio18} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={maio19} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={pageStyle}>
          <img src={maio20} alt="Imagem 1" style={{ width: "100%", height: "100%" }} />
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

export default MyBook3;
