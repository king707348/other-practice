const itemText = document.querySelector(".itemText")
const cartList = document.querySelector(".cart_list")
const cartCount = document.querySelector(".cart_count")
let numCart = Number(cartCount.textContent)

console.log(cartList.children.length)


function itemCart(){
    numCart = cartList.children.length
    console.log(numCart)
    cartCount.innerHTML = `${numCart}` 
    if(numCart === 0){
        itemText.innerHTML = `趕快來購物`
        cartList.classList.add("d-none")
    }
}


function deleteItem(){
    let del = document.querySelector(".del")
    cartList.addEventListener("click",function (e){
        console.log(e.target)
        if(event.target.classList.contains("del")){
            let li = event.target.parentElement
            li.remove()
            return itemCart()
        }
    })
}
itemCart()
deleteItem()


