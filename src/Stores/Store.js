import {observable, action, computed} from "mobx";

class Store {
    @observable
    like = 12;
    @observable
    comments = ["wow"]
    
    @action
    updateCount(){
        this.like++;
    }

    @action
    addComment(comment){
        this.comments.push(comment);
    }

    @computed
    get commentCount(){
        return this.comments.length;
    }
}

const storeInstance = new Store();
export default storeInstance;