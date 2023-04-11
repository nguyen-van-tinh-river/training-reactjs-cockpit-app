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

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        picture: ''
    });

    const onChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        if (e.target.type === 'file') {
            value = e.target.files[0]
        } else {
            formData[name] = value;
            setFormData(formData)
        }
    }

    const togglePasswordClick = () => setShowPassword(!showPassword)
    const toggleConfirmPasswordClick = () => setShowConfirmPassword(!showConfirmPassword)

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <VStack spacing="5px">
            <form>
                <FormControl id="register-first-name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                        name="name"
                        placeholder='Enter Your Name'
                        onChange={(e) => onChange(e)}
                    />
                </FormControl>
                <FormControl id="register-email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                        autoComplete='username'
                        name="email"
                        placeholder='Enter Your Email'
                        onChange={(e) => onChange(e)}
                    />
                </FormControl>
                <FormControl id="register-password" isRequired>
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
                <FormControl id="register-confirm-password" isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <InputGroup>
                        <Input
                            autoComplete='new-password'
                            type={ showConfirmPassword ? 'text' : 'password' }
                            placeholder='Enter confirm password'
                            onChange={(e) => onChange(e)}
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={ toggleConfirmPasswordClick }>
                                { showConfirmPassword ? <ViewOffIcon /> : <ViewIcon /> }
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
                <FormControl id="register-picture">
                    <FormLabel>Upload your Picture</FormLabel>
                    <Input
                        name="picture"
                        type="file"
                        p={1.5}
                        accept='image/*'
                        onChange={(e) => onChange(e)}
                    />
                </FormControl>
                <Button
                    colorScheme='blue'
                    width="100%"
                    style={{marginTop: 15}}
                    onClick={onSubmit}
                >
                    Register
                </Button>
            </form>
        </VStack>
    )
}

export default Register
