class CardList {
    constructor(container, card, api) {
        this.container = container;
        this.card = card;
        this.api = api;

        this.render();
    }

    addCard(name, link) {
        this.container.appendChild(this.card.create(name, link));
    }

    // работа с сервером
    render() {
        this.api.getCards()
            .then(res => {
                res.forEach(obj => {
                    let name = obj.name;
                    let link = obj.link;

                    this.addCard(name, link);
                })
            });
    }
}