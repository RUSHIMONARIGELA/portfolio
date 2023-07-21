import {  Box, Button, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";


const About = () => {
    return (  
            <Box as="section" id="about" h="max-content" bgColor={"#FAFFFD"} alignItems="center" flexDir="column" p="3%">
                    <Heading color="#3D3D3D">About Me</Heading>
                    <SimpleGrid columns={{md:1,lg:2}}  spacing={5} p={"2%"} alignContent="center" justifyItems="center">


                        <Box justifySelf={{base:"center",lg:"start"}} >
                                <SimpleGrid columns={2}  p="5vw"   borderRadius="15px" boxShadow="0 1px 3px black">
                                        
                                        <Box display="grid" fontSize={{base:"14px",md:"16px"}} fontWeight="medium" gap={"20px"}  >
                                            <Text>Name:</Text>
                                            <Text>Date of Birth:</Text>
                                            <Text>City:</Text>
                                            <Text>Email:</Text>
                                            <Text>Phone:</Text>
                                            
                                            
                                        </Box>
                                        <Box display="grid" gap="10%" fontWeight="bolder" fontSize={{base:"12px",md:"16px"}}>
                                            <Text>Rushimon Arigela</Text>
                                            <Text>03-05-2003</Text>
                                            <Text>kakinada,Andrapradesh</Text>
                                            <Text>rushimon1129@gmail.com</Text>
                                            <Text>9032801129</Text>

                                        </Box>
                                </SimpleGrid>

                                {/* <Heading my={"2%"}>Download the <Button>CV</Button></Heading> */}
                        </Box>
                    </SimpleGrid>
            </Box>
    );
}
 
export default About;