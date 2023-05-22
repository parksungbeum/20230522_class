import { Box, GridItem,Grid, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";

const dataTour = [
  {
    text: "6월이벤트",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20100101_169%2Fsachico1987_12623496381277oBji_jpg%2Fapple_green_sachico1987.jpg&type=a340",
  },
  {
    text: "7월이벤트",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNjExMjVfMTc2%2FMDAxNDgwMDQzMzYwMTYy.SJQIeBV-jnMbwSJj3RcQOe7EJILhj_krze9K0EHha0Qg.uJLnyngZ5y6xIfbUY5W0pDlhCRSv-4eqoKBG8TfE2p8g.JPEG.onlyloveciel%2Fa4.jpg&type=sc960_832",
  },
  {
    text: "8월이벤트",
    image:
      "https://search.pstatic.net/sunny/?src=http%3A%2F%2Fwww.matcl.com%2Ffiles%2Fattach%2Fimages%2F2872376%2F917%2F879%2F002%2Fa6a514189f3a9fc51e0210571ba289cd.jpg&type=a340",
  },
];
export default function Home() {
  return (
    <>
      <Layout>
        <VStack
          spacing={16}
          w={"inherit"}
          py="140px"
          px={4}
          alignItems={"flex-start"}
        >
          {/*최신상품*/}
          <VStack w={"full"} alignItems={"flex-start"}>
            <Text fontWeight={600} fontSize={24}>
              최신 상품
            </Text>
            <Grid gridTemplateColumns={"repeat(2,1fr)"} w={"full"}>
              <GridItem
                h={"200px"}
                border={"1px"}
                rounded={"md"}
                borderColor={"gray.300"}
                backgroundImage="url(https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjFfNjcg%2FMDAxNjc5MzU1OTgzOTcz.93FMQ5j5ryQuN91SttGF3KUg3UNUlay0NOniWvvJzhEg.cOcMzfBQ-630TQADWwS6oUn8NtJrIcaE8Zora0Q9SbQg.JPEG.hiphoparr%2FIMG_7660.jpg&type=sc960_832)"
                backgroundSize={"cover"}
                backgroundPositon={"center center"}
                position={"relative"}
              >
                <Box
                  position={"absolute"}
                  top={0}
                  left={0}
                  w={"full"}
                  h={"full"}
                  bg={"rgba(0,0,0,0.7)"}
                >
                  <Text
                    color={"white"}
                    position="absolute"
                    w={"full"}
                    bottom={0}
                    align={"center"}
                    fontWeight={600}
                    py={4}
                  >
                    {" "}
                    애플페이
                  </Text>
                </Box>
              </GridItem>
              <GridItem
                h={"200px"}
                border={"1px"}
                rounded={"md"}
                borderColor={"gray.300"}
                backgroundImage="url(https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMThfMjYy%2FMDAxNjc5MDY2MjM0MTIx._2c5_QtHYN0NNU_izCVkHdESsLDvjdCe5jkzOtnlOrgg.ZG9baddl4Pg4glWU3Nl0p67mNDpugRPgl-VtsExIVIkg.JPEG.wjddbstmd%2F26.jpg&type=sc960_832)"
                backgroundSize={"cover"}
                backgroundPositon={"center center"}
                position={"relative"}
              >
                <Box
                  position={"absolute"}
                  top={0}
                  left={0}
                  w={"full"}
                  h={"full"}
                  bg={"rgba(0,0,0,0.7)"}
                >
                  <Text
                    color={"white"}
                    position="absolute"
                    w={"full"}
                    bottom={0}
                    align={"center"}
                    fontWeight={600}
                    py={4}
                  >
                    {" "}
                    Sirl
                  </Text>
                </Box>
              </GridItem>
              <GridItem
                h={"200px"}
                border={"1px"}
                rounded={"md"}
                borderColor={"gray.300"}
                backgroundImage="url(https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjlfMzgg%2FMDAxNjgwMTAwODMxMjU5._p0171-vZnTPHPgBpQU7oN0DjQnBhOZqsTS8ojhhDi0g.j9VFyrTTY2r6SSL77-mO1QUri_5olmfhVn5X5WSC8ZMg.PNG.junseon7%2FBNPL.png&type=sc960_832)"
                backgroundSize={"cover"}
                backgroundPositon={"center center"}
                position={"relative"}
              >
                <Box
                  position={"absolute"}
                  top={0}
                  left={0}
                  w={"full"}
                  h={"full"}
                  bg={"rgba(0,0,0,0.7)"}
                >
                  <Text
                    color={"white"}
                    position="absolute"
                    w={"full"}
                    bottom={0}
                    align={"center"}
                    fontWeight={600}
                    py={4}
                  >
                    {" "}
                    apple music
                  </Text>
                </Box>
              </GridItem>
              <GridItem
                h={"200px"}
                border={"1px"}
                rounded={"md"}
                borderColor={"gray.300"}
                backgroundImage="url(https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjJfMTYy%2FMDAxNjYxMTQxODQxMjY5.aLYjfYYI8khKCOmPGV7bogOMDuCmyfaVq5h2LrlBxbsg._bnORngwST7qH8ifSs6Zp7Oam5YuDfB63V5uT_NsWCMg.JPEG.ccipop%2FScreenshot%25A3%25DF20220822%25A3%25AD130315%25A3%25DFNAVER.jpg&type=sc960_832)"
                backgroundSize={"cover"}
                backgroundPositon={"center center"}
                position={"relative"}
              >
                <Box
                  position={"absolute"}
                  top={0}
                  left={0}
                  w={"full"}
                  h={"full"}
                  bg={"rgba(0,0,0,0.7)"}
                >
                  <Text
                    color={"white"}
                    position="absolute"
                    w={"full"}
                    bottom={0}
                    align={"center"}
                    fontWeight={600}
                    py={4}
                  >
                    {" "}
                    apple TV
                  </Text>
                </Box>
              </GridItem>
            </Grid>
          </VStack>

          {/*이벤트*/}
          <VStack w={"full"} alignItems={"flex-start"}>
            <Text fontWeight={600} fontSize={24}>
              이벤트
            </Text>
            <Grid gap={4} w={"full"}>
              {dataTour.map((item, index) => (
                <GridItem
                  key={index}
                  rounded={"lg"}
                  w={"full"}
                  h={"120px"}
                  bgImage={`url(${item.image})`}
                  bgSize={"cover"}
                  bgPosition={"center center"}
                  position={"relative"}
                  overflow={"hidden"}
                >
                  <Box
                    position={"absolute"}
                    top={0}
                    left={0}
                    w={"full"}
                    h={"full"}
                    bg={"rgba(0,0,0,0.7)"}
                  >
                    <Text
                      position={"absolute"}
                      top={"50%"}
                      left={"50%"}
                      transform={"translate(-50%,-50%)"}
                      fontWeight={"600"}
                      fontSize={"18"}
                      color={"white"}
                    >
                      {item.text}
                    </Text>
                  </Box>
                </GridItem>
              ))}
            </Grid>

            <Grid w={"full"} gap={"2"}>
              <GridItem
                w={"full"}
                h={"120px"}
                backgroundImage="url(https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MDdfNjYg%2FMDAxNjYyNTE2NjY0MTQ3.9CU16bkvLabjKcNdNi5tZczqSEKB7AkJblnSNWY5w9Ig.YE2xMkGLnjNrZiYzETAsWMMFjYdjMNnuH6soor992NAg.PNG.9899893%2F%25C1%25A6%25B8%25F1%25C0%25BB_%25C0%25D4%25B7%25C2%25C7%25D8%25C1%25D6%25BC%25BC%25BF%25E4_-001_%252830%2529.png&type=sc960_832)"
                bgSize={"cover"}
                bgPosition={"center center"}
                position={"relative"}
                overflow={"hidden"}
              >
                <Box
                  position={"absolute"}
                  top={0}
                  left={0}
                  w={"full"}
                  h={"full"}
                  bg={"rgba(0,0,0,0.7)"}
                >
                  <Text position={"absolute"}> 애플페이</Text>
                </Box>
              </GridItem>
              <GridItem
                w={"full"}
                h={"120px"}
                backgroundImage="url(https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MDdfNjYg%2FMDAxNjYyNTE2NjY0MTQ3.9CU16bkvLabjKcNdNi5tZczqSEKB7AkJblnSNWY5w9Ig.YE2xMkGLnjNrZiYzETAsWMMFjYdjMNnuH6soor992NAg.PNG.9899893%2F%25C1%25A6%25B8%25F1%25C0%25BB_%25C0%25D4%25B7%25C2%25C7%25D8%25C1%25D6%25BC%25BC%25BF%25E4_-001_%252830%2529.png&type=sc960_832)"
                bgSize={"cover"}
                bgPosition={"center center"}
                position={"relative"}
                overflow={"hidden"}
              ></GridItem>
            </Grid>
          </VStack>
        </VStack>
      </Layout>
    </>
  );
}
