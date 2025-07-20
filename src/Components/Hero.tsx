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
                            Welcome To My Page!
                        </Text>
                        <br />{' '}
                        {/* <Text color={'blue.500'} as={'span'}>
                            Design Projects
                        </Text>{' '} */}
                    </Heading>
                    <Text
                        fontSize={{ base: 'xl', lg: '2xl' }}
                        color={useColorModeValue('gray.900', 'white.500')}
                        align="left"
                        p={1}
                        marginTop={2}
                    >
                        Hi, I’m Shivank Goel.
                        I’m a backend and infrastructure engineer focused on scalable systems, ML workflows, and production-grade Generative AI.
                        I studied computer science at IIT Delhi and earned my master’s from Cornell University. Since 2020, I’ve been building distributed infrastructure at Amazon Web Services.
                        <br />
                        <br />
                        Currently, I work on <Link href="https://aws.amazon.com/bedrock/agents/" isExternal><i>Bedrock Agents</i> <ExternalLinkIcon mx="2px" /></Link>,
                        where I lead efforts to make GenAI agents reliable, secure, and scalable. My work includes multi-tenant orchestration systems,
                        persistent memory backends for agent experiences, and async workflows running across millions of sessions.
                        I regularly collaborate with principal engineers, applied scientists, and product teams to take systems from concept to launch.
                        <br />
                        <br />
                        My technical interests span distributed systems, ML/AI infrastructure, and secure event-driven architectures.
                        I enjoy working on long-horizon agent workflows, memory-persisted reasoning flows, and real-world infra problems at the edge of AI and scale.
                        <br />
                        <br />
                        I occasionally prototype agent frameworks and infra tools, mentor early-career engineers, and explore new backend stacks.
                        More side projects and content will be added here soon.
                        <br />
                        <br />
                        If you're working on adjacent problems—or just want to trade ideas—reach out. Always open to thoughtful conversations. 🚀
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
                        <SocialIcon network="linkedin" url="https://www.linkedin.com/in/shivankgoeliitd/" />
                        <SocialIcon network="github" url="https://github.com/shivankgoel" />
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
