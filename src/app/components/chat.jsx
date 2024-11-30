"use client";
import Image from "next/image"
import useStore from "@/store/store"

export default function Chat() {

    const { model, userMsgList } = useStore();


    const userMsg = (msg) => {
        return (
            <div className="chat chat-end" key={msg.time}>
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <Image
                    width={50}
                    height={50}
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>

                <div className="chat-bubble">{ msg.context }</div>
                <div className="chat-footer opacity-50 text-xs">{ msg.time }</div>
            </div>
        )
    }
    const modelMsg = (msg) => {
        return (
            <div className="chat chat-start" key={msg.time}>
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <Image
                    width={50}
                    height={50}
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="chat-header">
                {model}
              </div>
              <div className="chat-bubble">{ msg.context }</div>
              <div className="chat-footer opacity-50 text-xs">{ msg.time }</div>
            </div>
        )
    }

    return (
        <>
            <div className="w-4/6 h-5/6 pt-4 m-auto flex items-end overflow-hidden">
                {
                    userMsgList.length ? <div className="w-full overflow-y-auto">
                        {
                            userMsgList.map((item)=>{
                                return (
                                    item.type == 'model' ? modelMsg(item) : userMsg(item)
                                )
                            })
                        }
                    </div>: <div>ssssdsadsad</div>
                }

            </div>
        </>
    )
}
