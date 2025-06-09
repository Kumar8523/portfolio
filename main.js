// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    setTimeout(() => {
        document.getElementById('preloader').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('preloader').style.display = 'none';
        }, 500);
    }, 1500);

    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCount();
    });

    // Load Skills Data
    fetch('./assets/json/skills.json')
        .then(response => response.json())
        .then(data => {
            const skillsContainer = document.querySelector('#skills .grid');
            skillsContainer.innerHTML = '';
            
            data.forEach(skill => {
                const skillElement = document.createElement('div');
                skillElement.className = 'flex flex-col items-center';
                skillElement.innerHTML = `
                    <div class="w-20 h-20 rounded-2xl bg-white bg-opacity-5 flex items-center justify-center mb-4">
                        <img src="./assets/images/skills/${skill.icon}" alt="${skill.name}" class="w-10 h-10 object-contain">
                    </div>
                    <h3 class="font-bold">${skill.name}</h3>
                    <div class="w-full bg-white bg-opacity-10 h-1 rounded-full mt-2">
                        <div class="bg-primary h-1 rounded-full" style="width: ${skill.level}%"></div>
                    </div>
                `;
                skillsContainer.appendChild(skillElement);
            });
        });

    // Load Projects Data
    fetch('./assets/json/projects.json')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('projects-container');
            projectsContainer.innerHTML = '';
            
            data.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.className = 'project-card relative rounded-2xl overflow-hidden group';
                projectElement.innerHTML = `
                    <div class="h-64 overflow-hidden">
                        <img src="./assets/images/projects/${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    </div>
                    <div class="absolute bottom-0 left-0 p-6 z-10 w-full">
                        <h3 class="text-xl font-bold mb-1">${project.title}</h3>
                        <p class="text-sm opacity-90 mb-4">${project.description}</p>
                        <div class="flex flex-wrap gap-2">
                            ${project.tags.map(tag => `<span class="text-xs bg-white bg-opacity-10 px-2 py-1 rounded-full">${tag}</span>`).join('')}
                        </div>
                    </div>
                    <a href="${project.link}" class="absolute inset-0 z-20" target="_blank" rel="noopener noreferrer"></a>
                `;
                projectsContainer.appendChild(projectElement);
            });
        });

    // Load Testimonials Data
    fetch('./assets/json/testimonials.json')
        .then(response => response.json())
        .then(data => {
            const testimonialTrack = document.getElementById('testimonial-track');
            testimonialTrack.innerHTML = '';
            
            data.forEach(testimonial => {
                const testimonialElement = document.createElement('div');
                testimonialElement.className = 'testimonial-slide min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-4';
                testimonialElement.innerHTML = `
                    <div class="bg-white bg-opacity-5 p-8 rounded-2xl backdrop-blur-sm h-full">
                        <div class="flex items-center mb-6">
                            <img src="./assets/images/testimonials/${testimonial.avatar}" alt="${testimonial.name}" class="w-12 h-12 rounded-full object-cover mr-4">
                            <div>
                                <h4 class="font-bold">${testimonial.name}</h4>
                                <p class="text-sm opacity-80">${testimonial.position}</p>
                            </div>
                        </div>
                        <p class="opacity-90 mb-6">"${testimonial.comment}"</p>
                        <div class="flex text-yellow-400">
                            ${'<i class="fas fa-star"></i>'.repeat(testimonial.rating)}
                            ${'<i class="far fa-star"></i>'.repeat(5 - testimonial.rating)}
                        </div>
                    </div>
                `;
                testimonialTrack.appendChild(testimonialElement);
            });
            
            // Initialize testimonial slider
            initTestimonialSlider();
        });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('আপনার বার্তা সফলভাবে পাঠানো হয়েছে! আমি শীঘ্রই আপনার সাথে যোগাযোগ করব।');
        contactForm.reset();
    });

    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });

    // Cursor Effects
    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursor-follower');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });
    
    document.querySelectorAll('a, button, .project-card').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.width = '40px';
            cursor.style.height = '40px';
            cursor.style.opacity = '0.5';
            cursorFollower.style.width = '20px';
            cursorFollower.style.height = '20px';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.width = '24px';
            cursor.style.height = '24px';
            cursor.style.opacity = '1';
            cursorFollower.style.width = '12px';
            cursorFollower.style.height = '12px';
        });
    });
});

// Testimonial Slider
function initTestimonialSlider() {
    const track = document.getElementById('testimonial-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const slideWidth = slides[0].offsetWidth;
    let currentPosition = 0;
    let autoSlideInterval;
    
    function moveToSlide(position) {
        track.style.transform = `translateX(-${position}px)`;
        currentPosition = position;
    }
    
    function autoSlide() {
        const maxPosition = track.scrollWidth - track.offsetWidth;
        
        if (currentPosition >= maxPosition) {
            moveToSlide(0);
        } else {
            moveToSlide(currentPosition + slideWidth);
        }
    }
    
    // Start auto sliding
    autoSlideInterval = setInterval(autoSlide, 5000);
    
    // Pause on hover
    track.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    
    track.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(autoSlide, 5000);
    });
}
