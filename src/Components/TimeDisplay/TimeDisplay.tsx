interface TimeDisplayProps {
    time: number;
}

export const TimeDisplay = ({ time }: TimeDisplayProps) => {
    return (
        <p className="text-4xl font-bold">
            {time} sek
        </p>
    );
};
