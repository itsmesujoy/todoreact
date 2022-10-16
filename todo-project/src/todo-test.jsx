import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react"
import { FaBeer } from 'react-icons/fa';
import { AiFillDelete, AiOutlineCheck, AiOutlineClose, AiFillEdit } from 'react-icons/ai';

function Todo({ init }) {
    // const [Todo, setTodo] = useState({
    //     details: "",
    //     description: "",
    // })
    const [List, setList] = useState([])
    // let [selectitemId, setselectitemId] = useState(null)

    //data.data

    const myCallback = ()=>{
        console.log('After 10 sec call back worked')
        
    }
    let val = 1
    const timeout = ()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(val === 0 ) reject('invalid')
                else resolve(val)
            }, 2000)
        })
    }


    const _axios = ()=>{
        return new Promise((resolve, reject)=>{
            var xhr = new XMLHttpRequest();
            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    resolve(JSON.parse(this.responseText))
                }
            });

            xhr.open("GET", "http://localhost:3008/todo");
            xhr.send();
        })
    }


    const myget = async () => {
        console.log('before api call')
        // asynchronous
        // no block 


        // let whatisThis = _axios()
        // let whatisThis = axios.get("http://localhost:3008/todo")
        // console.log(whatisThis)

        // let values =  await axios.get("http://localhost:3008/todo")
    
        console.log('after api call')
        for (let i = 0; i <= 5; i++) {
            console.log(i)
        }

        let respons = await _axios()
        console.log(respons)
        // _axios().then((values)=>{
        //     console.log(values)
        // })

        // timeout()
        //     .then((val)=>{
        //         console.log('after api call')

        //         for (let i = 0; i <= 5; i++) {
        //             console.log(i)
        //         }
        //     })
        //     .catch(err=>{
        //         for (let i = 5; i !== 0; i--) {
        //             console.log(i)
        //         }
        //         console.log(err)
        //     })

       
 
    }
    useEffect(() => {
        console.log('fire ???', init)
        myget()
    }, [init])

    return (

        <div>
            <div>
                {List.map((item, index) => {
                    return (
                        <div className="card" key={index}>
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">Details:  {item.details}</h6>

                                <p className="card-text">Description:  {item.description} </p>
                                <h1>STATUS {item.status ? "COMPLETED" : "INCOMPLETE"}</h1>


                            </div>
                        </div>
                    )
                })}</div>
        </div>
    )
}



export default Todo
