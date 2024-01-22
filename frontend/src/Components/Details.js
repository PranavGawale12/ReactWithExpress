import {React,useEffect,useState} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function Details(){
    const {id}=useParams();
    const[product,setProduct]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8081/details/'+id)
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err));
    })

    return (
        <div>
            <h2>Details</h2>
            {product.length>0?(
            <table>
                <tr>
                    <td>Id: </td>
                    <td>{product[0].id}</td>
                </tr>
                <tr>
                    <td>Name: </td>
                    <td>{product[0].name}</td>
                </tr>
                <tr>
                    <td>Quantity: </td>
                    <td>{product[0].qty}</td>
                </tr>
            </table>
            ):(<h2>Loading..</h2>)}
        </div>
    )
}

export default Details;