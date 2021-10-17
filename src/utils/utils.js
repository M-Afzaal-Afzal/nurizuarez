export const ctaClickHandler = () => {
    const yOffset = -100;
    const element = document.getElementById('form');
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
}