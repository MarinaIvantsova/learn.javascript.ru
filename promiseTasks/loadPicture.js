const loadImage = (url) => {
    return new Promise(function (resolve, reject) {
      // Открываем новый XHR
      var request = new XMLHttpRequest();
      request.open("GET", url);
  
      // После загрузки запроса
      // проверяем, был ли он успешным
      request.onload = function () {
        if (request.status === 200) {
          // Если успешный, то резолвим промис
          resolve(request.responseURL);
        } else {
          // Если нет, то реджектим промис
          reject(Error("Произошла ошибка. Код ошибки:" + request.statusText));
        }
      };
  
      request.send();
    });
  };
  
  const embedImage = (url) => {
    loadImage(url).then(
      function (result) {
        const img = new Image();
        var imageURL = result;
        img.src = imageURL;
        img.width = 550;
        document.querySelector("body").appendChild(img);
      },
      function (err) {
        console.log(err);
      }
    );
  };
  
  embedImage(new URL("https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"));
