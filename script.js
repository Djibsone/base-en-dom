//SELCTEURS
//document.querySelector('h4').style.background = 'yellow'
//const balise = document.querySelector('h4');

//click event
const clickEvent = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const res = document.querySelector('p');


clickEvent.addEventListener("click", () => {
    clickEvent.classList.toggle("click-Event");
});

btn1.addEventListener("click", () => {
    res.classList.add("show-res");
    res.style.background = "green"
});

btn2.addEventListener("click", () => {
    res.classList.add("show-res");
    res.style.background = "red"

});

/* <div> > #id > .class > baliseHTML */

//-----------------------------------------------------
//Mouse events
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)"
})

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)"
    mousemove.style.border = "2px solid teal"
})

clickEvent.addEventListener("mouseenter", () => {
    clickEvent.style.background = "rgba(0,0,0,0.6)";
});

clickEvent.addEventListener("mouseout", () => {
    clickEvent.style.background = "pink";
});

res.addEventListener("mouseover", () => {
    res.style.transform = "rotate(2deg)";
});


//---------------------------------------------------------------------------
//keypress event

const keypressEvent = document.querySelector('.keypress');
const key = document.getElementById('key');
//const h2 = document.querySelector('h2');

 
//fonction permettant de jouer dynamiquement des #ts audios
const ring = (key) => {
    const audio = new Audio();
    audio.src = key + '.mp3';
    console.log(audio.src);
    audio.play();
};

document.addEventListener("keypress", (e) => {
    key.textContent = e.key;

    if (e.key === 'v') {
        keypressEvent.style.background = "green";
    } else if(e.key === 'j') {
        keypressEvent.style.background = "yellow";
        //jh2.style.color = "black";
    } else {
        keypressEvent.style.background = "red";
    }

    //if (e.key === 's') ring(e.key);
});

//-------------------------------------------------------------------------
//Scroll event

const nav = document.querySelector('nav');

window.addEventListener("scroll", () => {

    if (window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
});


//--------------------------------------------------------------------------------
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector('select');
const form = document.querySelector('form');
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
   pseudo = e.target.value; 
});

select.addEventListener("input", (e) => {
    language = e.target.value;
    console.log(language); 
 });

 form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (cgv.checked) {
        document.querySelector('form > div').innerHTML = `
            <h3>Pseudo : ${pseudo}</h3>
            <h4>Langage préféré : ${language}</h4>
        `;
    } else {
       alert('Veuillez accepter les CGV');
    }
 });


 //-----------------------------------------------------------------
 //load event
 window.addEventListener('load', () => {
    //console.log('oui');
 });

 //-------------------------------------------------------------------
 //forEach
 //const boxes = document.getElementsByClassName('box'); pas très propre
 const boxes = document.querySelectorAll('.box');

 boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        e.target.style.transform = "scale(0.7)";
    })
 });

 //---------------------------------------------------------------------
 // addEventListener Vs onclick
//  document.body.onclick = () => {
//     console.log('click');
//  };

 // Bubbling => fin (de base l'eventlistener par Bubbling)
//  document.body.addEventListener("click", () => {
//     console.log('clik 1');
//  }, false);

  // Usecapture
//   document.body.addEventListener("click", () => {
//     console.log('clik 2');
//  }, true);


 //-----------------------------------------------------------------------
 //stop propagation
//  clickEvent.addEventListener("click", (e) => {
//     alert('ok');
//     e.stopPropagation();
//  });


 //-------------------------------------------------------------------------
 // BOM
//  console.log(window.innerHeight);
//  console.log(window.scrollY);
//  window.open("http://google.com", "cours js", "height=600, width=800");
//  window.close()

//  les evenements adossés à window
// alert('hello');

//  confirm
btn2.addEventListener("click", () => {
    confirm('Voullez-vous vraiment vous tromper ?');
});

// prompt
btn1.addEventListener("click", () => {
    let nom = prompt("Entrez votre nom");
    clickEvent.innerHTML += "<h3>Bravo " + nom + "</h3>"
});

// timer, compt à rebour
setTimeout(() => {
    clickEvent.style.borderRadius = "300px";
}, 2000);

// let interval = setInterval(() => {
//     document.body.innerHTML +=`
//     <div class='box'>
//         <h2>Nouvelle boite !</h2>
//     </div>
//     `;
// }, 1000);

// document.body.addEventListener("click", (e) => {
//     e.target.remove();
//     clearInterval(interval);
// });

//  location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);

// location.replace("http://lequipe.fr");

// window.onload = () => {
//     location.href = "http://twitter.fr"
// };

//  navigator
// console.log(navigator.userAgent);

//history
// console.log(history);
// window.history.back();
// history.go(-2);

//-----------------------------------------------------------
// setProperty
window.addEventListener("mousemove", (e) => {
    nav.style.setProperty('--x', e.layerX + "px");
    nav.style.setProperty('--y', e.layerX + "px");
});


//-----------------------------------------------------------
//  showPassword and masqePassword
const inputPassword = document.querySelector('input[type="password"]');
const btnAffiche = document.querySelector(".affiche");
const btnMasque = document.querySelector(".masque");

//  affiche password
btnAffiche.addEventListener("click", () => {
    inputPassword.type = "text";
    btnMasque.style.visibility = "visible";
    btnAffiche.style.visibility = "hidden"
});

//  masque password
btnMasque.addEventListener("click", () => {
    inputPassword.type = "password";
    btnMasque.style.visibility = "hidden";
    btnAffiche.style.visibility = "visible"
})