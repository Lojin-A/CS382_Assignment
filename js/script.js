 let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const slideCounter = document.getElementById('currentSlide');

        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            
            if (n >= totalSlides) {
                currentSlide = totalSlides - 1;
            } else if (n < 0) {
                currentSlide = 0;
            } else {
                currentSlide = n;
            }

            slides[currentSlide].classList.add('active');
            slideCounter.textContent = currentSlide + 1;

            prevBtn.disabled = currentSlide === 0;
            nextBtn.disabled = currentSlide === totalSlides - 1;
        }

        function changeSlide(direction) {
            showSlide(currentSlide + direction);
        }

        // Home button function
        function goToHome() {
            window.open('https://github.com/Lojin-A/CS382_Assignment/blob/main/index.html', '_blank');
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') changeSlide(-1);
            if (e.key === 'ArrowRight') changeSlide(1);
        });

        // Initialize
        showSlide(0);