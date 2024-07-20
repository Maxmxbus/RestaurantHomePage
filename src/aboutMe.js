const aboutModule = {
    createHero: function () {
        const hero = document.createElement('div');
        hero.classList.add('hero');
        
        const h1 = document.createElement('h1');
        h1.textContent = 'About Us';
        hero.appendChild(h1);

        return hero;
    },
    createHolder: function(){
        const holder = document.createElement("div");
        holder.className = 'holder';
        return holder;
    },
    createTxt: function(head, para){

        const txt = document.createElement('div');
        txt.classList.add('txt');

        //Content
        const h1 = document.createElement('h1');
        h1.textContent = head;
        txt.appendChild(h1);
        
        const p = document.createElement('p');
        p.textContent = para;
        txt.appendChild(p);
        return txt;
    }
}

export default aboutModule;