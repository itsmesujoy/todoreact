import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react"
import { FaBeer } from 'react-icons/fa';
import { GrInProgress } from 'react-icons/gr';
import Inprogress from './components/inprogress';
import Completed from './components/completed';
import Incomplete from './components/incomplete';
import { AiFillDelete, AiOutlineCheck, AiOutlineClose, AiFillEdit } from 'react-icons/ai';


function Todo() {
    const [Todo, setTodo] = useState({
        details: "",
        description: "",
    })
    const [List, setList] = useState([])
    let [selectitemId, setselectitemId] = useState(null)
    const mysubmit = async (e) => {

        e.preventDefault()
        console.log(Todo.details === "", Todo.details === undefined)
        if (Todo.details === "" || Todo.details === undefined) {
            alert('Details field is required')
            return
        }
        if (Todo.description === "" || Todo.description === undefined) {
            alert("description field is required")
            return
        }
        const data = {
            details: Todo.details,
            description: Todo.description
        }

        console.log('selectitemId', selectitemId)
        if (selectitemId === null) {
            let values = await axios.post("http://localhost:3008/todo", data)
            console.log(values)
        }
        else {
            data.id = selectitemId
            console.log('selectitemId 2', selectitemId)
            let values = await axios.put("http://localhost:3008/todo", data)
            console.log(values)
        }

        myget()
        clear()
    }
    //data.data

    const myget = async () => {
        let values = await axios.get("http://localhost:3008/todo")
        console.log(values)
        let data = values.data.data
        setList(data)
    }
    useEffect(() => {
        myget()
    }, [])

    const mydelete = async (id) => {
        let value = await axios.delete("http://localhost:3008/todo/" + id)
        console.log(value)
        myget()
    }

    const markincomplete = async (item) => {
        const data = {
            id: item._id,
            details: item.details,
            description: item.description,
            status: 0
        }
        let value = await axios.put("http://localhost:3008/todo", data)
        console.log(value)
        myget()
    }

    const markcomplete = async (item) => {
        const data = {
            id: item._id,
            details: item.details,
            description: item.description,
            status: 2
        }

        let value = await axios.put("http://localhost:3008/todo", data)
        console.log(value)
        myget()
    }
    const markinprogress = async (item) => {
        const data = {
            id: item._id,
            details: item.details,
            description: item.description,
            status: 1
        }
        let value = await axios.put("http://localhost:3008/todo", data)
        console.log(value)
        myget()
    }




    const todoedit = (item) => {
        console.log(item)
        setselectitemId(item._id)
        setTodo({
            ...Todo,
            details: item.details,
            description: item.description
        })
    }

    const clear = () => {
        setselectitemId(null)
        setTodo({
            ...Todo,
            details: "",
            description: ""
        })
    }

    return (

        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <div className='title text-secondary ' >
                MY TO DO LIST
            </div><br />

            <div className='typebox'>
                <br /><br />
                <input type="text" placeholder='TYPE EVENT' value={Todo.details} onChange={(ev) => {
                    let temp = { ...Todo }
                    temp.details = ev.target.value
                    setTodo(temp)
                }} />
                <br /><br />
                <input type="text" placeholder='DESCRIPTION' value={Todo.description} onChange={(ev) => {
                    let temp = { ...Todo }
                    temp.description = ev.target.value
                    setTodo(temp)
                }} />

                <br /><br />
                <button className='btn btn-primary' onClick={mysubmit}>Submit </button>
                <button className='btn btn-secondary ml-2' onClick={clear}>Cancel </button>

                {/* <input type="button" className='btn btn-primary' value="submit" /> */}
            </div>


            <div>
                {
                    // List.map((item, index) => {
                    // return (
                    // <div className="card" key={index}>
                    //     <div className="card-body">
                    //         <h6 className="card-subtitle mb-2 text-muted">Details:  {item.details}</h6>

                    //         <p className="card-text">Description:  {item.description} </p>
                    //         <h1>STATUS
                    //             {item.status == 2 && " Completed"}
                    //             {item.status == 1 && " INPROGRESS"}
                    //             {item.status == 0 && " Todo"}
                    //         </h1>

                    //         <button className='btn btn-danger' onClick={() => mydelete(item._id)}><AiFillDelete /></button>

                    //         {/*  */}


                    //         {item.status == 2 && <button className='btn btn-warning ml-2' onClick={() => markincomplete(item)}><AiOutlineClose /></button>}
                    //         {item.status == 0 && <button className='btn btn-primary ml-2' onClick={() => markinprogress(item)}><GrInProgress /></button>}


                    //         {item.status == 1 && <div>
                    //             <button className='btn btn-success ml-2' onClick={() => markcomplete(item)}><AiOutlineCheck /></button>
                    //             <button className='btn btn-warning ml-2' onClick={() => markincomplete(item)}><AiOutlineClose /></button>
                    //         </div>}
                    //         <button href="#" className='btn btn-primary ml-2' onClick={() => todoedit(item)}><AiFillEdit /></button>

                    //     </div>
                    // </div>
                    // )
                    // })
                }
            </div>
            <div className='row'>

                <div className='col-md-4'>
                    <h1>TODO</h1>
                    {List.map((item, index) => {
                        if (item.status === 0) {
                            return <Incomplete key={'incomplete'+ index} markinprogress={markinprogress} Todo={Todo} item={item} />
                        }
                    })}
                </div>
                <div className='col-md-4'>
                    <h1>IN PROGRESS</h1>
                    {List.map((item, index) => {
                        if (item.status === 1) {
                            return <Inprogress key={'in' + index} markcomplete={markcomplete} markincomplete={markincomplete} Todo={Todo} item={item} />
                        }
                    })}
                </div>
                <div className='col-md-4'>
                    <h1>COMPLETED</h1>
                    {List.map((item, index) => {
                        if (item.status === 2) {
                            return <Completed key={'hhh' + index} markincomplete={markinprogress} Todo={Todo} item={item} />
                        }
                    })}
                </div>
            </div>
        </div>

    )
}



export default Todo
