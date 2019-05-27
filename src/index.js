/*! pls-binding v1.0.0 | (c) Home Plus  | 2019 */
"use strict";
let scope = {};
(function plsDataBinding() {
    let bindingElements = document.querySelectorAll('[pls-binding]'); // get all the elements with the pls-binding attribute
    bindingElements.forEach((element) => { // Iterate all the elements in the document with attribute pls-binding
        let elementAttributeValue = element.getAttribute('pls-binding'); // Get the value of the attribute
        addToScope(elementAttributeValue);
        if (element.type == 'text') {
            element.onkeyup = () => {
                scope[elementAttributeValue] = element.value;
            }
        }
    });

    function addToScope(elementAttributeValue) {
        if (!scope.hasOwnProperty(elementAttributeValue)) { // check if scope has the elementAttribute
            let value;
            Object.defineProperty(scope, elementAttributeValue, {
                get: () => { // This is a getter for the value
                    return value
                },
                set: (newValue) => { //  This is the setter
                    value = newValue;
                    bindingElements.forEach((element) => { // For each element
                        if (element.getAttribute('pls-binding') == elementAttributeValue) { // we will check if has attribute of pls-binding
                            if (element.type == 'text') { // If the element type is text
                                element.value = newValue; // the element value we will be set by newValue
                            } else if (!element.type) { // if there is no "text" type for the element
                                element.innerHTML = newValue; // we will innerHtml the new value to the element
                            }
                        }
                    })
                }
            });
        }
    }
})();
