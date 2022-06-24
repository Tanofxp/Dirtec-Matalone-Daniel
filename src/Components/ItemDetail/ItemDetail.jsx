import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Box } from '@chakra-ui/react'

export default function ItemDetail() {

    function onAdd(){
        alert("Agregaste los Items al carrito")
    }


    return (
        <>
        <br/>
        <Box borderWidth='2px' borderRadius='lg' width='200px' p={5} m='auto' borderColor='gray.500'>
            <ItemCount Stock={20} initial={1} onAdd={onAdd}/>
        </Box>

        </>
        )
}
