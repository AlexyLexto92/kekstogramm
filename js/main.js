'use strict';

var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
var pictureContainer = document.querySelector('.pictures');

var efectList = document.querySelector('.effects__list');
var efects = efectList.querySelectorAll('.effects__preview');

var LIKES = {
  MIN: 15,
  MAX: 200,
};

var COMENTSLENGTH = {
  MIN: 0,
  MAX: 140,
};

var COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

var DESCRIBTIONS = [
  'Тестим новую камеру!',
  'Затусили с друзьями на море',
  'Как же круто тут кормят',
  'Отдыхаем...',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
  'Вот это тачка!'
];

var NAMES = [
  'John',
  'Mike',
  'Nike',
  'Alis'
];

function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function getRandomElement(arr) {
  var randomindex = Math.floor(Math.random() * arr.length);
  return arr[randomindex];
}

function uploadImageCloseButton() {
  uploadChangeImageContainer.classList.add('hidden');
}
var uploadImageDescription =document.querySelector('.text__description'); 
function uploadImageCloseEsc(evt) {
  if(evt.target !== uploadImageDescription){
  if (evt.keyCode === 27) {
    uploadChangeImageContainer.classList.add('hidden');
  }
}}

function getPhotos() {
  photos = [];
  for (var i = 0; i < 25; i++) {
    photos[i] = {
      url: 'photos/' + (i + 1) + '.jpg',
      likes: randomInteger(LIKES.MIN, LIKES.MAX),
      comments: getRandomElement(COMMENTS),
      description: getRandomElement(DESCRIBTIONS),
      name: getRandomElement(NAMES),
    };
  }
  return photos;
}
var photos = getPhotos();

function renderPicture(photo) {
  var pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = photo.url;
  return pictureElement;
}
var fragment = document.createDocumentFragment();
for (var i = 0; i <= photos.length - 1; i++) {
  fragment.appendChild(renderPicture(photos[i]));
}
pictureContainer.appendChild(fragment);

var uploadImageContainer = document.querySelector('.img-upload__preview');
var uploadImage = uploadImageContainer.querySelector('img');
//  var uploadImageEffectLevelSlider = document.querySelector('.img-upload__effect-level');
var uploadImageScale = document.querySelector('.img-upload__scale');
var uploadChangeImageContainer = document.querySelector('.img-upload__overlay');
var uploadFileInput = document.querySelector('#upload-file');
uploadFileInput.addEventListener('change', function () {
  uploadChangeImageContainer.classList.remove('hidden');
  // uploadImageEffectLevelSlider.classList.add('hidden');
  uploadImageScale.classList.add('hidden');
});

efects.forEach(function (elem) {
  elem.addEventListener('click', function () {
    elem.cheked = true;
    uploadImage.className = elem.className;
    uploadImage.classList.remove('effects__preview');
  });
});

var closeButton = document.querySelector('.img-upload__cancel');
closeButton.addEventListener('click', uploadImageCloseButton);

document.addEventListener('keydown', uploadImageCloseEsc);