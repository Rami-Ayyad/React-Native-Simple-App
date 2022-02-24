import { Box, Button, Text, NativeBaseProvider, HStack, Spinner, Stack, AspectRatio, Center, Image, Heading } from 'native-base'
import { useContext, useEffect } from 'react'
import { getUserDetails, stateClearance } from '../actions/actions'
import { UsersDataContext } from '../context/usersContext';

export default function Details(props) {

  const { state, dispatch } = useContext(UsersDataContext)

  useEffect(() => {

    let actionResolve = async () => {
      dispatch(await getUserDetails(props.route.params.id))
    }
    actionResolve()
    return () => {
      dispatch(stateClearance())
    }
  }, []);

  if (state.singleUser.id)
    return (
      <Box alignItems="center">
        <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700"
        }} _web={{
          shadow: 2,
          borderWidth: 0
        }} _light={{
          backgroundColor: "gray.50"
        }}>
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image source={{
                uri: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              }} alt="image" />
            </AspectRatio>
            <Center bg="violet.500" _dark={{
              bg: "violet.400"
            }} _text={{
              color: "warmGray.50",
              fontWeight: "700",
              fontSize: "xs"
            }} position="absolute" bottom="0" px="3" py="1.5">
              Online
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {state.singleUser.name}
              </Heading>
              <Text fontSize="xs" _light={{
                color: "violet.500"
              }} _dark={{
                color: "violet.400"
              }} fontWeight="500" ml="-0.5" mt="-1">
                {`Nick Name: ${state.singleUser.username}`}
              </Text>
            </Stack>
            <Text fontWeight="400">
              {`Email: ${state.singleUser.email}`}
            </Text>
            <Text fontWeight="400">
              {`Phone No.: ${state.singleUser.phone}`}
            </Text>
            <Text fontWeight="400">
              {`Portofolio: ${state.singleUser.website}`}
            </Text>
            <Text fontWeight="400">
              {`Lives in: ${state.singleUser.address.city}`}
            </Text>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <Text color="coolGray.600" _dark={{
                  color: "warmGray.200"
                }} fontWeight="400">
                  Connection: Friend
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </Box>
    )
  return (
    <HStack style={{ marginTop: 300 }} space={8} justifyContent="center" alignItems="center">
      <Text>LOADING ...</Text>
      <Spinner size="lg" />
    </HStack>
  )
}