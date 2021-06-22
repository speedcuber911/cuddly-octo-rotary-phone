// For browser

function elementsWithStyle(parent, foundElements, prop, value) {
  if (!parent.children.length) return;
  // console.log(parent);
  Array.from(parent.children).forEach((child, i) => {
    const computedStyles = getComputedStyle(child);
    if (computedStyles[prop] == value) foundElements.push(child);
    elementsWithStyle(child, foundElements, prop, value);
  });
}
function getElementWithStyle(prop, value) {
  const parentNode = document.body;
  const foundElements = [];
  elementsWithStyle(parentNode, foundElements, prop, value);
  console.log(foundElements);
}
getElementWithStyle("font-size", "14px");
