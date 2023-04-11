import {
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    VStack
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const onChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        formData[name] = value
        setFormData(formData)
    }

    const togglePasswordClick = () => setShowPassword(!showPassword)

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const onLoginWithGuest = (e) => {
        e.preventDefault();

        formData['email'] = 'guest@example.com'
        formData['password'] = '123456'
        setFormData(formData)

        console.log('fdsafadsf');
    }

    return (
        <VStack spacing="5px">
            <form>
                <FormControl id="login-email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                        autoComplete='username'
                        name="email"
                        placeholder='Enter Your Email'
                        onChange={(e) => onChange(e)}
                    />
                </FormControl>
                <FormControl id="login-password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <Input
                            autoComplete='new-password'
                            name="password"
                            type={ showPassword ? 'text' : 'password' }
                            placeholder='Enter your password'
                            onChange={(e) => onChange(e)}
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={ togglePasswordClick }>
                                { showPassword ? <ViewOffIcon /> : <ViewIcon /> }
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
                <Button
                    colorScheme='blue'
                    width="100%"
                    style={{marginTop: 15}}
                    onClick={onSubmit}
                >
                    Login
                </Button>
                <Button
                    variant="solid"
                    colorScheme='red'
                    width="100%"
                    style={{marginTop: 5}}
                    onClick={ onLoginWithGuest }
                >
                    Get Guest User Credentials
                </Button>
            </form>
        </VStack>
    )
}

export default Login
