import { ReactNode, useState } from "react"

type CounterProps = {
    count: number,
    getNumber: () => number,
    decrease?: () => number,
    show?: () => string,
    increaseByTen: () => void
}

const ShowCounter = ({count, getNumber, decrease, show, increaseByTen}: CounterProps) : JSX.Element => {
  return (
    <div>
        <h1>Counter Show</h1>
        <p>{count}</p>
        <h2>{getNumber()}</h2>
        <button onClick={increaseByTen}> increase by 10 </button>
    </div>
  )
}

const ShowValue = ({name}: {name: string}) : JSX.Element => {
    return (
        <div>
            <h3>name: {name}</h3>
        </div>
    )
}

const ShowChild = ({children}: {children?: ReactNode}) : JSX.Element => {
    return <div>
        {children}
    </div>
    
}

//const USEREDUCER = () => {}
const Counter = () : JSX.Element => {
    const [number, setNumber] = useState<number>(0)
    function getNumber ():number{
        return number
    }
    function increaseByTen (): void {
        setNumber(number => number + 10)
    }
    return <div>
        <ShowValue name="Junaid"/>
        <ShowChild>
            <h1>Hello: </h1>I am child component
        </ShowChild>
        <ShowCounter count={number} getNumber = {getNumber} increaseByTen = {increaseByTen}/>
        <button onClick={()=>setNumber(number => number + 1)}>Increase</button>
        <button onClick={()=>{
            if (number > 0) setNumber(number => number - 1)
        }}>Decrease</button>
    </div>
}


export default Counter