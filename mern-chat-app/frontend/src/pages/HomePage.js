import React from 'react'
import {
    Container,
    Box,
    Text,
    Flex,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel
} from '@chakra-ui/react'
import Login from '../components/Authentication/Login';
import Register from '../components/Authentication/Register';

const HomePage = () => {
    return (
        <Container maxW='xl' centerContent>
            <Box
                p={3}
                bg={"white"}
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px"
            >
                <Flex
                    justifyContent="center"
                >
                    <Text
                        fontSize="4xl"
                        fontFamily="Work sans"
                        color="black"
                    >Talk-A-Tive</Text>
                </Flex>
            </Box>
            <Box
                bg="white"
                w="100%"
                p={4}
                borderRadius="lg"
                borderWidth="1px"
            >
                <Tabs variant='soft-rounded'>
                    <TabList mb="1em">
                        <Tab width="50%">
                            Sign In
                        </Tab>
                        <Tab width="50%">
                            Sign Up
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Register />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    );
}

export default HomePage
