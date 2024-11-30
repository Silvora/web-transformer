'use client';

import { useRef } from "react";

export default function Footer() {
    const modalRef = useRef(null)
    const handleModel = () => {
        console.log("---------")
        modalRef.current.showModal()
    }
    return (
        <>
            <div className="absolute right-2 top-2">
                <button className="btn btn-square btn-ghost" onClick={handleModel}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-5 w-5 stroke-current">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                  </svg>
                </button>
            </div>


            <dialog id="my_modal_3" className="modal" ref={modalRef}>
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">模型选择</span>
                    </div>
                  <select className="select select-bordered">
                    <option>model</option>
                  </select>
                </label>
              </div>
            </dialog>

        </>
    )
}
