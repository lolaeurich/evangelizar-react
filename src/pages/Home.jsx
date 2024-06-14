
import React, { useState } from 'react';
import axios from 'axios';
import "./styles/Home.css"
import logo from "../assets/Home/logo.svg"
import face from "../assets/Home/face.png"
import insta from "../assets/Home/insta.png"
import ytb from "../assets/Home/ytb.png"
import heart from "../assets/Home/heart.png"
import perfil from "../assets/Home/perfil.png"
import logo2 from "../assets/Home/logo2.png"
import facefooter from "../assets/Home/face-footer.png"
import instafooter from "../assets/Home/insta-footer.png"
import ytbfooter from "../assets/Home/ytb-footer.png"
import hx from "../assets/Home/hx.png"
import arrow from "../assets/Home/arrow.png"
import lupa from "../assets/Home/lupa.png"
import down from "../assets/Home/down.png"
import bg from "../assets/Home/bg.png"
import eye from "../assets/Home/eye.png"
import arrow2 from "../assets/Home/arrow2.png"
import line from "../assets/Home/line.png"

import { useNavigate } from "react-router-dom";

function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    const payload = {
      email,
      password,
      associado: true
    }

    const response = await axios.post('https://arearestritaevangelizar.belogic.com.br/api/login', payload)
    const { token } = response.data.authorization 
    
    //todo: armazenar token.
    localStorage.clear()
    localStorage.setItem('token', token)

    setEmail("")
    setPassword("")

    navigate("/areaLogada")
    
    setEmail("")
    setPassword("")

    navigate("/areaLogada")
  }

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/areaLogada`; 
    navigate(path);
  }

    const handleButtonClick = () => {
    // Redireciona para o site desejado quando o botão é clicado
    window.location.href = 'https://doar.evangelizarepreciso.com.br/doacoes-site';
};

const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
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
        <div className="menu-superior1">
          <div className='sociais'>
            <img className="menu-superior-img" alt="" src={logo} />
            <div className='social-line'>
              <img className="social-icon" alt="" src={face}/>
              <img className="social-icon" alt="" src={insta} />
              <img className="social-icon" alt="" src={ytb}/>
              <p className='follow'>Siga-nos</p>
            </div>
          </div>

          <div className='btns-nav'>
            <div className='botoes'>
              <button className="donationok" onClick={handleButtonClick} href="https://doar.evangelizarepreciso.com.br/doacoes-site">
                  <img className="span-btn" alt="" src={heart} />
                  <span>Faça sua doação</span>
              </button>
              <button className="donation4" onClick={() => navigateToPage('doacoes.html')}>Seja um associado</button>
            </div>
            <div className='entrar-perfil'>
              <p className='entrar'>Entrar</p>
              <img className='foto-perfil' alt='' src={perfil}></img>
          </div> 
          </div> 
        </div>
      </div>

      {/*CONHEÇA A OBRA */}
      <div className='nav2'>
        <ul className='nav2-ul'>
          <li className='nav2-item'>
            <p>Conheça a Obra</p>
            <img alt='' src={down} style={{alignSelf: "center"}}/>
          </li>
          <li className='nav2-item'>Eventos</li>
          <li className='nav2-item'>
            <p>Orações</p>
            <img alt='' src={down} style={{alignSelf: "center"}}/>
          </li>
          <li className='nav2-item'>Rede Evangelizar</li>
          <li className='nav2-item'>Notícias</li>
          <li className='nav2-item'>
            <p>Projetos Sociais</p>
            <img alt='' src={down} style={{alignSelf: "center"}}/>
          </li>
          <li className='nav2-item'>Turma do Manzottinho</li>
            <li className='nav2-item'>
            <p>Jesus das Santas Chagas</p>
            <img alt='' src={down} style={{alignSelf: "center"}}/>
          </li>
          <li className='nav2-item'>
            <p>Fale Conosco</p>
            <img alt='' src={down} style={{alignSelf: "center"}}/>
          </li>
          <li className=''><img alt='' src={line} style={{height: "40px"}}/></li>
          <img alt='' className='lupinha' src={lupa}/>
        </ul>
      </div>

      {/*MAIN*/}
       <div className='principal'>
          <div className='entrar2'>
            <h3 className='h3'>Entrar</h3>
            <input className='input' type='email' name="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
            <div className='input-container'>
              <input className='input' type={showPassword ? 'text' : 'password'} value={password} name="senha" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
              <img   className="eye-icon"
              alt="Toggle Password Visibility"
              src={eye}
              onClick={togglePasswordVisibility} />
            </div>
            <p className='p1'>Esqueceu sua senha? <span className='clique'>Clique aqui</span></p>
            <button className="btn" onClick={handleLogin}>
                <span>Entrar</span>
                <img className="arrow2" alt="" src={arrow2} />
            </button>
            <p className='p2'>Não tem cadastro? Crie uma conta, é grátis! <span style={{textDecoration: "underline", color: "#2C72DC"}}>Criar conta</span></p>
          </div>
          <div className='img-banner'>
            <p className='bg-p'>
              A Associação Evangelizar é Preciso conta com a sua doação para manter e concretizar a 
              missão de evangelizar pelos meios de comunicação. A Obra apoia várias instituições de ação 
              social com um trabalho de acolhimento, recuperação e inclusão. Preservar essa estrutura 
              significa evangelizar na Palavra, na oração e no serviço.
            </p>
            <button className='bg-btn'>Seja um associado</button>
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

export default Home;
