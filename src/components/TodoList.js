import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from '../actions/index'

function TodoList() {
    const [inputData, setInputData] = useState('');
    const [toggleSubmit, settoggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);
    const list = useSelector((state) => state.todoReducers.list)
    console.log("list" ,list);
    const disptch = useDispatch()
    console.log("list", list);

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!inputData) {
            alert("please enter value")
        } else if (inputData && !toggleSubmit) {
            // console.log("isEditItem",inputData);
             disptch(editTodo(isEditItem,inputData),setInputData('')
                ,  settoggleSubmit(true),
                  setIsEditItem(null))
        } else {
            disptch(addTodo(inputData), setInputData(''))
        }


    }

    const editData =(id) =>{
        console.log("hii");
        setInputData(list[id].data)
        settoggleSubmit(false);
        setIsEditItem(list[id].id);
        console.log("listid",list[id].id);
    }
    return (
        <>
            <div className='container'>
                <h1>Todo List</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Add Item'
                        onChange={(e) => setInputData(e.target.value)}
                        value={inputData} />

                    {
                        toggleSubmit ? <button type="btn" className="btn-success m-2">Submit</button> :
                            <button type="btn" className="btn-success m-2"  >Update</button>
                    }
                </form>
                <div className=''>
                    <table className="table">
                        <tbody>
                            {
                                list.map((item,index) => {
                                    return (<tr key={item.id}>
                                        <td>{item.data}</td>
                                        <td>  
                                        <button className="btn-success" onClick={() => {
                                        editData(index)
                                    }} >Edit</button>
                                            <button onClick={() => disptch(deleteTodo(item.id))}> Delete
                                        </button></td>
                                    </tr>
                                    )
                                })

                            }



                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default TodoList