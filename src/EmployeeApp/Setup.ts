import { RootModel } from "."
import { onSnapshot } from "mobx-state-tree";


export const setupRootStore = () =>{
    const rootTree = RootModel.create({
        employer: {
            id:"1",
            name:"Malek ben Abdel",
            location:"Mahdia, Tunis",
            employees: []
            
        }
    });

    onSnapshot(rootTree, (snapshot) => console.log('logSnapshot'+snapshot));
    return { rootTree}
}