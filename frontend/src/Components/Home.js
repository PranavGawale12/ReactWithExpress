import {React,useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';


function Home(){

    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err));
    })

  return (
        <div>
            <h2>My Crud App</h2>
            <table className='table'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Quantity</th>
                </tr>
                </thead>
                <tbody>
                {data.map((prd,index)=>(
                    <tr key={index}>
                        <td>{prd.id}</td>
                        <td>{prd.name}</td>
                        <td>{prd.qty}</td>

                        <Link to={`/details/${prd.id}`} className='btn btn-info'>Details</Link>
                        <Link to={`/update/${prd.id}`} className='btn btn-secondary'>Update</Link>
                        <button>Delete</button>
                    </tr>
                ))}
                </tbody>
            </table>
            <Link to='/create' className='btn btn-primary'>create</Link>
        </div>
    )
}

export default Home;