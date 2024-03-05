import React from "react";
import { Box, Container, Heading, Text, Button, Image, VStack, HStack, useColorMode, IconButton, Spacer } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={4} as="header">
        <HStack width="100%">
          <Heading as="h1" size="xl">
            Minecraft World
          </Heading>
          <Spacer />
          <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} aria-label="Toggle color mode" />
        </HStack>
        <Text>Welcome to the ultimate Minecraft fan page!</Text>
      </VStack>

      <VStack as="main" spacing={4} my={8}>
        <Image borderRadius="lg" src="https://images.unsplash.com/photo-1607060097954-19f0931d65c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtaW5lY3JhZnQlMjBsYW5kc2NhcGV8ZW58MHx8fHwxNzA5NjMzMjg5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Minecraft Landscape" />
        <Button leftIcon={<FaGithub />} colorScheme="teal" variant="solid">
          Star on GitHub
        </Button>
      </VStack>

      <Box as="footer" textAlign="center" py={4}>
        <Text>&copy; {new Date().getFullYear()} Minecraft Fansite</Text>
      </Box>
    </Container>
  );
};

export default Index;
