import * as Yup from 'yup';

export const signUpSchema = Yup.object({
  // username: Yup.string().min(3,"ชื่อผู้ใช้ต้องมากกว่า3ตัว").required("กรุณาใส่ชื่อผู้ใช้"),
  username: Yup.string().min(3, ({path,value})=> `${path} ชื่อผู้ใช้ต้องมากกว่า 3 ตัวตอนนี้มีเเค่`).required("กรุณาใส่ชื่อผู้ใช้"),
  nickname: Yup.string().min(3,"ชื่อเล่นผู้ใช้ต้องมากกว่า3ตัว").max(10,"ชื่อเล่นผู้ใช้ต้องไม่เกิน10ตัว").required("กรุณาใส่ชื่อผู้ใช้"),
  password: Yup.string().min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัว").required("กรุณากรอกรหัสผ่าน"),
  confirmpassword: Yup.string().oneOf([Yup.ref("password")],"รหัสผ่านไม่ตรงกัน").required("กรุณากรอกรหัสผ่าน"),
  age: Yup.number().min(11,"ต้องมีอายุต้องมากกว่า10").typeError("ต้องเป็นตัวเลขเท่านั้น"),
  tel: Yup.string().matches(/^\d{10}$/,"เบอร์โทรต้องมี 10ตัวเลข"),
  terms: Yup.boolean().oneOf([true], "กรุณายอมรับเงื่อนไขก่อนสมัคร")
})

