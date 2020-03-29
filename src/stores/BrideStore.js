import {action, observable, computed} from "mobx";

class BrideStore{

  @observable brides = [];
  @action addBride = (bride) => {
      this.brides.push(bride);
  }
  @computed get brideSize(){
      return this.brides.length;
  }

  
}

const bridesSto= new BrideStore();
export default bridesSto;
