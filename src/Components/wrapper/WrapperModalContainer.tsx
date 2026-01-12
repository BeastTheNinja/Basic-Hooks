import { useState } from "react";
import { Modal } from "../modal/Modal";

export const WrapperContainerModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Åbn modal
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                    <Modal onClose={() => setIsOpen(false)}>
                        <h2 className="text-xl font-bold mb-2">
                            Modal titel
                        </h2>
                        <p className="mb-4">
                            Dette er indholdet i modalen.
                        </p>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Luk modal
                        </button>
                    </Modal>
                </div>
            )}
        </>
    );
};
