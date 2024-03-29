import React, { useEffect } from "react";

import {
    Box,
    Flex,
    Avatar,
    Text,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    MenuGroup,
} from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNavigate } from "react-router-dom";

interface Props {
    children: React.ReactNode
}

const NavLink = (props: Props) => {
    const { children } = props

    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={'#'}>
            {children}
        </Box>
    )
}

export function Nav() {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate();

    useEffect(() => {
        if (colorMode === 'light') {
            toggleColorMode()
        }
    }, []);

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={20} py={1} >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Stack direction={{ base: 'row' }} spacing={16}>
                        <Box><Text fontSize='xl' onClick={() => navigate("/")}>Shivank Goel</Text></Box>
                        {/* <Box><Text fontSize='xl' onClick={() => navigate("/leetcode")}>Leetcode</Text></Box> */}
                    </Stack>


                    <Stack direction={{ base: 'row' }} spacing={7}>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>

                        <Menu>
                            {/* <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                                />
                            </MenuButton> */}
                            <MenuButton
                                as={Button}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <HamburgerIcon />
                            </MenuButton>
                            <MenuList alignItems={'center'}>
                                {/* <br />
                                <Center>
                                    <Avatar
                                        size={'2xl'}
                                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                                    />
                                </Center>
                                <br />
                                <Center>
                                    <p>Username</p>
                                </Center>
                                <br /> */}
                                <Text p={2} align={"center"} color={"HighlightText"}>Useful Resources</Text>
                                {/* <MenuDivider /> */}
                                {/* <MenuItem>Your Servers</MenuItem>
                                <MenuItem>Account Settings</MenuItem> */}
                                <MenuItem onClick={() => navigate("/leetcode")}>Leetcode</MenuItem>
                            </MenuList>
                        </Menu>
                    </Stack>
                </Flex>
            </Box >
        </>
    )
}