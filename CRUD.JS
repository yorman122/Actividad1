export class CRUD{
    #tableName = null;
    #data= null;
    constructor(tableName = undefined){
        this.#tableName = (tableName);
        this.#setdata();
    }

    #settableName(tableName){
     this.#tableNameValidate(tableName);
     this.#tableName = tableName;   
    }

    #setdata(){
        let dataRepository = this.#get (this.#tableName);
        this.#data = dataRepository === null ? [] :dataRepository;
    }

    #tableNameValidate(tableName){
        if(tableName == undefined) throw new Error("table Name required");
    }

    #save(){
        let dataTosave = JSON.stringify(this.#data);
        sessionStorage.setItem(this.#tableName, dataTosave);
    }

    #get(key){
        let data = sessionStorage.getItem(key);
        return JSON.parse(data);
    }

    #existElementWithid(id){
        return this.#data[id] === undefined ? false : true;
    }

    #checkThatElementExistsWithId(id){
        if(!this.#checkThatElementExistsWithId(id))
        throw new Error("this element not exist");
    }

    create(data){
        this.#data.push(data);
        this.#save();
        return this.#data.length;
    }

    read(id){
        this.#checkThatElementExistsWithId(id);
        return this.#data[id];
    }

    readALL(){
        return this.#data;
    }

    update(id,data){
        this.#checkThatElementExistsWithId(id);
        this.#data[id]= data;
        this.#save();
        return true;
    }

    delete(id){
        this.#checkThatElementExistsWithId(id);
        this.#data.splice(Id,1);
        this.#save();
        return true;
    }


}