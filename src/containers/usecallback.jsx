import {useCallback, useEffect, useMemo, useState, } from 'react'

function Button({ name, children }) {
  const [childName, changeName] = useState('我还没名字')
  useEffect(() => {
    console.log('初始render');
  })
  useEffect(() => {
    console.log('空依赖');
  }, [])
  // 错误示例
/*   const test = () => {
    changeName(name + '组装了一下')
  }
  useEffect(() => {
    test()
  }, [name]) */
  const test = useCallback(() => {
    changeName(name + '组装了一下')
  }, [name])
  useEffect(() => {
    test()
  }, [test])
  return (
      <>
        <div>{childName}</div>
        <div>{children}</div>
      </>

  )
}

function UseCallback() {
  const [name, setName] = useState('名称')
  const [content,setContent] = useState('内容')
  return (
      <>
        <button onClick={() => setName(new Date().getTime())}>name</button>
        <button onClick={() => setContent(new Date().getTime())}>content</button>
        <Button name={name}>{content}</Button>
      </>
  )
}

export default UseCallback