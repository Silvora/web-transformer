interface Msg {
    type: "model"|"user",
    context: string,
    time: string
}

interface UserStoreType {
    isInput: boolean,
    model: string,
    inputText: string,
    userMsgList: Msg[],
    oldMsgMap: {[name:string]:Msg[]}
}
