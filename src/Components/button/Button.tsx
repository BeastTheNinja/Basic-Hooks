interface ButtonProps {
    setIsModalOpen: (isOpen: boolean) => void;
}
export const Button = ({ setIsModalOpen }: ButtonProps) => {
    return (
        <button
            onClick={() => setIsModalOpen(true)}
            className="block mx-auto rounded-2xl bg-blue-500 text-white px-4 py-2 shadow-2xl"
        >
            klik!!
        </button>
    );
};
