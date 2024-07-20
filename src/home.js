const HomeModule = {
    createHero: function () {
        const hero = document.createElement('div');
        hero.classList.add('hero');
        

        const h1 = document.createElement('h1');
        h1.textContent = 'Welcome to Thick Brains';
        hero.appendChild(h1);

        const p = document.createElement('p');
        p.textContent = 'We are the best of the best for all those';
        hero.appendChild(p);


        return hero;
    },

    createCard1: function (title, imgSrc) {
        const card = document.createElement('div');
        card.classList.add('card');

        const h3 = document.createElement('h3');
        h3.textContent = title;

        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = 'chocolate brain';
        img.classList.add('img');

        card.appendChild(h3);
        card.appendChild(img);


        return card;
    },
    createCard2: function (title, imgSrc) {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const h3 = document.createElement('h3');
        h3.textContent = title;
        
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = 'chocolate brain';
        img.classList.add('img');

        card.appendChild(img);
        card.appendChild(h3);
        

        return card;
    },
};

export default HomeModule;