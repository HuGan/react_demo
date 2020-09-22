import React , { useContext } from 'react';
import  { NumContext } from './home'

function Zitem(){
	// 使用上下文，通过解构赋值，使用 num 和 setNum
    let { num ,setNum } = useContext(NumContext);
    
    return (
        <div>
            子组件数值{num}
            <button onClick={()=>{
                setNum(num+1) 
              }}>  
                子组件点击增加数值
            </button>
            <br />
        </div>
    )
}
export default Zitem;
