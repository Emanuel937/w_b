import React, { createElement } from 'react';
import WidgetByCategory         from '../components/collapseWidget';
import ListOfCategory           from '../components/categoryList'
class Collapse extends React.Component{
    constructor(pros){
        super(pros);
    }
    
    mouseOutWidget = (e)=>{
     e.target.style.color = "#a8a6a6";
    }
    hideDefautStudio = (e)=>{
        let defaultScreen = document.getElementById("default");
        let divSelect     =  document.getElementById(e);
        defaultScreen.style.display = "none";
        divSelect.style.display     = "block";
    }
    startDragFnc = (elementToCreate)=>{
        if (typeof(Storage) !== "undefined") {
            // Store
            sessionStorage.setItem("elementToCreate", elementToCreate);
        } else {
            alert("Sorry, your browser does not support Web Storage...");
        }
    }                     
    showWidgetFromGroud = (categoria, elementType = null)=>{
        let widgetContente = " ";
          return   Object.keys(WidgetByCategory).map(
               keys =>
                  Object.keys(WidgetByCategory[keys]).map(
                    key =>
                    (  <div className="flexWidth"> 
                       { keys == categoria &&
                        <div 
                            className          ="card  searchCard"  
                            draggable          = "true"
                            onDragStart        = {()=>this.startDragFnc(WidgetByCategory[keys][key][2])} 
                           
                            >
                            <div className     ="card-body text-center">
                                <h1 className  ="h6">
                                    <i className = {WidgetByCategory[keys][key][0]} ></i>
                                 </h1>
                                <p>{WidgetByCategory[keys][key][1]}</p>
                            </div>
                        </div>
                        }
                        </div>
                    )
                 )
           ) 
       }
    orderWidget = ()=>{
        const categories = ListOfCategory;
        return (
            <div id="widgetStyle">
                {
                 categories.map
                 (category => 
                 <div>                    
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                            <p className="accordion-button" type="button" 
                               data-bs-toggle="collapse" 
                               data-bs-target={"#"+category} 
                               aria-expanded="true" aria-controls="collapseOne">
                               {category}
                            </p>
                            </h2>
                            <div id={category} className ="accordion-collapse collapse show"
                                 aria-labelledby         ="headingOne" 
                                 data-bs-parent          ="#accordionExample">
                                <div className           ="accordion-body">
                                 {/** make if condition to show the widget by category group */}
                                   <div className              ="inlineWidget">
                                       {this.showWidgetFromGroud(category)}
                                    </div>
                                  {/* the end of widget */}
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
                  )
                }
            </div>
          );
    }
    render(){
      return this.orderWidget();
    }
}
export default Collapse;