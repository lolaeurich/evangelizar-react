import React, { useState } from 'react';
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
                <li className="barra-text">Produtos que Evangelizam</li>
                </ul>
            </div>

            {/* MENU SUPERIOR */}
            <div class="nav">
                    <div class="menu-superior">
                        <div class="menu-sanduiche">
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                        </div>
                        <img class="menu-superior-img" alt="" src={logo}/>
                        <h4 class="menu-superior-h4">Área Restrita</h4>
                    </div>  
                    <img class="lupa" alt="" src={lupa}/>  
            </div>

               {/* BANNER */}
            <div className='revista-main'>
                <div className='revista-text'>
                    <img alt='revista' className='icon-revista' src={revista} />
                    <h2 className='revista-h2'>Jornal do Evangelizador</h2>
                    <p className='revista-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit placerat iaculis. Fusce fermentum nisi et finibus tincidunt. Maecenas nec orci at velit commodo convallis sit amet eget mauris. Phasellus mattis dui vitae egestas feugiat. Pellentesque posuere porttitor purus eget volutpat. Phasellus ligula enim, venenatis in condimentum quis, tincidunt quis turpis.</p>
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
                <div className='revista-solo'>
                  <img alt='revista11' className='revista1' src={pag1}/>
                  <p className='revista-legenda'>Abril 2024 - edição n° 199</p>
                  <button className="btn-ver-revista2" onClick={routeChange9}>
                      <img className="btn-ver-revista-icon" alt="" src={eye} />
                      <p>Visualizar</p>
                  </button>
                </div>  

                <div className='revista-solo'>
                <img alt='revista1' className='revista1' src={pag2}/>
                  <p className='revista-legenda'>Maio 2024 - edição n° 44</p>
                  <button className="btn-ver-revista2" onClick={routeChange10}>
                      <img className="btn-ver-revista-icon" alt="" src={eye} />
                      <p>Visualizar</p>
                  </button>
                </div> 

                <div className='revista-solo'>
                <img alt='revista1' className='revista1' src={pag3} />
                  <p className='revista-legenda'>Junho 2024 - edição n° 45</p>
                  <button className="btn-ver-revista2" onClick={routeChange11}>
                      <img className="btn-ver-revista-icon" alt="" src={eye} />
                      <p>Visualizar</p>
                  </button>
                </div> 
               
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