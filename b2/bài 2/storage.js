import hanghoa from "./hanghoa.js";
export default class storage{
    list;
    count = 0;
    constructor(list){
        this.list = list;
    }
    nhaphang(data){
        if(data instanceof hanghoa){
            this.list.push(data);
        }
        else {
            console.log("undefine!");
        }
    }
    banhang(id){
        let pos = -1;
        for(let  i = 0; i < this.list.length; i++){
            if(this.list[i].dinhdanh == id){
                this.count += this.list[i].giathanh * ((100-this.list[i].giamgia)/100);
                pos = i;
                break;
            }
        }
        if(pos == -1) {
            console.log("khong có mặt hàng mã "+id);
        }
        else{
            this.list.splice(pos,1);
        }

    }
    doanhthu(){
        console.log(this.count);
    }
}