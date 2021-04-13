import Meme from "./meme.js";
 export default class MemeCollection extends Meme{
    owner;
    memes;
    constructor(id,name,owner,memes){
        super(id,name);
        this.owner = owner;
        this.memes = memes;
    }
    add(data){
        if(data instanceof Meme){
            this.memes.push(data);
        }
    }
    delete(x){
        let ViTri = -1;
       for(let i = 0; i < this.memes.length;i++){
           if(this.memes[i].id === x){
               ViTri = i;
               break;
           }
       }
       if(ViTri == - 1) console.log("id khong hop le");
       else{
           this.memes.splice(ViTri,1);
       }

    }
    update(x,data){
        if(data instanceof Meme){
            let ViTri = -1;
            for(let i = 0; i < this.memes.length;i++){
                if(this.memes[i].id === x){
                    ViTri = i;
                    break;
            }
            this.memes.splice(ViTri,1,data);
       }
        }
        else {
            console.log("data sai");
        }
    }
    show(){
        console.log(this.memes);
    }
};