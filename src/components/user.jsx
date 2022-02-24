import { Text, Box, HStack, VStack, Spacer, Avatar, QuestionIcon, Button } from 'native-base';

export default User = ({ item, navigation }) => {
    if (item.id) {
        return (
            <Box>

                <Box borderBottomWidth="1" _dark={{
                    borderColor: "blue.600"
                }} borderColor="blue.200" pl="4" pr="5" py="2"

                >
                    <HStack space={3} justifyContent="space-between">
                        <VStack>
                            <Avatar size="48px" source={{
                                uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
                            }} />

                        </VStack>
                        <VStack>
                            <Text _dark={{
                                color: "warmGray.50"
                            }} color="coolGray.800" bold>
                                {item.name}
                            </Text>
                            <Text color="blue.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                {`Email: ${item.email}`}
                            </Text>
                            <Text color="warmGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                {`Phone Number: ${item.phone}`}
                            </Text>
                            <Button
                                colorScheme='blue'
                                onPress={() => {
                                    navigation.navigate({
                                        name: 'details',
                                        params: { id: item.id }
                                    })
                                }}
                            >
                                <Text>See More...</Text>
                            </Button>
                        </VStack>
                        <Spacer />

                    </HStack>
                </Box>


            </Box>
        )
    }
    return <Text>You have no friends ...</Text>
} 