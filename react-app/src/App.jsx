import { useState } from 'react'
import './App.css'

function App() {
  const [aba, setAba] = useState('foruns')

  const lancamentos = [
    {
      imagem: '/img/hwleg.jpg',
      genero: 'RPG',
      nome: 'Hogwarts Legacy',
      descricao: 'Um RPG de ação e mundo aberto ambientado no mundo de Harry Potter.',
      nota: '4.8'
    },
    {
      imagem: '/img/cybp2077.jpg',
      genero: 'RPG',
      nome: 'Cyberpunk 2077',
      descricao: 'Uma aventura de mundo aberto em uma cidade futurista.',
      nota: '4.7'
    },
    {
      imagem: '/img/bf6.jpg',
      genero: 'FPS',
      nome: 'Battlefield 6',
      descricao: 'Combates intensos e experiências multiplayer.',
      nota: '4.6'
    },
    {
      imagem: '/img/for6.png',
      genero: 'Corrida',
      nome: 'Forza',
      descricao: 'Velocidade, carros e pistas incríveis.',
      nota: '4.8'
    }
  ]

  const generos = [
    ['RPG', 'sword.png'],
    ['FPS', 'target.png'],
    ['Ação', 'action.png'],
    ['Aventura', 'compass.png'],
    ['Estratégia', 'rook.png'],
    ['Corrida', 'speedometer.png'],
    ['Terror', 'ghost.png'],
    ['Esportes', 'esports.png']
  ]

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <a href="#inicio">
          <img src="/img/logo.png" alt="GameZone" className="logo" />
        </a>

        <nav className="menu">
          <a href="#lancamentos">Jogos</a>
          <a href="#lancamentos">Notícias</a>
          <a href="#comunidade">Comunidade</a>
          <a href="#footer">Sobre</a>
        </nav>

        <div className="header-actions">
          <a href="#">
            <img src="/img/search.png" alt="Pesquisar" />
          </a>

          <a href="#">
            <img src="/img/user.png" alt="Usuário" />
            Usuário
          </a>
        </div>
      </header>

      {/* BANNER */}
      <section className="banner" id="inicio">
        <div className="banner-content">
          <span>Bem vindo à</span>

          <h1>
            Game<span>zone.</span>
          </h1>

          <h2>
            <span>Explore.</span> jogue. Conecte-se.
          </h2>

          <p>
            O seu destino definitivo para descobrir os melhores jogos,
            notícias e uma comunidade apaixonada por games.
          </p>

          <div className="banner-buttons">
            <a href="#lancamentos" className="btn-purple">
              Explorar Jogos &gt;
            </a>

            <a href="#comunidade" className="btn-outline">
              Saiba Mais
            </a>
          </div>
        </div>

        <img
          src="/img/personagem_banner.png"
          alt="Personagem GameZone"
          className="banner-person"
        />
      </section>

      {/* LANÇAMENTOS */}
      <section className="section" id="lancamentos">

        <div className="section-title">
          <img src="/img/fire.png" alt="" />
          <div>
            <span>Confira os</span>
            <h2>Lançamentos</h2>
          </div>
        </div>

        <div className="games-grid">
          {lancamentos.map((jogo) => (
            <article className="game-card" key={jogo.nome}>

              <img
                src={jogo.imagem}
                alt={jogo.nome}
                className="game-image"
              />

              <div className="game-content">
                <span className="badge">{jogo.genero}</span>

                <h3>{jogo.nome}</h3>

                <p>{jogo.descricao}</p>

                <div className="game-info">
                  <span>★ {jogo.nota}</span>

                  <div className="platforms">
                    <img src="/img/win-plat-logo.png" alt="PC" />
                    <img src="/img/ps-plat-logo.png" alt="PlayStation" />
                    <img src="/img/xbox-plat-logo.png" alt="Xbox" />
                  </div>
                </div>
              </div>

            </article>
          ))}
        </div>
      </section>

      {/* GÊNEROS */}
      <section className="genres-section">

        <h2>Qual é seu próximo jogo?</h2>

        <p>
          Encontre experiências baseadas no seu estilo.
        </p>

        <div className="genres-grid">

          {generos.map(([nome, imagem]) => (
            <a href="#lancamentos" className="genre-card" key={nome}>
              <img src={`/img/${imagem}`} alt={nome} />
              <h3>{nome}</h3>
            </a>
          ))}

        </div>

        <a href="#lancamentos" className="btn-outline">
          Veja todos os gêneros &gt;
        </a>

      </section>

      {/* ESTATÍSTICAS */}
      <section className="stats">

        <div className="stat">
          <img src="/img/people.png" alt="" />
          <div>
            <strong>10K+</strong>
            <span>Jogadores<br />ativos</span>
          </div>
        </div>

        <div className="stat">
          <img src="/img/console.png" alt="" />
          <div>
            <strong>500+</strong>
            <span>Jogos<br />disponíveis</span>
          </div>
        </div>

        <div className="stat">
          <img src="/img/newspaper.png" alt="" />
          <div>
            <strong>1K+</strong>
            <span>Notícias<br />publicadas</span>
          </div>
        </div>

        <div className="stat">
          <img src="/img/trophy.png" alt="" />
          <div>
            <strong>50+</strong>
            <span>Torneios<br />realizados</span>
          </div>
        </div>

      </section>

      {/* COMUNIDADE */}
      <section className="community" id="comunidade">

        <div className="community-hero">

          <span>Fóruns · Grupos · Enquetes</span>

          <h2>
            Comunidade <strong>Gamezone.</strong>
          </h2>

          <p>
            Fóruns, grupos e enquetes para falar de jogos
            com outros jogadores.
          </p>

          <div className="community-stats">

            <div>
              <img src="/img/newspaper.png" alt="" />
              <strong>128</strong>
              <span>Tópicos no fórum</span>
            </div>

            <div>
              <img src="/img/people.png" alt="" />
              <strong>14</strong>
              <span>Grupos ativos</span>
            </div>

            <div>
              <img src="/img/trophy.png" alt="" />
              <strong>6</strong>
              <span>Enquetes da semana</span>
            </div>

          </div>

        </div>

        {/* ABAS */}
        <div className="community-tabs">

          <button
            className={aba === 'foruns' ? 'active' : ''}
            onClick={() => setAba('foruns')}
          >
            💬 Fóruns
          </button>

          <button
            className={aba === 'grupos' ? 'active' : ''}
            onClick={() => setAba('grupos')}
          >
            👥 Grupos
          </button>

          <button
            className={aba === 'enquetes' ? 'active' : ''}
            onClick={() => setAba('enquetes')}
          >
            📊 Enquetes
          </button>

        </div>

        {/* FÓRUNS */}
        {aba === 'foruns' && (

          <div className="community-content">

            <h3>Fóruns da comunidade</h3>

            <div className="forum-list">

              <article>
                <div className="avatar">G</div>

                <div>
                  <h4>Qual jogo vocês estão jogando atualmente?</h4>
                  <p>
                    Compartilhe suas experiências e recomendações
                    com outros jogadores.
                  </p>
                  <small>24 respostas · há 2 horas</small>
                </div>
              </article>

              <article>
                <div className="avatar">R</div>

                <div>
                  <h4>Melhores jogos de RPG</h4>
                  <p>
                    Qual RPG você considera indispensável
                    para qualquer jogador?
                  </p>
                  <small>18 respostas · há 5 horas</small>
                </div>
              </article>

              <article>
                <div className="avatar">J</div>

                <div>
                  <h4>O que vocês esperam dos próximos lançamentos?</h4>
                  <p>
                    Vamos conversar sobre os jogos mais aguardados.
                  </p>
                  <small>32 respostas · ontem</small>
                </div>
              </article>

            </div>

            <button className="btn-purple community-button">
              Criar novo tópico
            </button>

          </div>
        )}

        {/* GRUPOS */}
        {aba === 'grupos' && (

          <div className="community-content">

            <h3>Grupos da comunidade</h3>

            <div className="groups-grid">

              <article className="group-card">
                <span>🎮</span>
                <h4>Gamers Brasil</h4>
                <p>
                  Grupo para conversar sobre jogos em geral.
                </p>
                <strong>1.240 membros</strong>
                <button>Entrar no grupo</button>
              </article>

              <article className="group-card">
                <span>⚔️</span>
                <h4>RPG Lovers</h4>
                <p>
                  Para quem ama RPG, histórias e mundos fantásticos.
                </p>
                <strong>842 membros</strong>
                <button>Entrar no grupo</button>
              </article>

              <article className="group-card">
                <span>🏎️</span>
                <h4>Players de Corrida</h4>
                <p>
                  Compartilhe pistas, carros e experiências.
                </p>
                <strong>516 membros</strong>
                <button>Entrar no grupo</button>
              </article>

            </div>

          </div>
        )}

        {/* ENQUETES */}
        {aba === 'enquetes' && (

          <div className="community-content">

            <h3>Enquetes da semana</h3>

            <div className="poll-card">

              <h4>Qual gênero você mais joga?</h4>

              <label>
                <input type="radio" name="poll" />
                RPG
              </label>

              <label>
                <input type="radio" name="poll" />
                FPS
              </label>

              <label>
                <input type="radio" name="poll" />
                Ação
              </label>

              <label>
                <input type="radio" name="poll" />
                Aventura
              </label>

              <button className="btn-purple">
                Votar
              </button>

            </div>

          </div>
        )}

      </section>

      {/* FOOTER */}
      <footer id="footer">

        <div className="footer-brand">

          <img src="/img/logo.png" alt="GameZone" />

          <p>Conectando jogadores.</p>
          <p>Criando histórias.</p>
          <p>Construindo o futuro dos games.</p>

          <div className="social">
            <img src="/img/discord.png" alt="Discord" />
            <img src="/img/instagram.png" alt="Instagram" />
            <img src="/img/twitter.png" alt="Twitter" />
            <img src="/img/youtube.png" alt="YouTube" />
          </div>

        </div>

        <div>
          <h3>Navegação</h3>
          <a href="#inicio">Início</a>
          <a href="#lancamentos">Jogos</a>
          <a href="#comunidade">Comunidade</a>
          <a href="#footer">Sobre</a>
        </div>

        <div>
          <h3>GameZone</h3>
          <a href="#lancamentos">Reviews</a>
          <a href="#lancamentos">Próximos lançamentos</a>
          <a href="#comunidade">Comunidade</a>
        </div>

        <div>
          <h3>Fique por dentro</h3>

          <p>
            Receba as últimas notícias e lançamentos
            em primeira mão!
          </p>

          <div className="newsletter">
            <input
              type="email"
              placeholder="Seu e-mail"
            />
            <button>
              <img src="/img/send.png" alt="Enviar" />
            </button>
          </div>

        </div>

      </footer>

    </div>
  )
}

export default App