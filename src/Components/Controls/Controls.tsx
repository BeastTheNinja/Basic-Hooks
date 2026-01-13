interface ControlsProps {
    onStart: () => void;
    onStop: () => void;
    onReset: () => void;
    isRunning: boolean;
}

export const Controls = ({
    onStart,
    onStop,
    onReset,
    isRunning
}: ControlsProps) => {
    return (
        <div className="flex gap-4">
            {!isRunning ? (
                <button
                    onClick={onStart}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg"
                >
                    Start
                </button>
            ) : (
                <button
                    onClick={onStop}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                    Stop
                </button>
            )}

            <button
                onClick={onReset}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg"
            >
                Nulstil
            </button>
        </div>
    );
};
