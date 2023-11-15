  // Function to animate typing effect
  function typeText(text, index) {
    const animatedText = document.getElementById('animated-text');
    const speed = 35; // Typing speed in milliseconds

    if (index < text.length) {
      animatedText.innerHTML += text.charAt(index);
      index++;
      setTimeout(() => {
        typeText(text, index);
      }, speed);
    }
  }

  // Function to reset the animation
  function resetAnimation() {
    const animatedText = document.getElementById('animated-text');
    animatedText.innerHTML = '';
    startAnimation();
  }

  // Function to start the animation
  function startAnimation() {
    const textToType = "My Name is Trym Larsen";
    typeText(textToType, 0);
  }

  // Initial animation start
  startAnimation();

  // Reset animation on window resize for responsiveness
  window.addEventListener('resize', resetAnimation);