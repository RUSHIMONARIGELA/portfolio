import { Box,  Button,  GridItem, Heading, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import htmlIcon from "../assets/icons/icons8-html-5-96.png"
import ReduxIcon from "../assets/icons/icons8-redux-96.png"
import cssIcon from "../assets/icons/icons8-css3-96.png"
import JsIcon from "../assets/icons/icons8-javascript-96.png"
import pythonIcon from "../assets/icons/icons8-python-96.png"
import reactIcon from "../assets/icons/icons8-react-96.png"
import nodeIcon from "../assets/icons/icons8-nodejs-96.png"
import expressIcon from "../assets/icons/icons8-express-js-96.png"
import MongoIcon from "../assets/icons/icons8-mongodb-96.png"
import RustIcon from "../assets/icons/icons8-rust-96.png"
import ChakraIcon from "../assets/icons/icons8-chakra-ui-96.png"
import ReduxSagaIcon from "../assets/icons/Redux-Saga-Logo.png"
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const Skills = () => {
    const MotionCard = motion(Card);
    

    const flexsettings = {
        display: 'flex',
        justifyContent: 'center'
    }

    const scalevales = { 
            opacity: 1 ,
            scale:1
        }

    const initvalues = {
        opacity: 0 , 
        scale: 0
    }
    
    const cardTransition = {
        ease:"easeIn",
        duration: 0.3
    }

    return (
            <Box as="section" id="skills" h="max-content" bgColor="#D6EAE1" p={"5%"}  >
            <Heading as={'h1'} mb={"40px"} color="#3D3D3D">Skills</Heading>
        <SimpleGrid columns={{sm:2,md:3,lg:4,xl:5}} minChildWidth="260px" spacing={"40px"}>
                
            <MotionCard h={"max-content"} borderTop="5px solid #3E795F" 
            initial={{...initvalues}} 
            whileInView={{...scalevales}}
            transition={{...cardTransition}}
         >
                <CardHeader {...flexsettings}>
                    <Heading>Html</Heading> 
                </CardHeader> 

                <CardBody {...flexsettings}>
                    <Image src={htmlIcon} alt="html-icon" />
                </CardBody>
                <CardFooter {...flexsettings}>
                    <Link href="https://www.w3.org/standards/webdesign/htmlcss" target="_blank"><Button>Official Docs</Button></Link>
                </CardFooter>
            </MotionCard>

            <MotionCard  h={"max-content"} borderTop="5px solid #3E795F"
            initial={{...initvalues}} 
            whileInView={{...scalevales}}
            transition={{...cardTransition}}
            >
                <CardHeader {...flexsettings}>
                    <Heading>CSS</Heading> 
                </CardHeader>
                <CardBody {...flexsettings}>
                    <Image src={cssIcon} alt="cssicon" />
                </CardBody>
                <CardFooter {...flexsettings}>
                    <Link href="https://www.w3.org/standards/webdesign/htmlcss" target="_blank"><Button>Official Docs</Button></Link>
                </CardFooter>
            </MotionCard>

            <MotionCard  h={"max-content"} borderTop="5px solid #3E795F"
            initial={{...initvalues}} 
            whileInView={{...scalevales}}
            transition={{...cardTransition}}
            >
            <CardHeader {...flexsettings}>
                    <Heading>Javascript</Heading> 
                </CardHeader>
                <CardBody {...flexsettings}>
                    <Image src={JsIcon} alt="" />
                </CardBody>
                <CardFooter {...flexsettings}>
                    <Link href="https://developer.mozilla.org/en-US/docs/Web/javascript" target="_blank"><Button>Official Docs</Button></Link>
                </CardFooter>
            </MotionCard>

            <MotionCard  h={"max-content"} borderTop="5px solid #3E795F"
            initial={{...initvalues}} 
            whileInView={{...scalevales}}
            transition={{...cardTransition}}
            >
            <CardHeader {...flexsettings}>
                    <Heading>Python</Heading> 
                </CardHeader>
                <CardBody{...flexsettings} >
                    <Image src={pythonIcon} alt="" />
                </CardBody>
                <CardFooter {...flexsettings}>
                    <Link href="https://www.python.org/" target="_blank"><Button>Official Docs</Button></Link>
                </CardFooter>
            </MotionCard>

            <MotionCard h={"max-content"} borderTop="5px solid #3E795F"
            initial={{...initvalues}} 
            whileInView={{...scalevales}}
            transition={{...cardTransition}}
            >
            <CardHeader {...flexsettings}>
                    <Heading>ReactJs</Heading> 
                </CardHeader>
                <CardBody {...flexsettings}>
                    <Image src={reactIcon} alt="" />
                </CardBody>
                <CardFooter {...flexsettings}>
                    <Link href="https://react.dev/" target="_blank"><Button>Official Docs</Button></Link>
                </CardFooter>
            </MotionCard>
            
            <MotionCard  h={"max-content"} borderTop="5px solid #3E795F"
            initial={{...initvalues}} 
            whileInView={{...scalevales}}
            transition={{...cardTransition}}
            >
            <CardHeader {...flexsettings}>
                    <Heading>NodeJs</Heading> 
                </CardHeader>
                <CardBody {...flexsettings}>
                <Image src={nodeIcon} alt="" />
                </CardBody>
                <CardFooter {...flexsettings}>
                    <Link href="https://nodejs.org/en" target="_blank"><Button>Official Docs</Button></Link>
                </CardFooter>
            </MotionCard>

            <MotionCard  h={"max-content"} borderTop="5px solid #3E795F"
            initial={{...initvalues}} 
            whileInView={{...scalevales}}
            transition={{...cardTransition}}
            >
            <CardHeader {...flexsettings}>
                    <Heading>Express Js</Heading> 
                </CardHeader>
                <CardBody {...flexsettings}>
                    <Image src={expressIcon} alt="" />
                </CardBody>
                <CardFooter {...flexsettings}>
                    <Link href="https://expressjs.com/" target="_blank"><Button>Official Docs</Button></Link>
                </CardFooter>
            </MotionCard>

            <MotionCard  h={"max-content"} borderTop="5px solid #3E795F"
            initial={{...initvalues}} 
            whileInView={{...scalevales}}
            transition={{...cardTransition}}
            >
            <CardHeader {...flexsettings}>
                    <Heading>Redux</Heading> 
                </CardHeader>
                <CardBody {...flexsettings}>
                    <Image src={ReduxIcon} alt="" />
                </CardBody>
                <CardFooter {...flexsettings}>
                    <Link href="https://redux.js.org/" target="_blank"><Button>Official Docs</Button></Link>
                </CardFooter>
            </MotionCard>

            <MotionCard  h={"max-content"} borderTop="5px solid #3E795F"
            initial={{...initvalues}} 
            whileInView={{...scalevales}}
            transition={{...cardTransition}}
            >
            <CardHeader {...flexsettings}>
                    <Heading>Redux-saga</Heading> 
                </CardHeader>
                <CardBody {...flexsettings}>
                   <Image src={ReduxSagaIcon} alt="Redux-saga" />
                </CardBody>
                <CardFooter {...flexsettings}>
                    <Link href="https://redux-saga.js.org/" target="_blank"><Button>Official Docs</Button></Link>
                </CardFooter>
            </MotionCard>

            <MotionCard  h={"max-content"} borderTop="5px solid #3E795F"
            initial={{...initvalues}} 
            whileInView={{...scalevales}}
            transition={{...cardTransition}}
            >
                <CardHeader {...flexsettings}>
                    <Heading>Chakra-UI</Heading> 
                </CardHeader>
                <CardBody {...flexsettings}>
                    <Image src={ChakraIcon} alt="Chakra-UI" />
                </CardBody>
                <CardFooter {...flexsettings}>
                    <Link href="https://chakra-ui.com/" target="_blank"><Button>Official Docs</Button></Link>
                </CardFooter>
            </MotionCard>

            <MotionCard  h={"max-content"} borderTop="5px solid #3E795F"
            initial={{...initvalues}} 
            whileInView={{...scalevales}}
            transition={{...cardTransition}}
            >
            <CardHeader {...flexsettings}>
                    <Heading>MongoDb</Heading> 
                </CardHeader>
                <CardBody {...flexsettings}>
                    <Image src={MongoIcon} alt="" />
                </CardBody>
                <CardFooter {...flexsettings}>
                    <Link href="https://www.mongodb.com/" target="_blank"><Button>Official Docs</Button></Link>
                </CardFooter>
            </MotionCard>

            <MotionCard  h={"max-content"} borderTop="5px solid #3E795F" 
            initial={{...initvalues}} 
            whileInView={{...scalevales}}
            transition={{...cardTransition}}
            >   
            <CardHeader {...flexsettings} >
                    <Heading>Rust</Heading> 
                </CardHeader>
                <CardBody {...flexsettings}>
                    <Image src={RustIcon} alt="" />
                </CardBody>
                <CardFooter {...flexsettings}>
                    <Link href="https://www.rust-lang.org/" target="_blank"><Button>Official Docs</Button></Link>
                </CardFooter>
            </MotionCard>
        </SimpleGrid>
        </Box>  
     );
}
 
export default Skills;