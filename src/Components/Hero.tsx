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
                    <Text fontSize={{ base: 'xl', lg: '2xl' }} color={useColorModeValue('gray.900', 'white.500')} align={"left"} p={1} marginTop={2}>
                        Hi, I’m Shivank Goel—an engineer who thrives at the intersection of scalable systems and cutting-edge AI. I started my journey in computer science at IIT Delhi, followed by a master’s at Cornell University. Since 2020, I’ve been building large-scale backend and AI infrastructure at Amazon Web Services.

At AWS, I currently work on <Link href="https://aws.amazon.com/bedrock/agents/" isExternal><i>Bedrock Agents</i> <ExternalLinkIcon mx='2px' /></Link>, where I lead initiatives to make Generative AI agents reliable, secure, and production-ready. My work spans designing multi-tenant agent orchestration systems, building persistent memory for agent experiences, and scaling async workflows across millions of user sessions. I’ve led multiple high-impact projects end-to-end, collaborating closely with principal engineers, product teams, and research scientists.

My technical focus includes distributed systems, ML infrastructure, and event-driven architectures. I enjoy diving deep into protocol design, secure data flows, and long-running AI workflows. Outside of work, I’m a wannapreneur who loves tinkering with side projects, exploring new tech stacks, and mentoring early-career engineers.

When I’m not engineering systems or wrangling AI pipelines, you’ll find me playing badminton, dancing, creating content, or rewatching Bond films with unhealthy enthusiasm.

Let’s connect—tech, side hustles, or just ideas over virtual coffee. 🚀
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
