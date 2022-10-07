import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Singaluser = () => {
const [mydata,upadted] = useState([]);
const [iserror,seterror] = useState('')
const param = useParams();
const singaluserdata = async()=>{
    try{
        const finaldata =  await axios.get(`http://localhost:3000/Createuser/${param.id}`)
        upadted(finaldata.data)
    }catch(err){
        seterror(err.message)
    }
} 

useEffect(()=>{
    singaluserdata()
},[])


return (<>
        <div className="maindata">
        <h1>Employeid:{mydata.id}</h1>
    <h2>Employename:{mydata.name}</h2>
    <h3>Employeemail:<a href={`mailto: ${mydata.email}`}> {mydata.email}</a></h3>
        </div>
  
</>);
};

export default Singaluser;
