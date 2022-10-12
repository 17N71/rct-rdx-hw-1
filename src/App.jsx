import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { changeCount, discrement, setName, setToTen } from "./store/firstSlice";

function App() {
  const dispatch = useDispatch()
  const [value,setValue] = useState("")
  const {name, surname,count} = useSelector((store)=>{
    return store
  })
  function changeName({target:{value}}){
    setValue(value)
  }
  function changeNameBtn(){
    dispatch(setName({newName:value}))
    setValue("")
  }
  return (
    <div className="App">
        <input type="text" value={value} onChange={changeName} />
        <button onClick={()=>dispatch(changeCount({newState:count,type:"INCREMENT",}))}>INCREMENT</button>
        <button onClick={()=>dispatch(discrement())}>DISCREMENT</button>
        <button onClick={()=>dispatch(setToTen())}>set To Ten</button>
        <button onClick={changeNameBtn}>click To change name</button>
        <div>{name}</div>
        <div>{surname}</div>
        <div>{count}</div>
    </div>
  )
}

export default App
