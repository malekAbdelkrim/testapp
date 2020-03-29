import { observable, runInAction,action } from "mobx"

class ImageStore {
    id = 1;
    @observable imageURL = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";
    @action async fetchImage(){
        const characterId = ++this.id;
       // const response = await fetch('https://rickandmortyapi.com/api/character/${characterId}');
        const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)

        const data = await response.json();
        runInAction(()=>{
            this.imageURL = data.image;
        })

    }
}

const imageStore = new ImageStore();
export default imageStore;