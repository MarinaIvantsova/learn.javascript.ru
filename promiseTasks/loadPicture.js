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
          resolve(request.response);
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
        var imageURL = window.URL.createObjectURL(result);
        img.src = imageURL;
        document.querySelector("body").appendChild(img);
      },
      function (err) {
        console.log(err);
      }
    );
  };
  
  embedImage(new URL('https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F02%2F17%2F21014-Good-old-Fashioned-Pancakes-mfs_002.jpg'));
