import React, { useState, useCallback } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider'

export default function OpenConversation() {
    const [text, setText] = useState('')
    const setRef = useCallback(node => {
        if (node) {
        node.scrollIntoView({ scroll: true })
        }
    }, [])
    const { sendMessage, selectedConversation } = useConversations()

    const handleSubmit = (e) => {
        e.preventDefault()


        sendMessage(selectedConversation.recipients.map(r => r.id),
        text
        )
        setText('')
    }

    return (
        <div className="d-flex flex-column flex-grow-1">
            <div className='flex-grow-1 overflow-auto'>
                <div className="d-flex flex-column align-items-start justify-content-end px-3">
                    {selectedConversation.messages.map((m, index) => {
                        const lastMessage = selectedConversation.messages.length - 1 === index
                        return (
                            <div
                                ref={lastMessage ? setRef : null}
                                key={index}
                                className={`my-1 d-flex flex-column ${m.fromMe ? 'align-self-end align-items-end': 'align-items-start'}`}
                            >
                                <div 
                                 className={`rounded px-2 py-1 ${m.fromMe ? 'bg-primary text-white' : 'border'}`}>
                                    {m.text}
                                </div>
                                <div className={`text-muted small ${m.fromMe ? 'text-right' : ''}`}>
                                    {m.fromMe ? 'You' : m.senderName}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='m-2'>
                    <InputGroup>
                        <Form.Control 
                        as='textarea' 
                        required
                        value={text}
                        onChange={e => setText(e.target.value)}
                        style={{ height: '75px', resize: 'none' }}
                        />
                        <InputGroup.Append>
                            <Button className="h-100" type='submit'>Send</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
            </Form>

        </div>
    )
}
