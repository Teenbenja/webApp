import { List, Button } from 'antd'
import React from 'react'
import {RightCircleOutlined} from '@ant-design/icons'

const priorityMap = {
    Low: '#23D341',
    Medium: '#FFC300',
    High: '#F0421D'
}

export default function TodoList(props) {
    const {todos, deleteTodo } = props

    const itemOnClickHandle = item => e => {
        deleteTodo(item)
    }

    return (
        <div>
            <List 
                style={{padding: '10px'}}
                dataSource={todos}
                renderItem={item => (
                    <List.Item
                        actions={[<Button type="link" key="list-delete" onClick={itemOnClickHandle(item)}>Delete</Button>]}
                    >
                        <List.Item.Meta 
                            avatar={<RightCircleOutlined style={{color: `${priorityMap[item.todo_priority]}`}}/>}
                            title={item.todo_description}
                            description={item.todo_responsible}
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}