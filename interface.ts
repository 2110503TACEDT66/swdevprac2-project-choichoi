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
  name: string,
  surname: string,
  id: string,
  hospital: string,
  bookDate: string
}
