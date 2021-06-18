/*const imageSlider = document.querySelector('#chicken');


const btn01 = document.querySelector('#realChicken1');
const btn02 = document.querySelector('#realChicken2');
const btn03 = document.querySelector('#realChicken3');
const btn04 = document.querySelector('#realChicken4');
const btn05 = document.querySelector('#realChicken5');
const btn06 = document.querySelector('#realChicken6');
const btn07 = document.querySelector('#realChicken7');
const btn08 = document.querySelector('#realChicken8');
const btn09 = document.querySelector('#realChicken9');

btn01.addEventListener('click', moveA);
btn02.addEventListener('click', moveB);
btn03.addEventListener('click', moveC);
btn04.addEventListener('click', moveD);
btn05.addEventListener('click', moveE);
btn06.addEventListener('click', moveF);
btn07.addEventListener('click', moveG);
btn08.addEventListener('click', moveH);
btn09.addEventListener('click', moveI);

// 첫번째 이미지로 이동합니다
function moveA()
{
    imageSlider.style.transform = 'translate(0px)';
}

// 두번째로
function moveB()
{
    imageSlider.style.transform = 'translate(-400px)';
}

//세번째로
function moveC()
{
    imageSlider.style.transform = 'translate(-800px)';
}

//네번째로
function moveD()
{
    imageSlider.style.transform = 'translate(-1200px)';
}

//다섯번째로
function moveE()
{

}

//여섯번째로
function moveF()
{

}

//일곱번째로
function moveG()
{

}

//여덟번째로
function moveH()
{

}

//아홉번째로
function moveI()
{

} 

function resultFun(x) {
    var positionLeft = x.clientX;
    var positionTop = x.clientY;

    document.getElementById('menuMargin').style.left = positionLeft - 10 + "px";
    document.getElementById('menuMargin').style.top = positionTop - 10 + "px";
}

if (document.addEventListener) {
    document.addEventListener("mousemove", resultFun);
} else if (document.attachEvent) {
    document.attachEvent("onmousemove", resultFun)
}