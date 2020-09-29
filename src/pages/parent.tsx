import React, { useState, useEffect, createContext, useReducer, Context } from 'react';
import Zson from './zson'
import './index.scss'

// 创建上下文
export const NumContext: Context<any> = createContext('provider');

function Parent() {

	const [count, dispath] = useReducer((state: number, action: string) => {
		switch (action) {
			case 'add':
				return state + 1;
			case 'sub':
				return state - 1;
			default:
				return state;
		}
	}, 4);

	useEffect(() => {

		console.log(`You clicked ${count} times`)

	}, [count]);


	return (
		<div>
			demo: 父子组件
			<div>
				<h1 className="title">{count}</h1>
				<button className="btn is-primary"
					onClick={() => dispath('add')}
				>Increment</button>
				<button className="btn is-warnning"
					onClick={() => dispath('sub')}
				>Decrement</button>
			</div>

			{/* 通过Provider 将要共享的数据 提供给上下文，子组件也可以拿到 */}
			<NumContext.Provider value={{ count, dispath }}>
				<Zson />
			</NumContext.Provider>

		</div>
	)
}
export default Parent;