import React from "react";

interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
}

export const Modal = ({ children, onClose }: ModalProps) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
            <button
                onClick={onClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
            >
                ✕
            </button>
            {children}
        </div>
    );
};
