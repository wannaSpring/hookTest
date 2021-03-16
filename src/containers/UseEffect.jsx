import {useEffect, useMemo, useState, useRef } from 'react'

function Button({ name, children }) {
  const [childName, changeName] = useState('我还没名字')
  useEffect(() => {
    console.log('初始render');
  })
  useEffect(() => {
    console.log('空依赖');
  }, [])
  useEffect(() => {
    changeName(name + '组装了一下')
  }, [name])
  return (
      <>
        <div>{childName}</div>
        <div>{children}</div>
      </>

  )
}

function UseEffect() {
  const [name, setName] = useState('名称')
  const [content,setContent] = useState('内容')
  const aaRef = useRef(null)
  console.log(aaRef, '我是空的哦～因为还没被渲染')
  useEffect(() => {
    console.log(aaRef, '因为我被作为依赖项添加了， 所以为可以被获取了')
  }, [aaRef])
  return (
      <>
        <button onClick={() => setName(new Date().getTime())} ref={aaRef}>name</button>
        <button onClick={() => setContent(new Date().getTime())}>content</button>
        <Button name={name}>{content}</Button>
      </>
  )
}

export default UseEffect