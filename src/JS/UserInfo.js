export default class UserInfo {
    constructor(api) {
        this.container = document.querySelector('.popup');
        this.popUpButton = document.querySelector('.popup__button');
        this.form = document.querySelector('.popup__form');

        this.userName = document.querySelector('.user-info__name');
        this.userAbout = document.querySelector('.user-info__job');
        this.userAvatar = document.querySelector('.user-info__photo');

        this.api = api;

        this.getUserInfo();
    }

    setUserInfo(type) {
        return (type === 'name') ? this.userName.textContent : this.userAbout.textContent;
    }

    updateUserInfo(nameValue, aboutValue) {
        this.api.updateInfo(nameValue, aboutValue)
            .then(res => {
                this.userName.textContent = res.name;
                this.userAbout.textContent = res.about;
        })
            .then(() => this.close())
    }

    // работа с сервером
    getUserInfo() {
        this.api.getInfo()
            .then(res => {
                this.userName.textContent = res.name;
                this.userAbout.textContent = res.about;
                this.userAvatar.style.backgroundImage = `url(${res.avatar})`;
            });
    }

    // закрытие формы
    close() {
        this.container.classList.remove('popup_is-opened');
        this.popUpButton.classList.remove('popup__button_edit');
        this.popUpButton.classList.remove('popup__button_content');
        this.popUpButton.classList.remove('popup__button_valid');
        this.form.removeAttribute('name');
    }
}

