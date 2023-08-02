import React, { useState } from 'react';
import ToDo from './ToDo';

const App = () => {
    const [Input, setInput] = useState("");
    const [List,setList]=useState([]);

    const inputEvent = (event) => {
        setInput(event.target.value);
    };

    const addItem=()=>{
        setList((fetchItems)=>{
            return[...fetchItems,Input];
        })
        setInput('');
    }

    const deleteItems=(id)=>{
        console.log("Deleting");

        setList((fetchItems)=>{
            return fetchItems.filter((arrElem,index)=>{
                return index!==id;
            })
        })
    }

    return (
        <>
            <div className="main_div">
                <div className='center_div'>
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type='text' placeholder='Add any Item' value={Input} onChange={inputEvent} />
                    <button onClick={addItem}> + </button>
                    <ol>
                        {/* <li>{Input}</li> */}
                        {List.map((ListVal,index)=>{
                            return <ToDo key={index} id={index} text={ListVal} onSelect={deleteItems}/>;
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}

export default App;