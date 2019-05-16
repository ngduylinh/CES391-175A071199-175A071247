funcition createImage(src){
    const image = document.createElement('img');
    image.src = src;
    return image;
}

const albumView = document.querySelector('#album-view');
for (let i = 0;i < PHOTO_LIST.length;i++){
    const photoSrc = PHOTO[i];
    const image = createImage(photoSrc);
    image.addEventListener('click',onThumbnaiClick);
    albumView.appendChild(image);
}