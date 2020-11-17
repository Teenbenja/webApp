import { Button, Typography } from 'antd'
import { List } from 'antd'
import React from 'react'
import { useSelector, connect } from 'react-redux'
import { getTodos } from '../actions'

const TestContainer = (props) => {
    const todos = useSelector(state => state.allTodos)
    
    const {getTodos} = props
    return (
        <div>
            <Button onClick={() => getTodos()}> Get Todos </Button>
            <div>
                <List 
                    bordered
                    dataSource={todos}
                    renderItem={item => (
                        <List.Item>
                            {item.todo_description}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}
const mapStateToProps = () => {

}

const mapDispatchToProps = {
    getTodos,
}

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer)