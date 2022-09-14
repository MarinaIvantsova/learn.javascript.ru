function loadScript(src) {
    return new Promise(function (resolve, reject){
        let script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`))
        document.body.append(script);
    }
    )
  }     

  loadScript("../promiseTasks/script.js").then(() => {
    newFunction();
}, (error) => console.log(`Oшибка: ${error.message}`));
