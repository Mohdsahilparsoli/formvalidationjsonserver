import axios from "axios"
import { useFormik } from "formik"
import { useParams } from "react-router-dom"
import {singupschema} from "../schema"

const Updateuser = () => {
  const initialValuess= {
    name:"sahil",
    email:"sahil@gmail.com",
    Paswword:"sahil123",
    confirmpassowrd:"sahil123"
  }

const userid =  useParams();


  const {values ,errors ,handleBlur ,touched,handleChange,handleSubmit ,} = useFormik({
  initialValues:initialValuess,
  validationSchema:singupschema,
  onSubmit: async (values)=>{
    try{
      await axios.put(`http://localhost:3000/Createuser${userid.id}`,values);
    }catch(err){
      console.log(err)
    }
  }

})

return (
<>
<div className="body">

<div className="container">

<div className="row justify-content-center align-items-center">
  <div className="shingup">
  <div className="col 12 col-sm-12 col-md-10 col-xl-6 col-xl-10 col-xxl-10">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
      <div className="formdata">
        <h1> Registration User</h1>
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae iste, magni quo perspiciatis, id veniam atque accusamus saepe enim </p>
        
        <form onSubmit={handleSubmit}>
          <div className="sumbit">
            <label htmlFor="name">Name*</label>
            <input autoComplete="off" type="text"
             placeholder="Please enter name" 
             id="name" 
             name="name"
             value={ values.name}
             onChange={handleChange}
             onBlur = {handleBlur}
             />
          {errors.name && touched.name ? ( <p>{errors.name}</p>):null }  
          </div>
          <div className="sumbit">
            <label htmlFor="email">Email*</label>
            <input autoComplete="off" type="email"
              placeholder="Please enter email  adress"
              id="email" 
              name="email" 
              value={values.email}
              onChange={handleChange}
              onBlur = {handleBlur}
            />
            {errors.email && touched.email ? (<p>{errors.email}</p>):null }

          </div>

          <div className="sumbit">
            <label htmlFor="Password">Paswword*</label>
            <input autoComplete="off" 
            type="Password" 
            placeholder="Please enter Password"
             name="Paswword"
              id="Password"
              value={values.Paswword}
              onChange={handleChange}
              onBlur = {handleBlur}
            />
            {errors.Paswword && touched.Paswword ? (<p>{errors.Paswword}</p>):null }

            
          </div>


          <div className="sumbit">
            <label htmlFor="confirmpassowrd">Confirmpassowrd*</label>
            <input autoComplete="off"
             type="Password"
              placeholder="Please Confirm Passowrd" 
               name="confirmpassowrd" 
               id="confirmpassowrd"
               value={values.confirmpassowrd}
               onChange={handleChange}
               onBlur = {handleBlur}
            />
           
            {errors.confirmpassowrd && touched.confirmpassowrd ? ( <p>{errors.confirmpassowrd}</p>):null }

          </div>


         <div className="sumdata">
          <button type="submit">Submit</button>
         </div>



        </form>

      </div>


        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <div className="formimg">
            <img src="https://cdn.pixabay.com/photo/2015/07/17/22/44/student-849828_960_720.jpg" className="img-fluid" alt="form img" />
          </div>


        </div>
      </div>
  </div>
  </div>

</div>
</div>

</div>




</>
  )
}

export default Updateuser;