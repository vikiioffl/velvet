const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');

btnCart.addEventListener('click',()=>{
    cart.classList.add('cart-active');
})

btnClose.addEventListener('click',()=>{
    cart.classList.remove('cart-active');
})

document.addEventListener('DOMContentLoaded',loadFood);

function loadFood()
{
    loadContent();
}

function loadContent()
{
    let btnRemove=document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click',removeItem);
    });
    let qtyElements=document.querySelectorAll('.cart-quantity');
    qtyElements.forEach((input)=>{
        input.addEventListener('change',changeQty);
    });
}
function removeItem()
{
    if(confirm('are you sure to remove')){
    this.parentElement.remove();
    }
}
function changeQty()
{
    if(isNaN(this.value)||this.value<1)
    {
        this.value=1;
    }
}