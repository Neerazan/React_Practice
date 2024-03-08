function customRender(reactElement, container) {
    const domelement = document.createElement(reactElement.type);
    domelement.innerHTML = reactElement.children;

    domelement.setAttribute("href", reactElement.props.href);
    domelement.setAttribute("target", reactElement.props.target);
    container.appendChild(domelement);
}

const reactElement = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank",
    },
    children: "Click me to visit google.",
};

const mainContainer = document.querySelector("#root")
customRender(reactElement, mainContainer)