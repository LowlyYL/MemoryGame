export const arrImg = ['img/cherry.png', 'img/alpine.png', 'img/black.png', 
                       'img/sunflower.png', 'img/lavender.png', 'img/lotus.png', 
                       'img/mac.png', 'img/rose.png', 'img/lion.png',
                       'img/koala.png', 'img/cow.png', 'img/bee.png',
                       'img/elephant.png', 'img/dog.png', 'img/turtle.png',
                       'img/owl.png', 'img/hen.png',

                       'img/worker.png', 'img/rocket.png', 'img/success.png',
                       'img/break.png', 'img/analysis.png', 'img/idea.png',
                       'img/goal.png', 

                       'img/005-whatsapp.png', 'img/020-plaxo.png', 'img/030-html-5.png',
                       'img/006-vine.png', 'img/021-pinterest.png', 'img/008-twitter.png',
                       'img/029-instagram.png', 'img/004-wikipedia.png', 'img/027-linkedin.png',
                       'img/001-youtube.png'
];

export const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}