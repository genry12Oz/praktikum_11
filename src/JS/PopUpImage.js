export default class PopUpImage {
    constructor() {
        this.container = document.querySelector('.popup');
        this.popUpForm = document.querySelector('.popup__content');
        this.closeButton = document.querySelector('.popup__close');
    }

    open() {
        this.container.classList.add('popup_is-opened');
        this.popUpForm.classList.add('popup__content_hide');

        this.popUpImgContainer = document.createElement('div');
        this.popUpImgContainer.setAttribute('style', 'display: flex');
        this.popUpImgContainer.classList.add('popup__image');

        const backStyle = event.target.getAttribute('style');
        const linkImage = backStyle.split('"');

        this.popUpImage = document.createElement('img');
        this.popUpImage.setAttribute('src', `${linkImage[1]}`);
        this.popUpImage.setAttribute('style', 'max-width: 80wh; max-height: 80vh');

        this.closeButton.classList.remove('popup__close');
        this.closeButton.classList.add('popup__close_image');

        this.container.appendChild(this.popUpImgContainer);
        this.popUpImgContainer.appendChild(this.popUpImage);
        this.popUpImgContainer.appendChild(this.closeButton);

        this.setEventListener();
    }

    close() {
        this.container.classList.remove('popup_is-opened');
        this.container.removeChild(this.popUpImgContainer);
        this.popUpForm.classList.remove('popup__content_hide');
        this.setRemoveEventListener();
        this.popUpForm.appendChild(this.closeButton);
        this.closeButton.classList.remove('popup__close_image');
        this.closeButton.classList.add('popup__close');

        this.setRemoveEventListener();
    }

    setEventListener() {
        this.closeImage = () => this.close();
        this.closeButton.addEventListener('click', this.closeImage);
    }

    setRemoveEventListener() {
        this.closeButton.removeEventListener('click', this.closeImage);
    }

}