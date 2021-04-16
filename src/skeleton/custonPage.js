import React from 'react';
import HtmlNode from  '../components/html';
import ReactDOMServer from 'react-dom/server';

// this is the left side that will get the component
// for get the all widget from component -----------
// the widget will be the component ----------------
class CustonPage extends React.Component{
   
    onDropFunction=(e)=>
    {   // delete the if condition and use the switch later ... 
        // remove the innerHTML for image 
         var elementToCreatedName  = sessionStorage.getItem("elementToCreate"),
            elementCreated        = document.createElement(elementToCreatedName),
            nodeText              = "Type some text here";  
        
        // make condition to chek if it is p or h ...
        if(elementToCreatedName.indexOf("P") > -1 ||
           elementToCreatedName.indexOf("H") > -1
        ){
            elementCreated.innerHTML = nodeText;
            elementCreated.contentEditable = "true";
        }else if( elementToCreatedName.indexOf("NAV") > -1){
             elementCreated           =  document.createElement("DIV");
             elementCreated.innerHTML = ReactDOMServer.renderToString(<HtmlNode value="nav"/>);
        }
        else{
            if(document.querySelectorAll(".finger_select")){
                let el = document.querySelectorAll(".finger_select");
                for(let i  = 0; i <= el.length -1; i++){
                    el[i].style.border ="none";
                    el[i].tabIndex ="0";
                }
                
             elementCreated.className = "finger_select";
            };
            elementCreated.style.border = "1px solid blue";
            elementCreated.style.padding = "10px"; 
            elementCreated.style.minHeight = "40px";
        }
        //elementCreated.setAttribute("tab","0");
        e.target.appendChild(elementCreated);
        
    }
    onDragOverFunction = (e)=>{
        e.preventDefault();
    }
    onFocusFnc =(e)=>{
        if(document.querySelectorAll(".finger_select")){
            let el = document.querySelectorAll(".finger_select");
            for(let i  = 0; i <= el.length -1; i++){
                el[i].style.border ="none";
            }
        }
        e.target.style.border ="1px solid blue";
        if(!e.target.parentElement)
        {
          e.target.parentElement.style.border = "1px solid blue";
        }
    }
    render(){
        return(
            <article
             onDrop       ={this.onDropFunction}  
             onDragOver   ={this.onDragOverFunction}
             onFocus      = {(event)=>this.onFocusFnc(event)}
             id           ="body"
             style = {{
                 height:"100%"
              
             }}
             >
            </article>
        );
    }
}
export default CustonPage;