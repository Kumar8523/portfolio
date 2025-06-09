// GSAP Animations
document.addEventListener('DOMContentLoaded', function() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero Section Animation
    gsap.from('#hero h1 span', {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    gsap.from('#hero p', {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.6,
        ease: 'power3.out'
    });
    
    gsap.from('#hero a', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        delay: 0.9,
        ease: 'power3.out'
    });
    
    // Section Headers Animation
    gsap.utils.toArray('section').forEach(section => {
        const heading = section.querySelector('h2');
        
        if (heading) {
            gsap.from(heading, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                duration: 0.8,
                y: 50,
                opacity: 0,
                ease: 'power3.out'
            });
        }
    });
    
    // About Section Animation
    gsap.from('#about img', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 75%',
            toggleActions: 'play none none none'
        },
        duration: 1,
        x: -50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    gsap.from('#about .lg\\:w-1\\/2 > *', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 75%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        x: 50,
        opacity: 0,
        stagger: 0.1,
        delay: 0.3,
        ease: 'power3.out'
    });
    
    // Skills Animation
    gsap.utils.toArray('#skills .grid > div').forEach((skill, i) => {
        gsap.from(skill, {
            scrollTrigger: {
                trigger: '#skills',
                start: 'top 75%',
                toggleActions: 'play none none none'
            },
            duration: 0.5,
            y: 30,
            opacity: 0,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });
    
    // Projects Animation
    gsap.utils.toArray('.project-card').forEach((project, i) => {
        gsap.from(project, {
            scrollTrigger: {
                trigger: project,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });
    
    // Contact Form Animation
    gsap.from('#contact form > *', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 75%',
            toggleActions: 'play none none none'
        },
        duration: 0.6,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out'
    });
    
    // Footer Animation
    gsap.from('footer > div > *', {
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out'
    });
});
