// ARRAY

const arrText = {
    'image-1': {
        'popup-title' : 'Intrusion Detection',
        'popup-text' : 'Perimeter Intrusion Detection Systems (PIDS) with high-detection levels and low false alarms rates.',
    },
    'image-2': {
        'popup-title' : 'Video Analytic Solutions',
        'popup-text' : 'Intelligent video analysis solutions, based on high-performance software and available in various hardware formats.',
    },
    'image-3': {
        'popup-title' : 'Residencial Beam Towers',
        'popup-text' : 'Protection and illumination of residential areas and homes with elegant aesthetic beam towers.',
        
    },
    'image-4': {
        
        'popup-title' : 'Video Analytic Solutions',
        'popup-text' : 'Intelligent video analysis solutions, based on high-performance software and available in various hardware formats.',
    },
    'image-5': {
        'popup-title' : 'LED Illuminatiors ',
        'popup-text' : 'Powerful and even illumination for reliable detection and deterrence via a range of White-Light and Infra-Red LED illuminators.',
    },
    'image-6': {
        'popup-title' : 'Secure Data Transmission',
        'popup-text' : 'Fully encrypted VPN hardware solution highly recommended for secure video or data streaming over any type of WAN/LAN.',
    },
    'image-7': {
        'popup-title' : 'LPR',
        'popup-text' : 'Licence plate recognition for reliable vehicle access control and advanced parking management.',
    },
    'image-8': {
        'popup-title' : 'Transmission solutions for every environment',
        'popup-text' : 'Reliable, simple and rugged solutions for data and video transmission in any environment.',
    },
    'image-9': {
        'popup-title' : 'Laser Detectors ',
        'popup-text' : 'High-level intrusion detection, more precise and accurate than other detection systems.',
    },
    'image-10': {
        'popup-title' : 'Wireless solutions',
        'popup-text' : 'Wireless long range transmission solutions that operate in the licence-free, 5GHz band providing an Ethernet channel of up to 1.3Gbps aggregate.',
        
    },
}
// VARIABLES
const popup = document.querySelector("#popup");

const popupContainer = document.querySelector(".popup");

const closeBtn = document.querySelector("#closeBtn");

const nodesImages = document.querySelectorAll("img");

// FUNCTIONS

function onClickOpenPopup(e){
    let el = e.toElement.id;

    switch (el) {
        case 'image-ladron':
            setText('image-1');
            break;
        case 'image-residencial':
            setText('image-2');
            break;
        case 'image-hogar':
            setText('image-3');
            break;
        case 'image-cctv':
            setText('image-4');
            break;
        case 'image-idea':
            setText('image-5');
            break;
        case 'image-security':
            setText('image-6');
            break;
        case 'image-parking':
            setText('image-7');
            break;
        case 'image-configuracion':
            setText('image-8')
            break;
        case 'image-detector':
            setText('image-9');
            break;
        case 'image-sign':
            setText('image-10');
            break;
    
        default:
            break;
    }
};


function setText(text) {
    popup.classList.add('open');
    popupContainer.classList.add('present');
        let links = document.querySelectorAll('.text');
            links.forEach(el => {
            el.innerText = arrText[text][el.getAttribute('key')];
        })
}

function closePopup() {
    popupContainer.classList.add('close');

    popup.classList.remove('open');
    popupContainer.classList.remove('present');
    setTimeout(()=>{
        popupContainer.classList.remove('close');
    }, 500)
}

// LISTENERS

nodesImages.forEach(el =>{
    el.addEventListener('click', onClickOpenPopup);
})

popup.addEventListener("click",(e) => {
        if (e.target.matches("#closeBtn") ||
        !e.target.closest(".popup")) {
        closePopup()
        }
    }
)
