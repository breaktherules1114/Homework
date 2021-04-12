export class Meme{
    id;
    name;
    image;
    dateModified;

    constructor(id,name,image,dateModified){
        this.id=id;
        this.name=name;
        this.image=image;
        this.dateModified=dateModified;
    }
    
    show(){
        document.getElementById('name').textContent = this.name;
        document.getElementById('date').textContent = this.dateModified;
        document.getElementById('url').src=this.image;
    }
    update(id,name,image,dateModified){
        this.id=id;
        this.name=name;
        this.image=image;
        this.dateModified=dateModified;
        document.getElementById('name').textContent = this.name;
        document.getElementById('date').textContent = this.dateModified;
        document.getElementById('url').src=this.image;
    }
}
