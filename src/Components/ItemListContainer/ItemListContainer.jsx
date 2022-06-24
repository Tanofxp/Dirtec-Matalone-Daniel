import React, { useEffect,useState } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {Box, Text, Spinner, SimpleGrid, useColorModeValue} from '@chakra-ui/react';


export default function ItemListContainer() {
  const [productoList, setProductoList] = useState([])
  const [loading, setLoading] = useState(true)
  const spinnerColor = useColorModeValue('yellow.400', 'blue.500');
  const spinnerEmptyColor = useColorModeValue('gray.400', 'gray.200');
  let { idProducto } = useParams();
  console.log(idProducto)
  useEffect(() => {
    const producto = [
      { id: 1, Modelo: 'Thinkpad X1' ,           Marca: 'Lenovo ', precio: 230000, imgURL: "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen-9-14-series-thumbnail.png?context=bWFzdGVyfHJvb3R8ODExMzV8aW1hZ2UvcG5nfGhjZC9oMGYvMTQwNzA2NzQ1ODc2NzgucG5nfDg2NTMzNzNlMThiMDI3ZGU0NzY1YmViNmQ4YmU2YjJjNjE3MmU2NDRmNWZlMTczMmY4Mzk5NTUwMGM1NzdjNDM" },
      { id: 2, Modelo: 'Thinkpad X1 Fold' ,      Marca: 'Lenovo ', precio: 180000, imgURL: "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-fold-front.png?context=bWFzdGVyfHJvb3R8OTc2MzB8aW1hZ2UvcG5nfGhjMy9oYjQvMTQyNzc5ODU3MzA1OTAucG5nfDhkNDM2NjBmODcxYjRlODM4NmZmZjNmZmI3M2JhNTFlMjBlMDA1ODdmOTk4MGQ5YjhjMWY5ZDdlNTU0NmNlYWM" },
      { id: 3, Modelo: 'Thinkpad E15' ,          Marca: 'Lenovo ', precio: 100000, imgURL: "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-e14-gen-2-series.png?context=bWFzdGVyfHJvb3R8ODAxOTN8aW1hZ2UvcG5nfGg5OS9oMmIvMTQxMDY5MjIwNTc3NTgucG5nfDY1Y2UyNTBkYjFlYzIxMTE2ZmU4YjYxNjU5YmQxMjEzZjMzMDAwNTg4Yzg5NmIwNmE3NzM4NDE3NjYzMWJkNjk" },
      { id: 4, Modelo: 'Thinkpad 100e' ,         Marca: 'Lenovo ', precio: 150000, imgURL: "https://www.lenovo.com/medias/lenovo-100e-windows-front.png?context=bWFzdGVyfHJvb3R8MjI5MTN8aW1hZ2UvcG5nfGhkMC9oZWEvOTg5NzM3MDU1MDMwMi5wbmd8ZTMxODY1YTJkY2UxZjY3NjBlMGFmMWYwNTM3ZjBlOGZkNjc0YzgwNmY5MjE4MmVmZGRjMmFiZDlmMWQyZWRkYg" },
      { id: 5, Modelo: 'Thinkpad IdeaPad Flex' , Marca: 'Lenovo ', precio: 195000, imgURL: "https://www.lenovo.com/medias/lenovo-laptop-ideapad-flex-5-14inch-amd-front.png?context=bWFzdGVyfHJvb3R8MTAwMTM4fGltYWdlL3BuZ3xoNzYvaGQ4LzE0MTkwNTQ4Mzg1ODIyLnBuZ3wwYTQ0NDc2ZTcxYzU3OGI4ZjExMjZiZmU4ZjQ0NmNkYjA4ZmY0NmY0ZTQ1YjUxYmJiZDMxZDY3ODJiMGQyN2Y5" },
      { id: 6, Modelo: 'Thinkpad IdeaPad 5i' ,   Marca: 'Lenovo ', precio: 90000,  imgURL: "https://www.lenovo.com/medias/lenovo-laptops-ideapad-5i-14-series.png?context=bWFzdGVyfHJvb3R8MTAwMTg5fGltYWdlL3BuZ3xoMGUvaDUwLzE0Mjc4MDA5NjE4NDYyLnBuZ3wyN2VhY2JjYTAxZjdmMmQ4NDI4OTMxN2VlMzhkODhjNWFmZmRmZTNiZWVmMGY2MTE4MDAyMGZjMTIwZjZkZGJl" }
    ];
    
    
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (idProducto !== ""){
              resolve(producto)
            }else{
              let arrayFiltrado = producto.filter((item) => item.id === idProducto);
              resolve(arrayFiltrado)
            }
          

      }, 2000);
    }).then((res)=>{
      
        setProductoList(res)
        setLoading(false)
    })
    

  }, [idProducto])

  function onAdd(){
    alert("Agregaste los Items al carrito")
  }
  

  return (
    
      <>
      { loading ? 
        <Box align='center' mt={250}>
          <Spinner thickness='4px' speed='0.65s' emptyColor={spinnerEmptyColor} color={spinnerColor} size='xl' /> 
          <Text>Cargando...</Text>
        </Box> 
        : <SimpleGrid minChildWidth='400px' spacing='10px'>
            <ItemList  productList={productoList} onAdd={onAdd}/>
          </SimpleGrid> }
    </> 
  )
}
