import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FcEditImage,FcDeleteDatabase } from "react-icons/fc";

const Homje = () => {
const [datamain,upadteddata] = useState([])
const [error,seterror] = useState('')


  const  getapidata = async ()=>{
          try{
            const userdata = await axios.get(`http://localhost:3000/Createuser`)
            upadteddata(userdata.data)
            console.log(userdata.data)
          }catch (err) {
            seterror(err.message)
          }
  }
      useEffect(()=>{
         getapidata();
      },[])

     
      const deletedata = ()=>{

      }

// const deltedata = (id)=>{
// axios.delete(`http://localhost:3000/Createuser/${id}`).then((resdata)=>{
//   console.log(resdata)
// }).catch((errdata)=>{
//   console.log(errdata)
// })
// }




  return (
    <>
      <div className="container">

        <div className="tabledata">
          <Link className='addd' to={'/addblog'} > Create user </Link>
        </div>

        <div className="row justify-content-center">
          <div className="col-10">
            <div className="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Pasword</th>
                    <th scope="col">Confirm Pasword</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
              {
                datamain.map((userdatafinal)=>{
                  const {id,name,email,Paswword,confirmpassowrd}  = userdatafinal
                  return (<>
                        <tr>
                          <th scope="row" key={id} >{id}</th>
                          <td><Link to={`/user/${id}`}>{name} </Link>  </td>
                          <td>{email}</td>
                          <td>{Paswword}</td>
                          <td>{confirmpassowrd}</td>
                          <td>  
                          <Link className='action' onClick={()=>{

                            axios.delete(`http://localhost:3000/Createuser/${id}`).then((resdata)=>{
                              console.log(resdata)
                            }).catch((err)=>{
                              console.log(`your error is ${err} `)
                            })
                          }} > <FcDeleteDatabase/></Link>
                          <Link className='action'  to={`/useredit/${id}`} > <FcEditImage/></Link> </td>
                        </tr>

                  </>)
                })
              }

                </tbody>
              </table>
            </div>


          </div>

        </div>

      </div>
    </>
  )
}

export default Homje