import React from 'react';

class HtmlNode extends React.Component{
  
    nav = () =>{
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                         <img src="#" alt="your logos"/>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </div>
                    </div>
                </nav>
        );
    }
    render(){
        let res = null;
        switch(this.props.value){
            case "nav":
                res = this.nav();
                break;
        }
        return (
        <div>
           {res}
        </div>);
    }
}
export default HtmlNode;