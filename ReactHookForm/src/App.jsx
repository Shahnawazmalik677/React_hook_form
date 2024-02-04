import './App.css'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
export default function form(){
  const schema=yup.object().shape({

    fullName:yup.string().required(),
    Email:yup.string().email().required(),
    passWord:yup.string().min(6).required()

  })

  const {register,handleSubmit,formState:{errors}} =useForm({
    resolver:yupResolver(schema)
  });
  const onSubmit=(data)=>{
     console.log(data)
  }

  return (
    <>
     <form className="form"onSubmit={handleSubmit(onSubmit)}>
      <div className="formBox">
        <h3>Login Form</h3>
      <input type="text"  className='input' placeholder="Enter your Email" {...register("Email")}></input>
      <p>{errors.Email?.message}</p>
      <input type="text" className='input' placeholder="Enter your FullName" {...register("fullName")}></input>
      <p>{errors.fullName?.message}</p>
      <input type="text"  className='input' placeholder="Enter your password" {...register("passWord")}></input>
      <p>{errors.passWord?.message}</p>
      <button className='button'>Submit</button>
     </div>
     </form>
    </>  


)
}
