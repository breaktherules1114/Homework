import hanghoa from "./hanghoa.js";
export default class quanao extends hanghoa{
    doben;
    constructor(dinhdanh,ten,giathanh,ngaysx,giamgia,ngaynhap,xuatxu,chatlieu){
        super(dinhdanh,ten,giathanh,ngaysx,5,ngaynhap,xuatxu,chatlieu);
        this.xuatxu=xuatxu;
        this.chatlieu=chatlieu;
    }
    
}