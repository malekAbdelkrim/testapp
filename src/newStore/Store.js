import {observable , action, computed} from "mobx"

class Store {
    @observable likeCount = 12;
    @observable comment = ["Wow", "Awsome"];

    @action updateCount(){
        this.likeCount ++;
    }

    @action addComment(cmt){
        this.comment.push(cmt);
    }
    @computed
    get getCountComment(){
        return this.comment.length;
    }

}

const newInstance = new Store();
export default newInstance;