const menuList = document.getElementById('menuList')
const menuHeaders = document.getElementById('menuHeaders')
const menuItems = document.getElementById('menuItems')
const all = document.getElementById('all')

let data  
function fetchData(){
    fetch("https://starbucks-data-five.vercel.app/menus")
    .then(res=>res.json())
    .then(info=>{
        data = info
        showMenu()
    })
}
fetchData()

function showMenu(){
    data.map(item=>{
        menuHeaders.innerHTML+=`
                                <p class="text-[19px] font-[SoDoSansMD] text-[#000]">${item.name}</p>
                                <ul >
                                    ${item.children.map(drinks=>{                                        
                                        return `<li onclick="showProducts('${drinks.id}')" class="py-3"><a href="#" class="text-[.9em] text-[#00000094] font-[SoDoSansRG] my-4 cursor-pointer hover:text-[#000]"> ${drinks.name}</a></li>` 
                                    }).join('')}
                                </ul>
                                `
        menuItems.innerHTML+=`
                              <div class="title">
                                    <h2 class="text-[28px] pb-12">Menu</h2>
                              </div>
                              <div class="${item.name} py-3">
                                    <p class="text-[24px] font-[SoDoSansMD] pb-4 ">${item.name}</p>
                                    <hr class="pb-4" />
                                    <div class='items flex flex-wrap'>
                                         ${item.children.map(drinks=>{
                                        return `<div class=" flex items-center py-3 w-1/2 cursor-pointer" onclick="showProducts('${drinks.id}')">
                                                    <div class="w-[112px] h-[112px] rounded-full bg-[#1e3932] overflow-hidden flex items-center">
                                                        <img src="${drinks.categoryImageURL}" class="relative scale-[2.2]"  />
                                                    </div>
                                                    <div class="drinkName font-[SoDoSansRG] text-[#000000cc] text-[.9em] md:text-[19px] ps-2">${drinks.name}</div>    
                                                </div>` 
                                    }).join('')}
                                    </div>
                              </div>          
        `
    })
}
function showProducts(id){
    let productsArr = []
    menuItems.innerHTML=''
    data.map(item=>{
        item.children.map(drinks=>{
            if(drinks.id == id){
                console.log(drinks);
                productsArr.push(...drinks.children)
                console.log(productsArr);
                
                // console.log(drinks);
                
                menuItems.innerHTML = `
                                         <div class="title">
                                               <h2 class="text-[1em] text-[#00000094] font-[SoDoSansRG] pb-12">Menu / <span class="font-[SoDoSansMD]">${drinks.name}</span></h2>
                                         </div>
                                         ${productsArr.map(choices=>{
                                            return ` <div class="${choices.name} py-3">
                                                            <p class="text-[24px] font-[SoDoSansMD] pb-4 ">${choices.name}</p>
                                                            <hr class="pb-4" />
                                                             <div class='items flex flex-wrap'>
                                                            ${choices.products.map(drinkType=>{             
                                                return `
                                                            <div class="block py-3 w-1/2 md:w-1/3 px-3 md:px-2 lg:px-1 lg:w-1/4  cursor-pointer">
                                                                <div class="w-[142px] h-[142px]  lg:w-[112px] lg:h-[112px] rounded-full bg-[#1e3932] overflow-hidden flex items-center">
                                                                    <img src="${drinkType.imageURL}" class="relative scale-[2.2]"  />
                                                                </div>
                                                                <div class="drinkName font-[SoDoSansRG] text-[#000000cc] text-[19px] py-2 max-w-[150px]">${drinkType.name}</div>    
                                                            </div>
                                                `
                                                                }).join('')}
                                                            </div>
                                                    </div>
                                         `
                                         }).join('')}                                        
                                    `                
            }
        })
        
    })
    

}

