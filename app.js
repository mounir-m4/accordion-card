const accordionItems = document.querySelectorAll('.accordion-item');

// 1. select each item
accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.accordion-heading');

  // 2. Select each header click
  accordionHeader.addEventListener('click', () => {
    //console.log('clicked');
    // 7. Create a variable
    const openItem = document.querySelector('.accordion-open');

    // 5. Call the item toggle function
    toggleItem(item);

    // 8. Validar si existe la clase
    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

// 3. Create a constant type function
const toggleItem = (item) => {
  // 3.1 Create a variable
  const accordionContent = item.querySelector('.accordion-content');

  // 6. If there is another element that contains the accordion-open class that removes its class
  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style');
    item.classList.remove('accordion-open');
  } else {
    // 4. Add the maximum height of the content
    accordionContent.style.height = '2rem';
    accordionContent.style.display = 'block';
    accordionContent.style.transition = '0.5s';
    item.classList.add('accordion-open');
  }
};
