import React , { useContext } from 'react';
import  { NumContext } from './parent'

function Zitem(){
	// 使用上下文，通过解构赋值，使用 num 和 setNum
    let { count, dispath } = useContext(NumContext);
    
    return (
        <div>
            子组件数值{count}
            <button onClick={()=>{
                dispath('add') 
              }}>  
                子组件点击增加数值
            </button>
            <br />
        </div>
    )
}
export default Zitem;
