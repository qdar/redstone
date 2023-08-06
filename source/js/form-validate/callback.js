const baseSuccessCallback = (event) => {
  event.preventDefault();

  // fetch(document.forms.user.action, {
  //   method: 'POST',
  //   body: JSON.stringify(new FormData(document.forms.user)),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // })
  // .then((response) => response.json())
  // .then((data) => {
  //   console.log(data)
  // })

  let response = fetch(document.forms.user.action, {
    method: 'post',
    body: new FormData(document.forms.user)
  });

  if (response.ok) {
    let result = response.json();
    document.forms.user.querySelectorAll('.error').forEach(el => {
      el.textContent = '';
    })
    if (result['result'] === 'error') {
      const errors = result['error'];
      for (const [key, value] of Object.entries(errors)) {
        document.forms.user.querySelector(`[name="${key}"]`).nextElementSibling.textContent = value;
      }
    } else {
      document.forms.user.reset();
    }
  }

  let form = document.querySelector('.intouch__form');
  form.classList.add("success");

  // const success = document.querySelector('.modal-success');
  // success.classList.add("is-active");

};

const baseErrorCallback = (event) => {
  event.preventDefault();
  // Данный коллбек используется при необходимости выполнить какое-либо действие помимо показа ошибок при попытке отправить неккорректные данные, он не связан с запросами на сервер
};

export const callbacks = {
  base: {
    // Сбросс формы
    reset: true,
    // Таймаут сброса формы
    resetTimeout: 500,
    successCallback: baseSuccessCallback,
    errorCallback: baseErrorCallback,
  },
};
