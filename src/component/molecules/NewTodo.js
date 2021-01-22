import React from 'react'
import { Form, Input, Select } from 'antd'
import Modal from 'antd/lib/modal/Modal'

export default function NewTodo(props) {
    const { visible, onCancel, submitNewTodo } = props

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 12}
    }

    const { Option } = Select

    const [form] = Form.useForm()

    return (
        <Modal
            visible={visible}
            onCancel={onCancel}
            title="New Todo"
            closable={false}
            destroyOnClose={true}
            okText='ADD'
            onOk={() => {
                form
                    .validateFields()
                    .then(values => {
                        form.resetFields()
                        submitNewTodo(values)
                    })
                    .catch(info => {
                        console.log('Validate Failed: ', info)
                    })
            }}
        >
            <Form
            {...layout}
            name='todo'
            form={form}
            >
                <Form.Item
                    name="description"
                    label="Content"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="priority"
                    label="Priority"
                >
                    {/* <Input /> */}
                    <Select
                        placeholder="Select Priority of the task"
                    >
                        <Option value="High">High</Option>
                        <Option value="Medium">Medium</Option>
                        <Option value="Low">Low</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="responsible"
                    label="Responsible"
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    )
}

