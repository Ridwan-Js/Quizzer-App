export default class UI_ControllerClass {
    createElement(tagName = null) {
        return document.createElement(tagName)
    }
    setAttributes(element, attribute, attributeValue) {
        element.setAttribute(attribute, attributeValue)
    }
    getAttribute(element, attributeName) {
        return element.getAttribute(attributeName);
    }
    getElements(selector) {
        return document.querySelectorAll(selector)
    }
    attachElements(parent, children) {
        parent.append(children)
    }
    attachText(element, text) {
        element.innerText = text;
    }
    addEventListener(element, event, fn) {
        element.addEventListener(event, fn)
    }
}