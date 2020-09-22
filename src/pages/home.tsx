import React, { useState, useEffect, createContext, Context } from 'react';
import Zitem from './zitem'

// 创建上下文
export const NumContext: Context<any> = createContext('provider');

function Home() {
    const [num, setNum] = useState(4);
    const [num2, setNum2] = useState(4);


    useEffect(() => {
        console.log(`You clicked ${num} times`)
        // document.title = `You clicked ${num} times`;
    }, [num]);
    
    return (
        <div>
            <p>数字{num}</p>
            <button onClick={() => {
                setNum(num + 1)
            }}>
                点击增加数值
              </button>
            {/* 通过Provider 将要共享的数据 提供给上下文，子组件也可以拿到 */}
            <NumContext.Provider value={{ num, setNum }}>
                <Zitem />
            </NumContext.Provider>
        </div>
    )
}
export default Home;