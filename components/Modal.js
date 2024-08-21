import { useReducer, useRef } from "react";
import { X } from "lucide-react";
import AlignContainer from "./AlignContainer";
const Modal = ({ onClose }) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="text-black fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30  flex justify-center items-center z-10"
    >
      <AlignContainer>
        <div className="mt-10 flex flex-col  ">
          <div className="bg-white sm:px-0 sm:py-5 px-10 py-5 rounded-xl flex flex-col items-center gap-4 w-fit relative">
            <button className="absolute top-4 right-4 " onClick={onClose}>
              <X color="black" />
            </button>

            <h1 className="sm:text-3xl text-xl font-extrabold text-center">
              OUR WORK JOURNEY
            </h1>
            <h3 className="sm:text-3xl text-xl font-medium text-center sm:w-1/2 ">
              Book a session to get to know us better and to get the best offer
            </h3>
            <button className="text-white bg-black  sm:w-1/2 w-full py-4 rounded-full">
              {" "}
              Book A Session
            </button>
          </div>
        </div>
      </AlignContainer>
    </div>
  );
};

export default Modal;
