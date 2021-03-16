import {useMemo, useState, useRef} from 'react'

const Index = () => {
  // 声明name， 和改变的name的方法
  const [name, changeName] = useState('react')
  return (
    <div>
      <div>
        <span>我的名字是： {name}</span>
        <button onClick={() => changeName(Math.random().toString())}>改名</button>
      </div>
    </div>
  )
}
export default Index