// контейнер где хранятся карточки
const container = document.querySelector('.places-list');

// работа с сервером
const api = new Api(config);

// инстансы классов
const popUpImage = new PopUpImage();
const card = new Card(popUpImage);
const cardList = new CardList(container, card, api);
const userInfo = new UserInfo(api);
const popUp = new PopUp(userInfo, cardList);
const formValidator = new FormValidator(userInfo, cardList, popUp);