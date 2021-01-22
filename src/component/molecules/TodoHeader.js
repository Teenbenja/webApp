import React from 'react'
import { Button, PageHeader } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

export default function TodoHeader(props) {
    const { newTodo, setNewTodo } = props
    return (
        <>
            <PageHeader
                style={{padding: '0px 16px'}}
                backIcon={false}
                title="Todo List"
                extra={[
                    <Button 
                        key='add'
                        type='text'
                        onClick={() => setNewTodo(!newTodo)}
                    >
                        <PlusOutlined />
                    </Button>
                ]}
            >

            </PageHeader>
        </>
    )
}