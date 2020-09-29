import React, { useState, useEffect, createContext, useCallback, Context } from 'react';
import { throttle } from 'lodash'
import './index.scss'

function useWidth(defaultWidth: number) {
	const [width, setWidth] = useState(document.body.clientWidth)

	const onChange = useCallback(throttle(() => {
		console.log(document.body.clientWidth)
		setWidth(document.body.clientWidth)
	}, 1000), [])

	useEffect(() => {
		window.addEventListener('resize', onChange, false)

		return () => {
			window.removeEventListener('resize', onChange, false)
		}
	}, [onChange])

	return width
}

// 创建上下文
export const NumContext: Context<any> = createContext('provider');

function Index() {

	const width = useWidth(document.body.clientWidth)

	return (
		<>
			demo: 监听浏览器宽度
			<div>
				{width}
			</div>
		</>
	)
}
export default Index;