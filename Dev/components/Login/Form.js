import React from 'react';


class Form extends  React.Component {

    render(){
        <form>
              <label> Usuario:
                   <input type="text" name="user"/>
              </label>
               <label> Clave:
                   <input type="password" name="password"/>
               </label>
         </form>
    }
}


module.exports = Form;


