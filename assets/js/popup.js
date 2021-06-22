const arrText = {
    'image-1': {
      'popup-title' : 'Wireless solutions',
      'popup-text' : 'Wireless long range transmission solutions that operate in the licence-free, 5GHz band providing an Ethernet channel of up to 1.3Gbps aggregate.',
    },
    'image-2': {
        'popup-title' : 'Video Analytic Solutions',
        'popup-text' : 'Intelligent video analysis solutions, based on high-performance software and available in various hardware formats.',
    },
    'image-3': {
        'popup-title' : 'Transmission solutions for every environment',
        'popup-text' : 'Reliable, simple and rugged solutions for data and video transmission in any environment.',
    },
}

const image1 = document.querySelector('#image-button');
const image2 = document.querySelector('#image-cctv');
const image3 = document.querySelector('#image-configuracion');

const clickBtn = document.querySelectorAll("img");
const popup = document.querySelector("#popup");
const popupContainer = document.querySelector(".popup");

const closeBtn = document.querySelector("#closeBtn");

image1.addEventListener('click', setText.bind(null, 'image-1'));
image2.addEventListener('click', setText.bind(null, 'image-2'));
image3.addEventListener('click', setText.bind(null, 'image-3'));


function setText(text) {
    popup.classList.add('open');
    popupContainer.classList.add('present');
        let links = document.querySelectorAll('.text');
            links.forEach(el => {
            el.innerText = arrText[text][el.getAttribute('key')];
        })
}






// clickBtn.forEach(el =>{

// el.addEventListener('click', () =>{
//     popup.classList.add('open');
//     popupContainer.classList.add('present');
//     })
// });
closeBtn.addEventListener('click', ()=>{

    popup.classList.remove('open');
    popupContainer.classList.remove('present');
});



popup.addEventListener('click', ()=>{
    popupContainer.classList.add('close');

    popup.classList.remove('open');
    popupContainer.classList.remove('present');
    setTimeout(()=>{
        popupContainer.classList.remove('close');
    }, 1000)
});