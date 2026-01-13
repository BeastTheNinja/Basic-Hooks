import { useEffect, useState } from "react";
import { TimeDisplay } from "../TimeDisplay/TimeDisplay";
import { Controls } from "../Controls/Controls";

export const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval: number | undefined;

        if (isRunning) {
            interval = window.setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const handleStart = () => setIsRunning(true);
    const handleStop = () => setIsRunning(false);
    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    return (
        <div className="flex flex-col items-center gap-6 p-6">
            <TimeDisplay time={time} />
            <Controls
                onStart={handleStart}
                onStop={handleStop}
                onReset={handleReset}
                isRunning={isRunning}
            />
        </div>
    );
};
