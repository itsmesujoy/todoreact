import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Mytodo() {

    const [todo, setTodo] = useState({ details: "", description: "" })
    const [list, setList] = useState([])
    const [sel,setSel]=useState(null)

    const mysubmit = async (e) => {
        e.preventDefault()
        const data = {
            details: todo.details,
            description: todo.description
        }
        if (sel === null) {
        let values = await axios.post("http://localhost:3008/todo", data)
        console.log(values)}

        else{
              data.id=sel
            let values = await axios.put("http://localhost:3008/todo", data)
        }
        myget()
        myclear()
    }


    const myget = async () => {

        let values = await axios.get("http://localhost:3008/todo")
        console.log(values)
        setList(values.data.data)

    }
    useEffect(() => {

        myget()
    }, [])
    const mydelete=async(id)=>{

        let values = await axios.delete ("http://localhost:3008/todo/"+id)
        console.log(values)
myget()

    }
    const myedit=(item)=>{
        console.log(item)
        setSel(item._id) 
      setTodo({
        ...todo,
        details : item.details,
        description:item.description
    })
    }
    const myclear=()=>{
setTodo({
    ...todo,
    details:"",
    description:""
})

    }

    return (
        <div>
            <input type="text" value={todo.details} placeholder='DETAILS' onChange={(ev) => {
                let temp = { ...todo }
                temp.details = ev.target.value
                setTodo(temp)


            }
            } />
            <input type="text" value={todo.description} placeholder='DESCRIPTION' onChange={(ev) => {
                let temp = { ...todo }
                temp.description = ev.target.value
                setTodo(temp)
            }} />
            <button onClick={mysubmit} >SUBMIT</button>
            <button onClick={myclear} >CLEAR</button>



            <div>  {list.map((item, index) => {

                return (
                    <div className="card" key={index}>
                        <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">Details:  {item.details}</h6>

                            <p className="card-text">Description:  {item.description} </p>
                            
                            <button onClick={()=>mydelete(item._id)}>DELETE</button>
                            <button onClick={()=>{myedit(item)}}>EDIT</button>
                            <h1>STATUS
                                 {item.status == 2 && " Completed"}
                                 {item.status == 1 && " INPROGRESS"}
                                {item.status == 0 && " Todo"}
                            </h1>
                            </div>
                            </div>
                )
            })}
            </div>
        </div>

    )
}

export default Mytodo