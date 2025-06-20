import React from 'react'

const Modal = ({
  children,
  onClose
}: {
  children: React.ReactNode
  onClose?: () => void
}) => {
  return (
    <div className="fixed top-0 left-0 flex h-[100vh] w-[100vw] items-center justify-center">
      <div
        className="absolute top-0 left-0 h-full w-full cursor-pointer bg-gray-500/70"
        onClick={onClose}></div>
      <div className="relative max-h-[90%] w-[max-content] max-w-[1100px] min-w-[300px] items-center justify-center overflow-y-auto rounded-2xl bg-white p-[20px] shadow-xl">
        {children}
      </div>
    </div>
  )
}

export default Modal
