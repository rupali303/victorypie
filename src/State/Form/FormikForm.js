// import { useFormik } from 'formik'
// import React from 'react'

// function FormikForm() {

// const formik = useFormik({
//     initialValues:{
//         username :"",
//         email : "",
//         password : ""

//     },
//     onSubmit : (values)=>{
// console.log(values);
//     },
//     validate : (values) =>{
//         let errors = {}

//         if (!values.username) {
//             errors.username = "required"

//         }else if(values.username < 8){
//             errors.username = "Must be 8 characters or less"
//         }

//         if (!values.password) {
//             errors.password = "required"

//         }
//         return errors

//     }
// })



//     return (
//         <>
//             <form onSubmit={formik.handleSubmit}>
//                 <div>
//                     <label>Username</label>
//                     <input type='text' name='username' value={formik.values.username} onChange={formik.handleChange}/>
//                 </div>
//                 <div>
//                     <label>Email</label>
//                     <input type='email' name='email' value={formik.values.email} onChange={formik.handleChange}/>
//                 </div>
//                 <div>
//                     <label>Password</label>
//                     <input type='password' name='password' value={formik.values.password} onChange={formik.handleChange}/>
//                 </div>
//                 <div>
//                     <button type='submit'>Submit</button>
//                 </div>
//             </form>
//         </>
//     )
// }

// export default FormikForm
import { useFormik } from 'formik'
import React from 'react'

function FormikForm() {

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate: (values) => {
            let errors = {}

            if (!values.username) {
                errors.username = "Required"
            } else if (values.username.length > 8) {
                errors.username = "Must be 8 characters or less"
            }

            if (!values.email) {
                errors.email = "Required"
            } else if (!/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(values.email)) {
                errors.email = "Invalid Email address"
            }

            if (!values.password) {
                errors.password = "Required"
            }

            return errors
        }
    })

    return (
        <div className='container border border-1 mx-auto w-30 p-3'>
            <form onSubmit={formik.handleSubmit}>
                {/* username */}
                <div className='mb-3 w-50 mx-auto'>
                    <label className='form-label'>Username</label>
                    <input
                        type='text'
                        name='username'
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='form-control'
                    />
                    {formik.touched.username && formik.errors.username ?
                        <h3 className='text-danger'>{formik.errors.username}</h3> : null}
                </div>

                {/* email */}
                <div className='mb-3 w-50 mx-auto'>
                    <label className='form-label'>Email</label>
                    <input
                        type='email'
                        name='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='form-control'

                    />
                    {formik.touched.email && formik.errors.email ?
                        <h3 className='text-danger'>{formik.errors.email}</h3> : null}
                </div>

                {/* password */}
                <div className='mb-4 w-50 mx-auto'>
                    <label className='form-label'>Password</label>
                    <input
                        type='password'
                        name='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='form-control'

                    />
                    {formik.touched.password && formik.errors.password ?
                        <h3 className='text-danger'>{formik.errors.password}</h3> : null}
                </div>

                <div className="d-flex justify-content-center">
                    <button className='btn1 btn-primary w-50' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormikForm
// import { useFormik } from 'formik'
// import React from 'react'

// function FormikForm() {

//   const formik = useFormik({
//     initialValues: {
//       username: "",
//       email: "",
//       password: ""
//     },
//     onSubmit:(values)=>{
// console.log(values);
//     },
//     validate:(values)=>{
    
//       let errors = {}
//       if (!values.username){
//         errors.username = "Required"

//       }else if (values.username.length > 8){
//         errors.username = "must be 8 character or less"
//       }
//       if(!values.email){
//         errors.email = "required"

//       } else if (!/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(values.email)) {
//         errors.email = "Invalid email address"
//       }
//       if(!values.password){
//         errors.password = "required"
//       }
//       return errors
//     }
//   })



//   return (
//     <>
//       <form onSubmit={formik.handleSubmit}>
//         <div>
//           <label>Username</label>
//           <input name='username' value={formik.values.username} type='text' onChange={formik.handleChange} />
//         </div>
//         <div>
//           <label>Email</label>
//           <input name='email' value={formik.values.email} type='email' onChange={formik.handleChange} />
//         </div>
//         <div>
//           <label>Password</label>
//           <input name='password' value={formik.values.password} type='password' onChange={formik.handleChange}/>
//          {formik.touched.password && formik.errors.password ?
//          <h4 className='text-danger'>{formik.errors.password}</h4> : null}
//         </div>
       
//         <button type='submit'>Submit</button>
//       </form>
//     </>
//   )
// }

// export default FormikForm