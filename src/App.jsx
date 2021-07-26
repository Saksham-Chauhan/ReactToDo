import React, { useState } from 'react';
import List from './List'

const App = () => {
    const [name,upname]=useState("");
    const [insert,upinsert]=useState([]);

    const update=(event) =>{
        upname(event.target.value);
    }
    const put= ()=>{
        upinsert((old)=>{
            return [...old,name]
        })
        upname("");
    }
    const deleteItems= (id)=>{
        upinsert((old)=>{
            return old.filter((arr,index)=>{
                return index!==id;
            })
        })
    }

    return(
        <>
        <div className='main'>
            <div className='container'>
                <h1>ToDo List</h1>
                <input type='text' placeholder="Enter items" onChange={update} value={name}/>
                <button onClick={put}>+</button>
                <hr/>
                <br/>
                <ol>
                    {insert.map((item,index)=>{
                     return <List
                        ite={item} 
                        key={index}
                        id={index}
                        select={deleteItems}
                      />
                    })
                   }
                </ol>
            </div>
        </div>
        </>
    );
}
export default App;