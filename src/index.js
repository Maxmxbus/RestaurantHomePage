import _ from 'lodash';
import './style.css';
import HomeModule from './home.js';
import aboutModule from './aboutMe.js';
import menu from './menu.js';

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const aboutBtn = document.getElementById('about');
const clearBtn = document.getElementById('clear');

const content = document.getElementById('content');

const defaultPage =function(){
    content.appendChild(HomeModule.createHero());

    content.appendChild(HomeModule.createCard1('Card 1', 'https://plus.unsplash.com/premium_photo-1669068929118-04e028778ffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'));
    content.appendChild(HomeModule.createCard2('Card 2', 'https://images.unsplash.com/photo-1721137287642-43b251bd6f00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8'));
    content.appendChild(HomeModule.createCard1('Card 1', 'https://plus.unsplash.com/premium_photo-1669068929118-04e028778ffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'));
    content.appendChild(HomeModule.createCard2('Card 2', 'https://images.unsplash.com/photo-1721137287642-43b251bd6f00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8'));
    content.appendChild(HomeModule.createCard1('Card 1', 'https://plus.unsplash.com/premium_photo-1669068929118-04e028778ffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'));
    content.appendChild(HomeModule.createCard2('Card 2', 'https://images.unsplash.com/photo-1721137287642-43b251bd6f00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8'));
}

homeBtn.addEventListener('click', () => {
    content.innerHTML = '';

    content.appendChild(HomeModule.createHero());

    content.appendChild(HomeModule.createCard1('Card 1', 'https://plus.unsplash.com/premium_photo-1669068929118-04e028778ffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'));
    content.appendChild(HomeModule.createCard2('Card 2', 'https://images.unsplash.com/photo-1721137287642-43b251bd6f00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8'));
    content.appendChild(HomeModule.createCard1('Card 1', 'https://plus.unsplash.com/premium_photo-1669068929118-04e028778ffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'));
    content.appendChild(HomeModule.createCard2('Card 2', 'https://images.unsplash.com/photo-1721137287642-43b251bd6f00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8'));
    content.appendChild(HomeModule.createCard1('Card 1', 'https://plus.unsplash.com/premium_photo-1669068929118-04e028778ffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'));
    content.appendChild(HomeModule.createCard2('Card 2', 'https://images.unsplash.com/photo-1721137287642-43b251bd6f00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8'));
})

aboutBtn.addEventListener('click', () => {
    content.innerHTML = '';

    content.appendChild(aboutModule.createHero());

    let x = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat consequatur dignissimos reiciendiscumque quia quidem sed officiis, at deserunt recusandae harum debitis quod libero ipsam temporamagni eveniet esse molestias ? '

    const holerP = content.appendChild(aboutModule.createHolder());
    holerP.appendChild(aboutModule.createTxt('Heading', x));
    holerP.appendChild(aboutModule.createTxt('Heading', x));
    holerP.appendChild(aboutModule.createTxt('Heading', x));
    holerP.appendChild(aboutModule.createTxt('Heading', x));
})

menuBtn.addEventListener('click', () => {
    content.innerHTML = '';

    const villain = content.appendChild(menu.villain());
    villain.appendChild(menu.board('https://plus.unsplash.com/premium_photo-1669068929118-04e028778ffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8', '$45'));
    villain.appendChild(menu.board('https://plus.unsplash.com/premium_photo-1669068929118-04e028778ffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8', '$45'));
    villain.appendChild(menu.board('https://plus.unsplash.com/premium_photo-1669068929118-04e028778ffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8', '$45'));
    villain.appendChild(menu.board('https://plus.unsplash.com/premium_photo-1669068929118-04e028778ffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8', '$45'));
    villain.appendChild(menu.board('https://plus.unsplash.com/premium_photo-1669068929118-04e028778ffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8', '$45'));
    villain.appendChild(menu.board('https://plus.unsplash.com/premium_photo-1669068929118-04e028778ffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8', '$45'));

})
defaultPage();