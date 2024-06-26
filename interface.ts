interface HospitalItem {
    _id: string,
    name: string,
    address: string,
    tel: string,
    picture: string,
    open_time: number,
    close_time: number,
    __v: number,
    id: string
}

  
interface HospitalJson {
    success: boolean,
    count: number,
    pagination: {
      prev:{
        page: number,
        limit: number
      },
      next:{
        page: number,
        limit: number
      }
    },
    data: HospitalItem[]
}

interface BookingItem {
  _id:string,
  date:string,
  user:string,
  shop:HospitalItem,
  createdAt: string
  v:number
}

/*
 "name":"{{$randomFirstName}}",
    "tel":"{{$randomPhoneNumber}}",
    "email":"testemail1@gmail.com",
    "password":"12345678",
    "role":"user"
*/
interface SignUpFormState  {
  name: string,
  tel: string,
  email: string,
  password: string,
  role: string
}
