import React from "react";
import {
    Stack,
    Button,
    Flex,
    Heading,
    Image,
    Text,
    useBreakpointValue,
    useColorModeValue,
    Link
} from "@chakra-ui/react";
import { SocialIcon } from 'react-social-icons'
import logo from '../Images/myimg2.jpg';
import { ExternalLinkIcon } from "@chakra-ui/icons";


export const Hero = (): JSX.Element => {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', lg: 'row' }} >
            <Flex p={4} flex={5} justify={'center'}>
                <Stack spacing={3} w={'full'} maxW={'3xl'}>
                    <Heading>
                        <Text
                            as={'span'}
                            position={'relative'}
                            fontSize={'4xl'}
                        >
                            Hey Stalker!
                        </Text>
                        <br />{' '}
                        {/* <Text color={'blue.500'} as={'span'}>
                            Design Projects
                        </Text>{' '} */}
                    </Heading>
                    <Text fontSize={{ base: 'xl', lg: '2xl' }} color={useColorModeValue('gray.900', 'white.500')} align={"left"} p={1} marginTop={2}>
                        I'm Shivank Goel, your techie friend. Started my tech gig with bachelors in CS at IIT Delhi,
                        then jet-setted to Cornell University, NY for more geeky thrills. <br /> <br />

                        Since 2020, I've been knee-deep in coding chaos at Amazon, currently killing it in the <Link href="https://aws.amazon.com/bedrock/agents/" isExternal><i>AWS Bedrock Agents</i> <ExternalLinkIcon mx='2px' /></Link> team,
                        trying to cook up radical solutions for GenAI agents because, honestly, who wants to be basic? <br /> <br />

                        In the tech realm, I vibe with distributed system designs, machine learning infrastructure, and the never ending realm of data storage.
                        A wannapreneur at heart, always hustling on exciting side projects. Let's chat cool ideas over a virtual coffee! ☕ <br /> <br />

                        Outside the tech hustle, find me knocking the birdies in the badminton court, dancing like no one's watching, creating content
                        and binging on epic James Bond marathons. Yep, that's my jam! <br /> <br />

                        Ready for a wild ride? Let's geek out together! 🚀
                    </Text>
                    <Stack direction={{ base: 'row', sm: 'row' }} spacing={4} marginTop={3}>
                        {/* <Button
                            rounded={'full'}
                            bg={'blue.500'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.600',
                            }}>
                            Create Project
                        </Button>
                        <Button rounded={'full'}>How It Works</Button> */}
                        <SocialIcon network="linkedin" url="https://www.linkedin.com/in/goelshivank12/" />
                        <SocialIcon network="github" url="https://github.com/shivankgoel" />
                        <SocialIcon network="youtube" url="https://www.youtube.com/@csfolks" />
                        <SocialIcon network="medium" url="https://medium.com/@goelshivank12" />
                        <SocialIcon network="discord" url="https://discord.gg/q6bh6gYgyu" />
                        <SocialIcon network="instagram" url="https://www.instagram.com/cs.folks" />
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={3}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={logo}
                />
            </Flex>
        </Stack>
    )
};