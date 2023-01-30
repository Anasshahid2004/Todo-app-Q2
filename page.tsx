"use client"
import { Button, Flex, ListItem, UnorderedList, Text, Input } from '@chakra-ui/react'
import { use, useState } from 'react'
export default function Home() {
    const [tasks, setTasks] = useState(["1", "2", "3"])
    const [Item, setItem] = useState("")
    function removeItem(taskName: string) {
        setTasks(tasks.filter(task => {
            return task != taskName
        }))
    }

    function AddItem() {
        if (Item != "" && !tasks.includes(Item)) {
            let temp = tasks;
            temp.push(Item)
            setTasks(temp)
            setItem("")
        }
    }
    return (
        <><h1>Todo App</h1><Flex
            justifyContent="center"
            alignItems="center"
            width="100%"
            
            height="100%"
            flexDirection="column"

        >

            <Input
                placeholder='Search Item'
                value={Item}
                color="black"
                marginBottom="10"
                borderRadius="5"
                onChange={(e) => {
                    setItem(e.target.value)
                }}>
            </Input>
            <Button  onClick={AddItem}  >Add Item</Button>
        </Flex> <UnorderedList>
                {tasks.map((task) => {
                    return (<ListItem key={task}>
                        {task}
                        <Button
                            ml={10}
                            backgroundColor="black"

                            color="#e7e7e7"
                            marginLeft="10"
                            
                            
                            // marginLeft="5"
                            borderRadius="5"
                            onClick={() => {
                                removeItem(task)
                            }}>
                            Delete
                        </Button>


                    </ListItem>)
                })}
            </UnorderedList></>
    )
}