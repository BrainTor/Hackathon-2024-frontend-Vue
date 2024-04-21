<template>
    <div style = "position: relative; width: fit-content; height: fit-content;">
        <img src="@/assets/img/backgroundImg.jpeg" class = "imgCard">
        <div style = " font-family: 'Noto Sans' , sans-serif;">

            <div class="flex flex-col cont_layer">

                <div class="flex pl-2 pt-2 top_layer">
                    <img class="logo" src="@/assets/img/imgLogoMain.png">
                              
                <div class = "ml-2">
                    <p class="font-bold">Карта жителя</p>
                    <p>Ростова-на-Дону</p> 
                </div>
                </div>
      
                <div class="flex flex-row mr-4 mb-2 low_layer">
                    <p class="plus">+</p>
                    <slot name = "money" class="money">0р.</slot>
                     
                </div>
            </div>



        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.logo{
    width: 60px;
    height: 60px;
}
.imgCard{
    width: 320px;
    border-radius: 14px;
}
.cont_layer{
    position: absolute;
    top: 0%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    width: 100%;

}

.low_layer{
    align-self: end;
    font-size: 16pt;
    color: white;
}
</style>