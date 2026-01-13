import { WrapperModalContainer } from "../wrapper/WrapperModalContainer";

interface ModalProps {
    setIsModalOpen: (isOpen: boolean) => void;
    isOpen: boolean;
}

export const Modal = ({ setIsModalOpen, isOpen }: ModalProps) => {
    return (
        isOpen && (
        <>
             <WrapperModalContainer></WrapperModalContainer>
        <section className="w-75 h-75 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl bg-white rounded-2xl p-5">
            <button className="absolute top-1 left-1/2" onClick={() => setIsModalOpen(false)}>X</button>
            <h1 className="text-center mt-10 text-2xl font-bold">This is a Modal</h1>
            <p className="text-center mt-4">Click the X button to close me!</p>
        </section>
        </>
    )

    )
}