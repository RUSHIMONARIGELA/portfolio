import { Box, Flex,  Text } from "@chakra-ui/react";
import TypewriterComponent from "typewriter-effect";


const Home = () => {
    return (  
        <Flex as={"section"} id="home" h={"100vh"} w="100vw" flexDir={"column"} alignItems={"center"} justifyContent={"center"}  bgGradient={"linear(to-r,#FAFFFD 50% ,#D6EAE1 50%)"} >
            <Text fontSize={{base:"16px",md:"26px"}}  fontWeight={"bold"} fontFamily={"opensans"} color="#3D3D3D">
                Hey👋,I am
            </Text>

            <Text fontSize={{base:"32px",md:"44px"}} fontWeight={"bolder"} color="#3E795F">Arigela Rushimon</Text>

            <Box fontSize={{base:"16px",md:"26px"}} fontWeight={"bold"} fontFamily={"opensans"} color="#3D3D3D">

            <TypewriterComponent onInit={(typewriter)=> {
                typewriter
                .typeString("I'm a Web Developer")
                .pauseFor(1000)
                .deleteChars(13)
                .typeString("Programmer")   
                .pauseFor(1000)
                .deleteChars(10)
                .typeString("Designer")
                .pauseFor(1000)
                .deleteChars(8)
                .typeString("Self-Learner")
                .start();
            }
        }
        />
        </Box>


        

        </Flex>
    );
}
// bgGradient={"linear(to-r,#FAFFFD 50% ,#D6EAE1 50%)"} 
export default Home;