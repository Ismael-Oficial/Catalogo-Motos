import './App.css';

import XJ6 from './componentes/imgs/xj6.png';
import Fan160 from './componentes/imgs/fan160.png'
import Factor150 from './componentes/imgs/Factor150.png'
import DR160 from './componentes/imgs/dr160-red.png'
import Fazer250 from './componentes/imgs/Fazer250.png'
import CB250 from './componentes/imgs/cb250.png'
import G310R from './componentes/imgs/G 310 R .png'
import Lander250 from './componentes/imgs/Lander250.png'
import XRE300 from './componentes/imgs/XRE300.png'
import NK150 from './componentes/imgs/NK-150.png'
import About from './componentes/imgs/about.png'
import Feature from './componentes/imgs/feature-planet.png'
import Instagram from './componentes/imgs/instagram.png'
import Facebook from './componentes/imgs/facebook.png'
import YouTube from './componentes/imgs/youtube.png'

function App() {
  return (
    <body>
      <header>
        <div className="content">
          <nav>
            <p className="brand">+Que<strong>Motos</strong></p>
            <ul>
              <li><a href="#catalog">Catalogo</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#features">Serviços</a></li>
              <button>Login</button>
            </ul>
          </nav>
          <div className="header-block">
            <div className="text">
              <h2>O moto perfeita para você</h2>
              <p>
                Conquiste a que sempre sonhou com as melhores ofertas do mercado
              </p>
            </div>
            <img src={XJ6} alt="Moto XJ6" />
          </div>
        </div>
      </header>

      <section className="catalog" id="catalog">
        <div className="content">
          <div className="title-wrapper-catalog">
            <p>Encontre o que você quer</p>
            <h3>Catálogo</h3>
          </div>
          <div className="filter-card">
            <input type="text" className="search-input" placeholder="Escolha o seu modelo favorito" />
            <button className="search-button">Pesquisar</button>
          </div>
          <div className="card-wrapper">
            <div className="card-item">
              <img src={Fan160} alt="Fan 160 Moto" />
              <div className="card-content">
                <h3>Honda 160 Fan 2022</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus.
                </p>
                <button type="button">Eu quero essa!</button>
              </div>
            </div>
            <div className="card-item">
              <img src={Factor150} alt="Factor 150 Moto" />
              <div className="card-content">
                <h3>Yamaha Factor 150 2021</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus.
                </p>
                <button type="button">Eu quero essa!</button>
              </div>
            </div>
            <div className="card-item">
              <img src={DR160} alt="DR 160 Moto" />
              <div className="card-content">
                <h3>Haojue DR 160</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus.
                </p>
                <button type="button">Eu quero essa!</button>
              </div>
            </div>
            <div className="card-item">
              <img src={Fazer250} alt="Fazer 250 Moto" />
              <div className="card-content">
                <h3>Yamaha Fazer 250 2022</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus.
                </p>
                <button type="button">Eu quero essa!</button>
              </div>
            </div>
            <div className="card-item">
              <img src={CB250} alt="CB 250 Moto" />
              <div className="card-content">
                <h3>Honda CB 250F</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus.
                </p>
                <button type="button">Eu quero essa!</button>
              </div>
            </div>
            <div className="card-item">
              <img src={G310R} alt="G 310 R Moto" />
              <div className="card-content">
                <h3>BMW G 310 R 2022</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus.
                </p>
                <button type="button">Eu quero essa!</button>
              </div>
            </div>
            <div className="card-item">
              <img src={Lander250} alt="Lander 250 Moto" />
              <div className="card-content">
                <h3>Yamaha Lander 250</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus.
                </p>
                <button type="button">Eu quero essa!</button>
              </div>
            </div>
            <div className="card-item">
              <img src={XRE300} alt="XRE 300 Moto" />
              <div className="card-content">
                <h3>Honda XRE 300</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus.
                </p>
                <button type="button">Eu quero essa!</button>
              </div>
            </div>
            <div className="card-item">
              <img src={NK150} alt="NK 150 Moto" />
              <div className="card-content">
                <h3>Haojue NK 150</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus.
                </p>
                <button type="button">Eu quero essa!</button>
              </div>
            </div>
          </div>
          <div className="more">
            <button className="btn-more">Ver mais opções</button>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="content">
          <div className="title-wrapper-about">
            <p>Saiba sobre nós</p>
            <h3>Sobre</h3>
          </div>
          <div className="about-content">
            <div className="left">
              <img src={About} alt="About" />
            </div>
            <div className="right">
              <h3>Conheça a historia da +QueMotos</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae ut inventore magni repellendus ab ad itaque facere. A
                tenetur quam, nobis tempore illum laborum ipsa fuga, itaque
                possimus repellat ad perspiciatis, velit reiciendis eos facilis
                sapiente blanditiis quas officia hic beatae quibusdam! Quod
                eligendi porro possimus voluptatum ad ipsum sapiente soluta,
                maiores nobis tenetur adipisci officiis nisi illum quae natus
                nostrum tempora accusantium blanditiis? Rem nesciunt illum
                dolorum, perferendis quos consequatur suscipit cumque fugiat alias
                sint repellat qui adipisci error est distinctio doloribus labore
                sunt modi eos odio quibusdam dicta. Dignissimos voluptate illum
                possimus quo. Ducimus repellat doloribus quisquam quidem?
              </p>
              <br /><br />
              <p>- Lorem ipsum</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="content">
          <div className="title-wrapper-features">
            <p>Veja também nossos serviços</p>
            <h3>Serviços</h3>
          </div>
          <div className="feature-card-block">
            <div className="feature-card-item">
              <img src={Feature} alt="Feature" />
              <div className="feature-text-content">
                <h3>Mecánica</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="feature-card-item">
              <img src={Feature} alt="Feature" />
              <div className="feature-text-content">
                <h3>Seguros</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="feature-card-item">
              <img src={Feature} alt="Feature" />
              <div className="feature-text-content">
                <h3>Pintura</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="feature-card-item">
              <img src={Feature} alt="Feature" />
              <div className="feature-text-content">
                <h3>Instalação de eletronicos</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="feature-card-item">
              <img src={Feature} alt="Feature" />
              <div className="feature-text-content">
                <h3>Peças para vendas</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="feature-card-item">
              <img src={Feature} alt="Feature" />
              <div className="feature-text-content">
                <h3>Regularização de Placas</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="main">
          <div className="content footer-links">
            <div className="footer-company">
              <h4>Compania</h4>
              <h6>Sobre</h6>
              <h6>Contato</h6>
            </div>
            <div className="footer-rental">
              <h4>Outros</h4>
              <h6>Self-Drive</h6>
              <h6>Chauffer-Driven</h6>
              <h6>Help</h6>
            </div>
            <div className="footer-social">
              <h4>Redes Sociais</h4>
              <div className="social-icons">
                <img src={Instagram} alt="Instagram" />
                <img src={Facebook} alt="Facebook" />
                <img src={YouTube} alt="YouTube" />
              </div>
            </div>
            <div className="footer-contact">
              <h4>Contato</h4>
              <h6>+55 11 96731-1534</h6>
              <h6>ismaelchaves2001@outlook.com</h6>
              <h6>Rua Aparecida do Taboado, 1257</h6>
            </div>
          </div>
        </div>
        <div className="last">Página recriada e desenvolvida por Ismael Chaves</div>
      </footer>
    </body>
  );
}

export default App;