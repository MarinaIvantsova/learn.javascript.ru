function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));
        document.body.append(script);
    })
}

loadScript('/promiseChain/script1.js')
.then(() => loadScript('/promiseChain/script2.js'))
.then(() => loadScript('/promiseChain/script3.js'))
.then(() => {
    one();
    two();
    three();
})