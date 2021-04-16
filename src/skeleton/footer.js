import React from 'react';

class Footer extends React.Component{
    render(){
        return (
            <div>
                  <p id="footerIcon">
                    <span>
                        <i class="fas fa-eye">
                        </i>
                    </span>
                    <span>
                       <i class="fas fa-save"></i>
                    </span>
                </p>
                <p className="text-center text-primary font-weigth-bold"> Finger &copy; by Emanuel Abizimi</p>
              
            </div>
        )
    }
}


export default Footer;