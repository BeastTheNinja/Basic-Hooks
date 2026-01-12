import { useState } from "react";

export const Greeting = () => {
    const [name, setName] = useState<string>("");

    return (
        <section
            className="
            flex 
            items-center 
            justify-center
            py-5
            bg-gray-100">
            <div
                className="
                bg-white 
                p-6 
                rounded-xl 
                shadow-md 
                w-full 
                max-w-md">
                <p
                    className="
                    text-xl 
                    font-semibold 
                    text-gray-800 
                    mb-4">
                    Send en hilsen til{" "}
                    <span
                        className="
                    text-indigo-600">
                        {name || "…"}
                    </span>
                </p>

                <input
                    type="text"
                    placeholder="Indtast navn"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="
                        w-full
                        px-4
                        py-2
                        border
                        border-gray-300
                        rounded-lg
                        focus:outline-none
                        focus:ring-2
                        focus:ring-indigo-500
                    "
                />
            </div>
        </section>
    );
};
