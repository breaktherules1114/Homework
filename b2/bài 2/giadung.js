import hanghoa from "./hanghoa.js";
export default class giadung extends hanghoa{
    doben;
    constructor(dinhdanh,ten,giathanh,ngaysx,giamgia,ngaynhap,doben){
        super(dinhdanh,ten,giathanh,ngaysx,10,ngaynhap);
        this.doben=doben;
    }
    
}