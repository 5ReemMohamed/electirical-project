
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');

    if(window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll reveal animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
});

// Dynamic year

document.getElementById("footerYear").textContent =
new Date().getFullYear();

// Close mobile navbar after clicking a link

document.querySelectorAll('.navbar .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('.navbar-collapse');
        if(nav.classList.contains('show')) {
            bootstrap.Collapse.getOrCreateInstance(nav).hide();
        }
    });
});

document.getElementById('electricianContactForm')
.addEventListener('submit', function(e) {

    e.preventDefault();

    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const city = document.getElementById('customerCity').value;
    const service = document.getElementById('serviceType').value;
    const message = document.getElementById('customerMessage').value.trim();

    if (!name || !phone || !city || !service || !message) {
        alert('يرجى تعبئة جميع الحقول المطلوبة');
        return;
    }

    if (!/^05[0-9]{8}$/.test(phone)) {
        alert('يرجى إدخال رقم جوال سعودي صحيح');
        return;
    }

    const whatsappMessage =
`السلام عليكم، أريد الاستفسار عن خدمات الكهرباء المنزلية.

الاسم: ${name}
رقم الجوال: ${phone}
المدينة: ${city}
نوع الخدمة: ${service}

تفاصيل الطلب:
${message}`;

    const whatsappURL =
        'https://wa.me/966541879583?text=' +
        encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, '_blank');
      this.reset();


});
const workSwiper = new Swiper(".workSwiper", {
    loop: true,
    speed: 800,
    spaceBetween: 25,
    grabCursor: true,

    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },

    navigation: {
        nextEl: ".work-next",
        prevEl: ".work-prev"
    },

    pagination: {
        el: ".work-pagination",
        clickable: true
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 25
        }
    }
});
