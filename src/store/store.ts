// store.js
import { create } from "zustand";


const userInfo:UserStoreType = {
    isInput: true,
    model: '3dsadsa',
    inputText: '',
    userMsgList:[

    ],
    oldMsgMap:{}
}


const useStore = create((set) => ({
    ...userInfo,
    addUserMsg: (info:Msg) => set((state:UserStoreType) => {
        // console.log("------",info)
        // state.userMsgList.push(info)
        // console.log("------",state)

        return {
            ...state,
            userMsgList: [...state.userMsgList, info]
        }
    }),
    addMsgMap: () => set((state:UserStoreType) => {
        const context:string = state.userMsgList[0].context
        state.oldMsgMap[context] = state.userMsgList
    }),
    deleteMsgMap: (name:string) => (set((state:UserStoreType)=>{
        delete state.oldMsgMap[name]
    }))
}));

export default useStore;
