// Contact form mail sending functionality using EmailJS
document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');
    var mailStatus = document.getElementById('mailStatus');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            mailStatus.textContent = 'Sending...';

            // Collect form data
            var formData = new FormData(contactForm);
            var data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };

            // Use EmailJS browser API
            emailjs.send('service_4whq4zb', '__ejs-test-mail-service__', {
                from_name: data.name,
                from_email: data.email,
                phone: data.phone,
                subject: data.subject,
                message: data.message,
                to_email: 'priyoghosh02@gmail.com'
            })
            .then(function(response) {
                mailStatus.textContent = 'Message sent successfully!';
                contactForm.reset();
            }, function(error) {
                mailStatus.textContent = 'Failed to send message. Please try again.';
            });
        });
    }
});
// Enable mouse wheel scrolling for the courses table inside the about section
document.addEventListener('DOMContentLoaded', function() {
    var coursesTable = document.querySelector('.courses-box');
    if (coursesTable) {
        coursesTable.addEventListener('wheel', function(e) {
            if (this.scrollHeight > this.clientHeight) {
                e.preventDefault();
                this.scrollTop += e.deltaY;
            }
        }, { passive: false });
    }
});
const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');

const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxes = document.querySelectorAll('.resume-box');

const portfolioLists = document.querySelectorAll('.portfolio-list');
const portfolioBoxes = document.querySelectorAll('.portfolio-box');



// Helper: reset the about section to default (collapsed) state
function resetAbout() {
  const moreInfoEl = document.getElementById('moreInfo');
  const viewBtn = document.getElementById('viewMoreBtn');
  const aboutImg = document.getElementById('aboutImage');
  const aboutContainer = document.getElementById('aboutInfoContainer');
  const desc = document.getElementById('aboutDesc');

  if (!moreInfoEl || !viewBtn || !aboutContainer || !desc) return;

  // hide extra panel
  moreInfoEl.style.display = 'none';
  aboutImg.style.display = 'block';
  aboutContainer.classList.remove('expanded');
  viewBtn.textContent = 'View More';

  // restore description before the moreInfo element
  aboutContainer.insertBefore(desc, moreInfoEl);

  // ensure the button is after the moreInfo element
  if (moreInfoEl.nextSibling) aboutContainer.insertBefore(viewBtn, moreInfoEl.nextSibling);
  else aboutContainer.appendChild(viewBtn);
}

// navbar actions and all section actions along with cube rotation when navbar is clicked
navs.forEach((nav,idx) => {
    nav.addEventListener('click', () => {
        // reset about to default whenever navigating away or between sections
        resetAbout();

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

document.getElementById('googleLink').addEventListener('click', function(e) {
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
const viewMoreBtn = document.getElementById('viewMoreBtn');
const moreInfo = document.getElementById('moreInfo');
const aboutImage = document.getElementById('aboutImage');
const aboutInfo = document.getElementById('aboutInfoContainer');
const aboutDesc = document.getElementById('aboutDesc');

// store original positions so we can restore on collapse
const originalDescParent = aboutDesc.parentNode;
const originalDescNext = aboutDesc.nextSibling;
const originalBtnParent = viewMoreBtn.parentNode;
const originalBtnNext = viewMoreBtn.nextSibling;

viewMoreBtn.addEventListener('click', function(e) {
    e.preventDefault();

    if (moreInfo.style.display === 'block') {
                // Collapse: restore using resetAbout (centralized)
                resetAbout();
    } else {
        // Expand: move the short description into the scrollable more-info area
        moreInfo.style.display = 'block';
        aboutImage.style.display = 'none';
        aboutInfo.classList.add('expanded');
        this.textContent = 'View Less';

        // Prepend the short description at the top of the scrollable area
        moreInfo.insertBefore(aboutDesc, moreInfo.firstChild);

        // Move the button inside the scrollable area so it remains accessible; keep its listener
        moreInfo.appendChild(viewMoreBtn);
    }
});

// Ensure mouse wheel/touchpad scrolling works while pointer is over the .more-info panel.
// Some browsers/transform contexts can prevent default wheel bubbling — capture and manually scroll.
if (moreInfo) {
    moreInfo.addEventListener('wheel', function(e) {
        // only intervene when there's actually overflow
        if (this.scrollHeight > this.clientHeight) {
            e.preventDefault();
            this.scrollTop += e.deltaY;
        }
    }, { passive: false });
}




// visibility for contact section when reloading (cube reloading animation)
setTimeout(()=>{
    sections[4].classList.remove('active');
}, 1500);