import React, { useRef }from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

const Login = ({ onIdSubmit }) => {

    const idRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        onIdSubmit(idRef.current.value)
    }

    const createNewId = () => {
        onIdSubmit(uuidV4())
    }
    
    return (
        <Container className='align-items-center d-flex' style={{ height: '100vh' }}>
         <Form onSubmit={handleSubmit} className='w-100'>
             <Form.Group>
                 <Form.Label>Enter Your Id</Form.Label>
                 <Form.Control className="mb-2" type='text' ref={idRef} required />
             </Form.Group>
             <Button type='submit'>Login</Button>{' '}
             <Button  className="ml-2"onClick={createNewId} variant='secondary'>Create A New Id</Button>
         </Form>
        </Container>
    )
}

export default Login
