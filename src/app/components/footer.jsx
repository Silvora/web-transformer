"use client";
import { useState } from "react"
import useStore from "@/store/store";

export default function Footer() {
    const [inputText,setInputText] = useState('')
    const { isInput, addUserMsg } = useStore()
    const getInputValu = (e) => {
        setInputText(e.target.value)
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            addUserMsg({
                type: "user",
                context: inputText,
                time: Date.now()+'',
            })
            setInputText('')
        }
      };
    return (
        <>
            <div className="w-full flex justify-center h-1/6 items-center">
                <input type="text" placeholder="Type here" className="input input-bordered w-4/6" value={inputText} onChange={(e)=> getInputValu(e)} onKeyPress={handleKeyPress}/>
            </div>
        </>
    )
}
