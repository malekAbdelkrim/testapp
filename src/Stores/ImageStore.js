import {observable , action, runInAction} from "mobx";

class ImageStore {
    @observable imageUrl = `https://rickandmortyapi.com/api/character/avatar/1.jpeg`;
    id = 1;

    @action async fetchImage(){
        const characterId = ++this.id;
        const resp = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
        const data = await resp.json();
        runInAction(()=> {
            this.imageUrl = data.image;
        })
    }
}

const imageStoreInstance = new ImageStore();
export default imageStoreInstance;