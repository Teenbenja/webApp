import React, { useState } from 'react'
import { Button, Input } from 'antd';

const ContentContainer = () => {
  const [list, setList] = useState([])
  const [inputValue, setInputValue] = useState('')

  function handleButtonClick(e) {
    if (inputValue.length === 0) {
      return
    }
    setList([...list, inputValue])
    setInputValue('')
  }

  function handleInputChange(e) {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <div>
      <p>输入内容</p>
      <Input onChange={handleInputChange} value={inputValue}></Input>
      <Button onClick={handleButtonClick}>添加</Button>
      </div>
      <div>
        <ul>
          {list.map(it => (
            <li>{it}</li>
          ))}
        </ul>
          
      </div>
    </div>
  )
}

export default ContentContainer