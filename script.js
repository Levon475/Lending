// 1. Մոբայլ Մենյուի Կառավարում (☰ դառնում է X)
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        // Բացում կամ փակում ենք մենյուն
        navLinks.classList.toggle('active');
        
        // Ստուգում ենք՝ մենյուն բաց է, թե փակ, ու դրանից կախված փոխում ենք նշանը
        if (navLinks.classList.contains('active')) {
            menuToggle.innerHTML = '✕'; // Դարձնում ենք X, երբ բաց է
        } else {
            menuToggle.innerHTML = '☰'; // Վերադարձնում ենք երեք գծիկը, երբ փակ է
        }
    });
}

// 2. FAQ Ակորդեոնի Կառավարում
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question') || item;
    
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});