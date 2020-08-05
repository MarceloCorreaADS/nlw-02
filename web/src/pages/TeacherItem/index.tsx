import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem (){
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/59809579?s=460&u=1c96cff34ecc10b16aef63b1f0ccd706b53c1106&v=4" alt="Marcelo Corrêa"/>
            <div>
                <strong>Marcelo Corrêa</strong>
                <span>
                    Química
                </span>
            </div>
        </header>
        <p>
            Entusiata das melhores tecnologias de quimica avançada.
            <br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in ex vitae felis faucibus laoreet. 
            Sed nec nulla ut ex vestibulum tempor. In hac habitasse platea dictumst. 
            Aliquam erat volutpat. Aenean non pulvinar diam. Duis eu tincidunt elit, et gravida nisl. 
            Suspendisse imperdiet ullamcorper mi, sed aliquam nibh congue non. Praesent porttitor accumsan vestibulum. 
            Pellentesque turpis tellus, mattis eu ante nec, placerat vestibulum massa. 
            Etiam ante erat, rhoncus eget eros sit amet, rhoncus fringilla magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam at nulla mattis, lobortis felis ut, posuere mauris.
        </p>
        <footer>
            <p>
                Preço/hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
        </footer>
    </article>
    )
}

export default TeacherItem ;