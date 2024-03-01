import { createSlice } from "@reduxjs/toolkit";
const initial={
    cart:[]
}
const productSlice=createSlice(
    {
name:"mycart",
initialState:initial,
reducers:{
    addData:(state,action)=>{ 
    var myitem=state.cart.filter((key)=>key.id===action.payload.id);
    if(myitem.length>=1)
    {
        alert ("product alradey add") 
    }
else{
        state.cart.push(action.payload)
}},
CartRemove:(state ,action)=>
{state.cart=state.cart.filter(item=>item.id!==action.payload) 
},
proQtyInc:(state,action)=>{
    for(var i=0;i<state.cart.length;i++)
    {
        if (state.cart[i].id===action.payload)
        {
            state.cart[i].Quantity++;
        }
    }

},
proQtyDec:(state,action)=>
{
    for(var i=0;i<state.cart.length;i++)
    {
        if (state.cart[i].id===action.payload)
        {

            if(state.cart[i].Quantity>1)
             {state.cart[i].Quantity--;
            }
             else
             {
                alert("atlist one product buy")
             }
               
            }
    }

},
Cartimpt:(state )=>
{state.cart=state.cart=[]; 
},

},

}


)

export const{addData,CartRemove,proQtyInc,proQtyDec,Cartimpt}=productSlice.actions;
export default productSlice.reducer;