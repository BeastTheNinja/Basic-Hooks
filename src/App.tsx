import { useState } from "react";
import { Counter } from "./Components/counter/Counter";
import { Greeting } from "./Components/greeting/Greeting";
import { Modal } from "./Components/modal/Modal";
import { Button } from "./Components/button/Button";
import { Stopwatch } from "./Components/StopWatch/StopWatch";

function App() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (

        <>
            <Counter />
            <Greeting />
            <Button setIsModalOpen={setIsModalOpen} />
            <Modal  setIsModalOpen={setIsModalOpen} isOpen={isModalOpen} />
            <Stopwatch />
                
              
            
        </>
    )
}

export default App
