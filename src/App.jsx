import { useState } from 'react'
import { Box, Card, Flex, Image, Text, Button } from '@chakra-ui/react'

const ITEMS = [
  { id: 'steak', name: 'Eat Am Are', price: null },
  { id: 'lenyai', name: 'Lenyai', price: 550 },
  { id: 'karaoke', name: 'Karaoke', price: 50 },
]

function App() {
  const [totalPrice, setTotalPrice] = useState(0)
  const [selectedItems, setSelectedItems] = useState([])
  const [steakClicked, setSteakClicked] = useState(false)
  const [steakPriceSelected, setSteakPriceSelected] = useState(false)
  const [drinkPriceSelected, setDrinkPriceSelected] = useState(false)
  const [specialApplied, setSpecialApplied] = useState(false)

  const handleItemClick = (id, price) => {
    if (id === 'steak') {
      setSteakClicked(true)
      return
    }

    if (selectedItems.includes(id)) {
      setTotalPrice(totalPrice - price)
      setSelectedItems(selectedItems.filter(item => item !== id))
    } else {
      setTotalPrice(totalPrice + price)
      setSelectedItems([...selectedItems, id])
    }
  }

  const handleSpecial = (price) => {
    if (specialApplied) {
      setTotalPrice(totalPrice - price)
    } else {
      setTotalPrice(totalPrice + price)
    }
    setSpecialApplied(!specialApplied)
  }

  const handleSteakPriceSelect = (price) => {
    setTotalPrice(totalPrice + price)
    setSelectedItems([...selectedItems, 'steak'])
    setSteakPriceSelected(true)
  }

  const handleDrinkPriceSelect = (price) => {
    setTotalPrice(totalPrice + price)
    setDrinkPriceSelected(true)
  }

  return (
    <Box height="100vh" display="flex" flexDirection="column" alignItems="center">
      <Flex mt="2" gap="2">
        {ITEMS.map(i => (
          <Item
            key={i.id}
            {...i}
            onClick={() => handleItemClick(i.id, i.price)}
            isSelected={selectedItems.includes(i.id)}
          />
        ))}
      </Flex>
      {steakClicked && (!steakPriceSelected || !drinkPriceSelected) && (
        <Box mt="4">
          <Text fontSize="2xl">Choose Steak Price:</Text>
          <Image src='/src/assets/receipt.png' />
          <Button
            onClick={() => handleSteakPriceSelect(189)}
            mt="2"
            bg="white"
            color="black"
            outline="solid"
            outlineColor="gray.100"
            _hover={{ bg: 'gray.200' }}
          >
            189 Baht
          </Button>
          <Button
            onClick={() => handleSteakPriceSelect(199)}
            mt="2"
            ml="2"
            bg="white"
            color="black"
            outline="solid"
            outlineColor="gray.100"
            _hover={{ bg: 'gray.200' }}
          >
            199 Baht
          </Button>
          <Button
            onClick={() => handleSteakPriceSelect(204)}
            mt="2"
            ml="2"
            bg="white"
            color="black"
            outline="solid"
            outlineColor="gray.100"
            _hover={{ bg: 'gray.200' }}
          >
            204 Baht
          </Button>
          <Button
            onClick={() => handleSteakPriceSelect(239)}
            mt="2"
            ml="2"
            bg="white"
            color="black"
            outline="solid"
            outlineColor="gray.100"
            _hover={{ bg: 'gray.200' }}
          >
            239 Baht
          </Button>
          <Text fontSize="2xl" mt="4">แดกน้ำอะไร:</Text>
          <Button
            onClick={() => handleDrinkPriceSelect(30)}
            mt="2"
            bg="white"
            color="black"
            outline="solid"
            outlineColor="gray.100"
            _hover={{ bg: 'gray.200' }}
          >
            Coke - 30 Baht
          </Button>
          <Button
            onClick={() => handleDrinkPriceSelect(6)}
            mt="2"
            ml="2"
            bg="white"
            color="black"
            outline="solid"
            outlineColor="gray.100"
            _hover={{ bg: 'gray.200' }}
          >
            Water - 6 Baht
          </Button>
        </Box>
      )}
      <Text fontSize="5xl" mt="4">{totalPrice} Baht</Text>
      <Image src="/src/assets/qr.jpg" boxSize="200px" fit="contain" />
      <Button
        onClick={() => handleSpecial(-100)}
        mt="2"
        ml="2"
        bg={specialApplied ? 'green.200' : 'white'}
        color="black"
        outline="solid"
        outlineColor="gray.100"
        _hover={{ bg: 'gray.200' }}
      >
        ไอมิกกดปุ่มนี้ (ค่าตีแบต 100)
      </Button>
      <Button
        onClick={() => handleSpecial(-40)}
        mt="2"
        ml="2"
        bg={specialApplied ? 'green.200' : 'white'}
        color="black"
        outline="solid"
        outlineColor="gray.100"
        _hover={{ bg: 'gray.200' }}
      >
        ไอเวฟกดปุ่มนี้ (ค่าข้าวมันไก่ 40)
      </Button>
      <Button
        onClick={() => handleSpecial(-100)}
        mt="2"
        ml="2"
        bg={specialApplied ? 'green.200' : 'white'}
        color="black"
        outline="solid"
        outlineColor="gray.100"
        _hover={{ bg: 'gray.200' }}
      >
        ไอแดนกดปุ่มนี้ (ค่ายืมเงิน 100)
      </Button>
    </Box>
  )
}

function Item({ id, name, price, onClick, isSelected }) {
  return (
    <Card.Root
      height="220px"
      width="200px"
      onClick={onClick}
      cursor="pointer"
      bg={isSelected ? 'green.200' : 'white'}
      _hover={{ bg: 'gray.100' }}
    >
      <Card.Body display="flex" flexDirection="column" alignItems="center" gap="2">
        <Image src={`/src/assets/${id}.jpg`} boxSize="100px" borderRadius="full" />
        <Card.Title mt="2">{name}</Card.Title>
        {id !== 'steak' && <Text>{price} Baht</Text>}
      </Card.Body>
    </Card.Root>
  )
}

export default App