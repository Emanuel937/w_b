import React from 'react';
import Collapse from '../components/collapseTitle';
import Footer from './footer';
class Leftside extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            timer:1
        }
    }
    mainScript =(e)=>{
        let defaultScreen = document.getElementById("default");
        let divSelect     =  document.getElementById(e);
        let hideDiv       = document.querySelectorAll(".hideDiv");
       
        for(let i = 0; i <= hideDiv.length -1; i++){
           hideDiv[i].style.display = "none";
        }
        if(this.state.timer % 2){
            defaultScreen.style.display = "none";
            divSelect.style.display     = "block";
        }else if(e == "default"){
            defaultScreen.style.display = "block"; 
        }
        else{
            defaultScreen.style.display  = "block";
            divSelect.style.display      = "none";
        }
    }
    elementClickble  = (e)=>{
        this.mainScript(e);
        this.state.timer++;
    }
    removeSearchIcon = (event)=>{
        let fingerI = document.getElementById("finger");
        if(event.value == false || event.value == " " || document.activeElement === event){
            fingerI.style.display ="none";
         }else{
            fingerI.style.display ="block";
         }
    }
    searchWidget =(e)=>{
        // remove the removeSearchIcon function over down ...
        let inputV   = e.target,
           searchFOr = document.querySelectorAll(".searchCard"),// search on this div same element.
           contentOf = null;
        this.removeSearchIcon(inputV);
        for(let i = 0; i <= searchFOr.length -1; i++){
            contentOf = searchFOr[i].textContent;
            contentOf = contentOf.toLowerCase();
            if(contentOf.indexOf(inputV.value.toLowerCase()) > -1){
                searchFOr[i].style.display = "block";
            }else{
                searchFOr[i].style.display = "none";
            }
        }
    }
    render(){
        return(
            <div id="leftContainer">
                <div className="row pl"  id="leftSide">
                    <div className="col-md-2">
                        <i className="fas fa-bars" 
                           onClick = {()=>this.elementClickble("divIconLeft")} 
                         >
                         </i>
                    </div>
                    <div className="col-md-8">
                        <h1><i className="fas fa-american-sign-language-interpreting"></i> Finger - Builder</h1>
                    </div>
                    <div className="col-md-2"  onClick = {()=>this.elementClickble("default")}><i className="fas fa-dice-six"></i></div>
                </div>
                <div id="default">
                    <div className="row text-center" id="element">
                        <p className="col-md-6"  onClick = {()=>this.elementClickble("default")}>Element</p>
                        <p className="col-md-6"  onClick = {()=>this.elementClickble("global")}>Global</p>
                    </div>
                    {/** the input for search the widget  */}
                    <div  className="width_div">
                      <input className="form-control" placeholder= "Search the widget ..." onKeyDown = {this.searchWidget}/> 
                      <i className="fas fa-search" id="finger"></i>
                    </div>
                    <div className="collapseContainer width_div">
                        {/** all collapse element come here  */}
                        <Collapse/>
                        <Footer/>
                    </div>
                </div>
                {/** this is the left div */}
                <div className="hideDiv" id="divIconLeft">
                </div>
                  {/** this is the global div */}
                <div className="hideDiv" id="global">
                    
                </div>
                  {/** this is the definition */}
                  <div className="hideDiv" id="definition">
                     <p className="row text-center font-weight-bold">
                         <span className="col-md-4">
                            <i class="fas fa-layer-group"></i><br></br>
                             Mise en Forme
                         </span>
                         <span class="col-md-4">
                            <i class="fas fa-file-code"></i><br></br>
                             style
                         </span>
                         <span class="col-md-4">
                             Avancé<br></br>
                             <i class="fas fa-cogs"></i>
                         </span>
                     </p>
                  </div>
            </div>
        );
    }
}

export default Leftside;