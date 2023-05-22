import {
  Text,
  Box,
  VStack,
  HStack,


} from "@chakra-ui/react";
import { AiFillApple, AiFillHome } from "react-icons/ai";
import { ImProfile, ImPhone } from "react-icons/im";
import { Link } from "react-router-dom";



export default function Layout({children}) {
  return (
    <>
      <Box w="full" display="flex" justifyContent={"center"}>
        <VStack w="sm">
          {/*헤더*/}
          <Box
            display={"flex"}
            justifyContent={"center"}
            w={"inherit"}
            h={"120px"}
            bg="yellow.200"
            position={"fixed"}
            top={0}
            zIndex={"9"}
          >
            <AiFillApple size={32} color="red" />
          </Box>

          {/*본문*/}
          {children}

          {/*푸터*/}
          <Box
            w={"inherit"}
            h={"120px"}
            bg="red.200"
            position={"fixed"}
            bottom={0}
          >
            <HStack
              h={"inherit"}
              justifyContent="space-between"
              alignItems="center"
            >
              <Link to ="/">
              <VStack w={"full"}>
                <AiFillHome/>
                <Text>홈</Text>
              </VStack>
              </Link>

              <Link to ="/profile">
              <VStack w={"full"}>
                <ImProfile/>
                <Text>프로필</Text>
              </VStack>
              </Link>

              <Link to ="/contact">
              <VStack w={"full"}>
                <ImPhone/>
                <Text>연락처</Text>
              </VStack>
              </Link>

            
            </HStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
}


