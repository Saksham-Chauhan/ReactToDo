import React from 'react';

const List = (props) =>{
  
    return (
     <>   
        <i 
        className="fa fa-times" 
        aria-hidden="true"
        onClick={()=>{
            props.select(props.id);
        }}
        ></i>
        <li>{props.ite}</li>
        <br/>
     </>   
     );
    
}
export default List;