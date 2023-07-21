import {  
     Box,
     Button,
     Card,
     Heading,
     Image,
     Input,
     InputGroup,
     InputLeftAddon,
     SimpleGrid,
     Textarea,
     useToast
} from "@chakra-ui/react";



import githubicon from "../assets/logos/icons8-github-60.png"
import LinkedinIcon from "../assets/logos/icons8-linkedin-60.png"
import InstagramIcon from "../assets/logos/icons8-instagram-60.png"
import redditIcon from "../assets/logos/icons8-reddit-60.png"
import discord from "../assets/logos/icons8-discord-60.png"
import {  useEffect, useState } from "react";
import emailjs from "emailjs-com";



const Contact = () => {

    const inputclearvals = document.querySelectorAll('.inputclear')

    
    
    const toast = useToast({
        position:"top-center",
        containerStyle:{
            color:"#3E795F"
        }
    });
    

    const [emaildata,setEmaildata] = useState({
        nameinput:"",
        emailinput:"",
        message:""
    })

    const clearform =() => {
        
        inputclearvals[0].value = "";
        inputclearvals[1].value = "";
        inputclearvals[2].value = "";

        setEmaildata({
            nameinput:"",
            emailinput:"",
            message:""
        })

    }

    const handleInputChange = e => setEmaildata({...emaildata , [e.target.name]:e.target.value})

    const handleSubmit = async () =>{
        try {
            
            await emailjs.send("service_i2fdwj9","template_p79riuq",{
                from_name: emaildata.nameinput,
                email_id: emaildata.emailinput,
                message: emaildata.message,
                },"EiREnRvC_0c1K0x0g")
            toast({
                title:"Thank you for your feedback!😀",
                status:"success",
                variant:'left-accent',
                isClosable:true
            })
            clearform();            
            
        } catch (error) {
            toast({
                title:"Unable to send feedback!😑",
                status:"error",
                variant:'left-accent',
                isClosable:true
            }) 
        }
        
    }

    const logoitemgrid = {
        display:"grid",
        justifyItems:"center"
    }

    return (  
    <Box as="section" id="contact" h="max-content" bgColor={"#FAFFFD"} p="5%">
        <Heading color="#3D3D3D">Contact Me</Heading>
        <SimpleGrid columns={{base:1 ,lg:2 }} alignContent="center" justifyItems="center">
 
            <Card 
            gap={"20px"}  
            width="max-content"
            border={"1px solid #3E795F"} 
            p="5vw" 
            m="5vh" 
            bgColor="#EDFCF9" 
            justifySelf={{base:"center",lg:"end"}} 
            borderRadius="15px"  >
                
                <InputGroup w={"300px"}  >
                    <InputLeftAddon children="Name" />
                    <Input variant="outline" type="text" onChange={handleInputChange}  defaultValue={emaildata.nameinput} name="nameinput" className="inputclear"/>
                </InputGroup>
        
                <InputGroup w={"300px"}>
                    <InputLeftAddon children="Email" />
                    <Input variant="outline"  type="email" onChange={handleInputChange}  defaultValue={emaildata.emailinput} name="emailinput" className="inputclear" />
                </InputGroup>

                <Textarea placeholder="your message here" w={"300px"} onChange={handleInputChange} defaultValue={emaildata.message} name="message" className="inputclear" />
                <Button w="50%" variant="outline" colorScheme="green" onClick={handleSubmit}>Send</Button>
            </Card>
            
            <SimpleGrid 
            w={{base:"350px",lg:"70%"}} 
            columns={2} 
            border={"1px solid #3E795F"} 
            justifyItems="center"
            gap="10px"  
            m="5vh" 
            bgColor="#EDFCF9" 
            justifySelf={{base:"center",lg:"start"}} 
            p="30px" 
            borderRadius="15px" 
            >
                
                <Box {...logoitemgrid} >
                    <Image src={githubicon} />
                    <Button> <a href="https://github.com/Dhanasaitholeti">Follow</a></Button>
                </Box>

                <Box {...logoitemgrid}>
                <Image src={LinkedinIcon} />
                <Button> <a href="https://www.linkedin.com/in/dhanasai-tholeti/">Follow</a></Button>
                </Box>


                <Box {...logoitemgrid}>
                <Image src={InstagramIcon} />
                <Button><a href="https://www.instagram.com/dhanasai_naidu_tholeti/"> Follow </a></Button>
                </Box>


                <Box {...logoitemgrid}>
                <Image src={redditIcon} />
                <Button><a href="https://www.reddit.com/user/Eggplant_Early">Follow</a></Button>
                </Box>

                <Box {...logoitemgrid}>
                <Image src={discord} />   
                <Button><a href="https://discord.gg/GEXKudhW">Follow</a></Button>
                </Box>

            </SimpleGrid>

    
        </SimpleGrid>

    </Box>
    );
}
 
export default Contact;