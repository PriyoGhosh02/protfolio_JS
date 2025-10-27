const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');

const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxes = document.querySelectorAll('.resume-box');

const portfolioLists = document.querySelectorAll('.portfolio-list');
const portfolioBoxes = document.querySelectorAll('.portfolio-box');



// navbar actions and all section actions along with cube rotation when navbar is clicked
navs.forEach((nav,idx) => {
    nav.addEventListener('click', () => {
        document.querySelector('.nav-list li.active').classList.remove('active');
        nav.classList.add('active');

        cube.style.transform=`rotateY(${idx* -90}deg)`;

        document.querySelector('.section.active').classList.remove('active');
        sections[idx].classList.add('active');

        const array=Array.from(sections);
        const arrSecs =array.slice(1, -1);
        arrSecs.forEach(arrSecs => {
            if(arrSecs.classList.contains('active')){
                sections[4].classList.add('action-contact');
            }
        });
        if(sections[0].classList.contains('active')){
            sections[4].classList.remove('action-contact')
        }
        });

});

// portfolio and CV download button
document.getElementById('downloadCV').addEventListener('click', function(e) {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = './images/Priyo_Ghosh_CV.pdf';
    link.download = 'Priyo_Ghosh_CV.pdf';
    link.click();
});

document.getElementById('twitterLink').addEventListener('click', function(e) {
    e.preventDefault(); // stops link from navigating
    alert('Opps!! Sorry,No account here!');
});


// resume section when clicking tab-list
resumeLists.forEach((list,idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.resume-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.resume-box.active').classList.remove('active');
        resumeBoxes[idx].classList.add('active');
        });

});


// portfolio section when clicking tab-list
portfolioLists.forEach((list,idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.portfolio-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.portfolio-box.active').classList.remove('active');
        portfolioBoxes[idx].classList.add('active');
        });
});

//about section
// View More toggle
document.getElementById('viewMoreBtn').addEventListener('click', function(e) {
  e.preventDefault();

  const moreInfo = document.getElementById('moreInfo');
  const aboutImage = document.getElementById('aboutImage');
  const aboutInfo = document.getElementById('aboutInfoContainer');

  if (moreInfo.style.display === 'block') {
    // Hide extra info, show image, revert to default layout
    moreInfo.style.display = 'none';
    aboutImage.style.display = 'block';
    aboutInfo.classList.remove('expanded');
    this.textContent = 'View More';
  } else {
    // Show extra info, hide image, center title/desc
    moreInfo.style.display = 'block';
    aboutImage.style.display = 'none';
    aboutInfo.classList.add('expanded');
    this.textContent = 'View Less';
  }
});




// visibility for contact section when reloading (cube reloading animation)
setTimeout(()=>{
    sections[4].classList.remove('active');
}, 1500);