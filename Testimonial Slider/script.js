let current = 0;
const testimonials = document.querySelectorAll('.testimonal');
const dots = document.querySelectorAll('.dot');

function showTestimonial(index) {
    testimonials.forEach((t, i) => {
        t.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
}

function nextTestimonial() {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        current = i;
        showTestimonial(current);
    });
});

// Cambia cada 5 segundos automáticamente
setInterval(nextTestimonial, 5000);
