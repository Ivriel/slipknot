import database  from "../../config/firebase";
import { collection,getDocs,addDoc,where,query,updateDoc } from "firebase/firestore" ;
async function getProduct () {
    
    let temporary_product = []
    const products  = collection(database, 'products')
    const query_snapshot =  await getDocs(products)
    query_snapshot.forEach((document) => {
        temporary_product.push(
            {
                id:document.id,product:document.data()
            }
        )
    });
    return temporary_product
}
async function getCartItem () {
    let temporary_cart = []
    const cart  = collection(database, 'cart')
    const query_snapshot =  await getDocs(cart)
    query_snapshot.forEach((document) => {
        temporary_cart.push(
            {
                id:document.id,cart:document.data()
            }
        )
    });
    return temporary_cart
}
function itemCount (itemCart) {
        let count = 0
        itemCart.map ((item)=> {
            count = count+item.cart.quantity
        }) 
        return count
}
function subTotal (itemCart) {
        let total = 0
    itemCart.map ((item)=> {
        let pay = item.cart.quantity * item.cart.price
           total = total+pay
    }) 
    return total
}
async function addCart (id_product,name,price,image1,image2,quantity,size,ready,description,ships) {
        const cart  = collection(database, 'cart')
        const cartitem = await getDocs(query(cart,where("id_product","==",id_product),where('size','==',size)))
        if (cartitem.docs.length > 0) {
            cartitem.forEach(async(item)=>{
                await updateDoc(item.ref,{
                    quantity:item.data().quantity+1 
                })
                console.log('succesupdatedata'+item.id)
            })
        } else {
            const newDoC = await addDoc(cart,{
                id_product:id_product,
                name:name,
                price:price,
                image1:image1,
                image2:image2,
                quantity:quantity,
                size:size,
                ready:ready,
                description:description,
                ships:ships
            })
            console.log('succesinsert'+newDoC.id)
        }
}
export  {getProduct,getCartItem,itemCount,subTotal,addCart}