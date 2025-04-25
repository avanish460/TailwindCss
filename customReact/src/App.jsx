import './App.css'

// 1. Create an object for react element that has html anchor data

const anchorElement = {
  type: 'a',
  props: {
    href:'https://google.com',
    target:'_blank',
    innerHTML:'Click me to visit Google'
  }
}

// 2. Create a function that generates html code from reactElement and returns the final html tag

const generateHTMLElm = (htmlElement) => {
  const {type, props} = htmlElement;
  const attributes = Object.keys(props).map((each) => `${each}=${props[each]}`).join(' ');
  // console.log(attributes);
  return `<${type} ${attributes}>${props.innerHTML}</${type}>`
}

// 3. Create a function customRender that takes in the object and the path of html where it will be rendered

const customRender = (htmlObjElement, targetSelector) => {
  const htmlTag = generateHTMLElm(htmlObjElement);
  const rootSelector = document.querySelector(targetSelector);
  
  rootSelector.innerHTML = htmlTag;
}

function App() {

  return (
    <>
      {customRender(anchorElement, '#root')}
    </>
  )
}

export default App
