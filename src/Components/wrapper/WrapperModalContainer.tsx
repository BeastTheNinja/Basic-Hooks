import { useState } from "react";
import { Modal } from "../modal/Modal"

export const WrapperModalContainer = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {isOpen && (
                <Modal onClose={() => setIsOpen(false)}>
                    <h2 className="text-2xl mb-4">Dette er en modal</h2>
                    <p>Her er noget indhold i modal'en.</p>
                </Modal>
            )}

            <button
                onClick={() => setIsOpen(true)}
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
                Åbn Modal
            </button>
        </>
    )
}