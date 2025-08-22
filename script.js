const hDOM = document.querySelector('.hours');
const minDOM = document.querySelector('.minutes');
const sDOM = document.querySelector('.seconds');


function clock() {
    const date = new Date();

    let h = date.getHours();
    let min = date.getMinutes();
    let s = date.getSeconds();

    h = h < 10 ? '0' + h : h;
    min = min < 10 ? '0' + min : min;
    s = s < 10 ? '0' + s : s;

    hDOM.textContent = h;
    minDOM.textContent = min;
    sDOM.textContent = s;

    setTimeout(clock, 1000);
}

clock();
