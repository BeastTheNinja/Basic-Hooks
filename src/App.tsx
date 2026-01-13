import { useState } from "react";
import { Counter } from "./Components/counter/Counter";
import { Greeting } from "./Components/greeting/Greeting";
import { Modal } from "./Components/modal/Modal";
import { Button } from "./Components/button/Button";

function App() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (

        <>
            <Counter />
            <Greeting />
            <Button setIsModalOpen={setIsModalOpen} />
            <Modal  setIsModalOpen={setIsModalOpen} isOpen={isModalOpen} />
                
              
            
        </>
    )
}

export default App
