import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl font-bold">Counter: {count}</h1>
            <div className="flex gap-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => setCount(count + 1)}
                >
                    Increment
                </button>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => setCount(count - 1)}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}