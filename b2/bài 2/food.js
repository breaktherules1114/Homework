import hanghoa from "./hanghoa.js";
export default class food extends hanghoa{
    doben;
    constructor(dinhdanh,ten,giathanh,ngaysx,giamgia,ngaynhap,taste){
        super(dinhdanh,ten,giathanh,ngaysx,2,ngaynhap,taste);
        this.taste=taste;
    }
    
}