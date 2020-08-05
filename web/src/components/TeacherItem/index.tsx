import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/19557339?s=460&u=57d07fbe9fc4261f2ca749d21a5728708cf6212c&v=4"
          alt="Walicen"
        />
        <div>
          <strong>Walicen Dalazuana</strong>
          <span>Desenvolvedor</span>
        </div>
      </header>
      <p>
        Entusiasta de novas tecnologias em computação quantica.
        <br /> <br />
        Ficcionado em mudar a vida de pessoas com tecnologia, ama compartilhar
        conhecimento e trocar 'figurinhas' sobre assuntos de programação e
        filmes.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 500,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
