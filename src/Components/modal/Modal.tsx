interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
}

export const Modal = ({ children, onClose }: ModalProps) => {
    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                {children}
                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                    Luk Modal
                </button>
            </div>
        </div>
    )
}