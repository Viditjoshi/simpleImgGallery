import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const name = "Vidit";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/220/300"
ReactDOM.render(
    <>  
    <h1>My Name is {name}</h1>
        <div className='img_container'>
            <img src={img1}/>
            <img src={img2}/>
            <img src={img3}/>
        </div>
    </>,  document.getElementById('root'));
// ReactDOM.render( React.createElement Method 2 to render the element
//   ("h1",null,"Hello World")
//   ,document.getElementById('root'));

// var h1 = document.createElement("h1"); Method 3 to render the element
// h1.innerHTML = "Hello World";
// document.getElementById("root").appendChild(h1);