import {React,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create(){
    const[name,setName]=useState('');
    const[qty,setQty]=useState('')
    const navigate=useNavigate();
    const handelSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:8081/create',{name,qty})
        .then(res=>{navigate('/');})
        .catch(err=>console.log(err));
    }

    const element=(
        <div>
            <form onSubmit={handelSubmit}>
                <table className='table'>
                    <tr>
                        <th>Name: </th>
                        <td><input type='text' onChange={e=>{setName(e.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <th>Quantity: </th>
                        <td><input tyoe="text" onChange={e=>{setQty(e.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <button className='btn btn-success'>Submit</button>
                    </tr>
                </table>
            </form>
        </div>
    )

    return element;
}

export default Create;