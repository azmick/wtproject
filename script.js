window.onload = function() {
  const roundObject = document.querySelector('.profile-pic');
  const img = roundObject.querySelector('img');
  const infoContainer = document.querySelector('.info-container');
  const container = document.querySelector('.container');
  let originalTop, originalLeft, originalWidth, originalHeight;

  if (roundObject) {
    // Kaynak elemanın orijinal top, left, width ve height değerlerini kaydedin
    originalTop = roundObject.style.top;
    originalLeft = roundObject.style.left;
    originalWidth = roundObject.style.width;
    originalHeight = roundObject.style.height;

    roundObject.addEventListener('click', () => {
      window.scrollTo({
        behavior: 'smooth',
        top: 0,
      });

      // Elemanın konumunu ve boyutunu kaydedin ve orijinal konumuna ve boyutuna göre ayarlayın
      roundObject.classList.toggle('clicked');
      if (roundObject.classList.contains('clicked')) {
        infoContainer.style.display= 'block';
        container.style.display = 'block';
        roundObject.style.top = '125px';
        roundObject.style.left = '695px';
        roundObject.style.width = '150px';
        roundObject.style.height = '150px';
        img.style.width = '150px';
        img.style.height = '150px';
        img.style.borderColor = 'grey'
        img.style.boxShadow = '0px 0px 10px grey';
        roundObject.style.borderColor = 'grey';
        roundObject.style.boxShadow = '0px 0px 10px grey';
      } else {
        infoContainer.style.display= 'none';
        container.style.display= 'none';
        roundObject.style.top = originalTop;
        roundObject.style.left = originalLeft;
        roundObject.style.width = originalWidth;
        roundObject.style.height = originalHeight;
        img.style.width = '';
        img.style.height = '';
        img.style.borderColor = '#00ff00'
        img.style.boxShadow = '0 0 5px rgb(0, 255, 0)';
        roundObject.style.borderColor = '#00ff00';
        roundObject.style.boxShadow = '0 0 5px rgb(0, 255, 0)';
      }
    });

    // Resmin boyutu değiştiğinde, roundObject boyutunu da değiştirin
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'style') {
          roundObject.style.width = img.clientWidth + 'px';
          roundObject.style.height = img.clientHeight + 'px';
        }
      });
    });
    observer.observe(img, { attributes: true });
  }
}
