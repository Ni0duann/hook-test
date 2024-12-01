import { useRef, useState } from "react";
import { message } from "./message";

export default function App() {
    const [num,setNum] = useState(0);
    const ref = useRef<HTMLInputElement>(null);
    message('dd');
    return (
        <form>
            <input type="text" value={num} onChange={(e) => setNum(+e.target.value)} />
            <input type="text" defaultValue={num}  ref={ref}/>
            <button type="button" onClick={()=>{setNum(num+1)} }>点击</button>
            <button type="button" onClick={()=>{console.log(ref.current?.value)}}>打印非受控组件值</button>
        </form>

    )
}