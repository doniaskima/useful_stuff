// Adding an event listener of scroll to the window Object
window.addEventListener('scroll', () => {
    // We select all of the elements we want to manipulate.
    const imageTop = document.querySelector('.img-top');
    const imageMiddle = document.querySelector('.img-middle');
    const imageBottom = document.querySelector('.img-bottom');
    const showcaseData = document.querySelector('.showcase-data');
    // We also need to grap the window scrollY position since we will be moving the elements based on this Number.
    let scrollPositionY = window.scrollY;
    // I create a variable solely for the showcase data styles. This way I don't have to select this element twice to apply 2 different styles.
    // We are going to be using template literals (`${...}`) since it will make the process simpler without having to use too much concatenation. This will allow for mixing plain strings with variables. We are always going to multiply by a very small number. This will slow down the animation. If the animation is too fast you will see the images break.
    // There is no science to the numbers you choose, play around with them until you get a result that works.
    // Notes: A '-' in front of the scrollPositionY variable means the element will move URLSearchParams, if no '-', it means the element will move down.
    let showcaseDataStyles = `
        transform: translateY(${scrollPositionY * .2}%);
        opacity: ${1 - scrollPositionY * 0.002}; 
    `; //We start with the opacity at 1 and then decrease it as we scroll to fade out the text.

    // We set a conditional to check if the scrollY position is less than 600. This way the effect will activate if it is less, if not it will stop. Doing this will avoid seeing the elements moving through the rest of the website content as you scroll down. Alternatively, depending on how you wrap your content, you can also use an overflow of hidden on that main parent so that the showcase images will now show through as you scroll. I still recommend using a conditional, it doesn't matter if the animation stops anyway since at that point it will be out of view.
    if (scrollPositionY < 600) {
        showcaseData.style = showcaseDataStyles;
        imageTop.style.transform = `translateY(${-scrollPositionY * .001}%)`;
        imageMiddle.style.transform = `translateY(${scrollPositionY * .02}%)`;
        imageBottom.style.transform = `translateY(${-scrollPositionY * .04}%)`;
    };
});