class Card {
    constructor(popUp) {
        this.popUp = popUp;
    }

    create(name, link) {
        this.name = name;
        this.link = link;

        this.element = document.createElement('div');
        this.cardImage = document.createElement('div');
        this.deleteButton = document.createElement('button');
        const cardDescription = document.createElement('div');
        const cardName = document.createElement('h3');
        this.likeButton = document.createElement('button');

        this.element.classList.add('place-card');
        this.cardImage.classList.add('place-card__image');
        this.deleteButton.classList.add('place-card__delete-icon');
        cardDescription.classList.add('place-card__description');
        cardName.classList.add('place-card__name');
        this.likeButton.classList.add('place-card__like-icon');

        this.cardImage.style.backgroundImage = `url(${this.link})`;
        cardName.textContent = this.name;

        this.element.appendChild(this.cardImage);
        this.cardImage.appendChild(this.deleteButton);
        this.element.appendChild(cardDescription);
        cardDescription.appendChild(cardName);
        cardDescription.appendChild(this.likeButton);

        this.setEventListener();

        return this.element;
    }

    like(event) {
        event.target.classList.toggle('place-card__like-icon_liked');
    }

    remove(event) {
        event.target.closest('.place-card').remove();
    }

    setEventListener() {
        this.likeButton.addEventListener('click', this.like);
        this.deleteButton.addEventListener('click', this.remove);
        this.cardImage.addEventListener('click', () => { 
            if (event.target.classList.contains('place-card__image')) {
                this.popUp.open();
            } 
        });
    }

}