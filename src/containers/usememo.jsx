import {useMemo, useState, } from 'react'

function Button({ name, children }) {
  function changeName(name) {
    console.log('11')
    return name + '改变name的方法'
  }
  // 错误示例
  // const otherName =  changeName(name)
  // 正确使用usememo
  const otherName =  useMemo(()=>changeName(name),[name])
  return (
      <>
        <div>{otherName}</div>
        <div>{children}</div>
      </>

  )
}

function UseMemo() {
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

export default UseMemo