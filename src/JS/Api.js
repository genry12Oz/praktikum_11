export default class Api {
    constructor(config) {
        this.config = config;
    }

    methodApi(url, options) {
      return fetch(url, options)
             .then(res => {
                if (res.ok) {
                  return res.json();
                }
                return Promise.reject(res.status)
             })
             .catch(err => {
                  console.log(err);
             })
  }

    getInfo() {
      return this.methodApi(this.config.infoUrl, this.config.options);
  }

    getCards() {
      return this.methodApi(this.config.cardsUrl, this.config.options);
  }

  updateInfo(nameValue, aboutValue) {
    return fetch(this.config.infoUrl, {
      method: 'PATCH',
      headers: {
        authorization: 'cbb262b1-dd93-4685-a69f-8e082b08e5ce',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: nameValue,
        about: aboutValue
      })
    })
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.status)
        }
        return res.json();
      }).catch(err => {
        console.log(err);
      })
  }
}