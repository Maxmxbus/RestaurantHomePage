const menu = {
    villain: function(){
        const villain = document.createElement('div');
        villain.classList.add('villain');

        return villain;
    },
    board: function(image, heading){
        const board = document.createElement('div');
        board.classList.add('board');

        const img = document.createElement('img');
        img.src = image;
        img.classList.add('img');
        board.appendChild(img);

        const h1 = document.createElement('h1');
        h1.textContent = heading;
        board.appendChild(h1);

        return board;
    },
}

export default menu;