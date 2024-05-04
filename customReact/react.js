function customRender(reactElemnt,mainContainer){
    /*const domElement = document.createElement(reactElemnt.type);
    domElement.innerHTML = reactElemnt.Child;
    domElement.setAttribute('href', reactElemnt.props.href);
    domElement.setAttribute('target', reactElemnt.props.target);

    mainContainer.appendChild(domElement)
    */
    
    const domElement = document.createElement(reactElemnt.type);
    domElement.innerHTML = reactElemnt.Child;
    for (const prop in reactElemnt.props) {
      if(prop === 'Child') continue;
      domElement.setAttribute(prop,reactElemnt.props[prop]); 
    }
    mainContainer.appendChild(domElement);
}


const reactElemnt = {
    type: 'a',
    props: {
        href: 'https://youtube.com',
        target: '_blank'
    },
    Child: 'click me to visit youtube'
}

const mainContainer = document.querySelector("#root")

customRender(reactElemnt,mainContainer)