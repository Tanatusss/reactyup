import { useState, useRef } from "react"
import {signUpSchema} from "../schemas/signUpSchema"
import { yupToFormError } from "../schemas/yupToFormError"

export default function SignUpForm(){
const styles = {
      divInput: "flex gap-2",
      input: "border-1 rounded-lg",
      textError: "text-red-500 font-medium"
    }
  
    const [form, setForm] = useState({
      username: "",
      nickname: "",
      password: "",
      confirmpassword: "",
      age: "",
      tel: "",
      terms: false 
    })

    const refs = {
      username: useRef(null),
      nickname: useRef(null),
      password: useRef(null),
      confirmpassword: useRef(null),
      age: useRef(null),
      tel: useRef(null),
      terms: useRef(null)
    }
  
    const [errors, setErrors] = useState({})
  
  
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleChecked = (e) => {
      setForm({ ...form, [e.target.name]: e.target.checked })
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await signUpSchema.validate(form, { abortEarly: false })
        alert("ส่งสำเร็จ");
        setErrors({});
      } catch (err) {
        const errorObj = yupToFormError(err, refs)
        setErrors(errorObj);
      }
  
  
    }
  
    return (
      <>
        <p className="text-2xl font-bold pb-10">CC 20 Signup Form</p>
        <form className="space-y-2" onSubmit={handleSubmit}>
          <div className={styles.divInput}>
            <p>
              <label>Username</label>
              <input
                className={styles.input}
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                ref={refs.username}
              />
            </p><br />
            <p className={styles.textError}>{errors.username}</p>
          </div>
          <div className={styles.divInput}>
            <p>
              <label>Nickname</label>
              <input
                className={styles.input}
                type="text"
                name="nickname"
                value={form.nickname}
                onChange={handleChange}
                ref={refs.nickname}
              />
            </p><br />
            <p className={styles.textError}>{errors.nickname}</p>
          </div>
          <div className={styles.divInput}>
            <p>
              <label>Password</label>
              <input
                className={styles.input}
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                ref={refs.password}
              />
            </p><br />
            <p className={styles.textError}>{errors.password}</p>
          </div>
          <div>
            <p>
              <label>ConfirmPassword</label>
              <input 
              className={styles.input}
              name="confirmpassword"
              type="confirmpassword"
              value={form.confirmpassword}
              onChange={handleChange}
              ref={refs.confirmpassword}
              />
            </p><br />
            <p className={styles.textError}>{errors.confirmpassword}</p>
          </div>
          <div>
            <p>
              <label>Age</label>
              <input 
              className={styles.input}
              name="age"
              type="number"
              value={form.age}
              onChange={handleChange}
              ref={refs.age}
              />
            </p><br />
            <p className={styles.textError}>{errors.age}</p>
          </div>
          <div>
            <p>
              <label>Tel</label>
              <input 
              className={styles.input}
              name="tel"
              type="number"
              value={form.tel}
              onChange={handleChange}
              ref={refs.tel}
              />
            </p><br />
            <p className={styles.textError}>{errors.tel}</p>
          </div>
          <div>
            <p>
              <label>Terms</label>
              <input 
              className={styles.input}
              name="terms"
              type="checkbox"
              checked={form.terms}
              onChange={handleChecked}
              ref={refs.terms}
              />
            </p><br />
            <p className={styles.textError}>{errors.terms}</p>
          </div>
          <button type="submit">Submit</button>
        </form>
      </>
    )
}