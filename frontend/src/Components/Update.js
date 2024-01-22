import {React,useEffect,useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Update(){

    const[name,setName]=useState('');
    const[qty,setQty]=useState('');

    const element=(
        <div>
            <form onSubmit={handleUpdate}>            
                <table>
                <tr>
                    <td>Name</td>
                    <td><input type="text" onChange={e=>{setName(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <td>Quantity</td>
                    <td><input type="text" onChange={e=>{setQty(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <button className="btn btn-success">Update</button>
                </tr>
            </table>
            </form>

        </div>
    )
}

export default Update;