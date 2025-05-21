import * as Yup from 'yup';

export const loginSchema= Yup.object({
  username: Yup.string().min(3,"ชื่อผู้ใช้ต้องมากกว่า3ตัว").required("กรุณาใส่ชื่อผู้ใช้"),
  password: Yup.string().min(3, "รหัสผ่านต้องมีอย่างน้อย 3 ตัว").max(10,"รหัสผ่านต้องไม่เกิน10ตัว").required("กรุณากรอกรหัสผ่าน"),
  day: Yup.number().min(1,"วันต้องมากกว่า1").max(31).typeError("ต้องเป็นตัวเลขเท่านั้น"),
  age: Yup.number().min(14,"ต้องมีอายุต้องมากกว่า10").max(100, "เกินอายุที่ระบบรองรับแล้ว").typeError("ต้องเป็นตัวเลขเท่านั้น")
})

