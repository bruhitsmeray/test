<template>
    <header id = "showcase">
            <div class="showcase-content">
                <div class="container">
                    <div class = "slide">
                        <img src = "assets/images/eutera.jfif" alt = "eutera_logo">
                        <h1>EUTE<span class= "eutera">RA</span></h1>

                        <a href = "https://discord.com/oauth2/authorize?client_id=772944646195511297&scope=bot&permissions=2129853695" class = "s_btn" target = "_blank">INVITE NOW</a>
                    </div>
                </div>
                <input type = "radio" name = "r" id = "r1" checked>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'showcase'
    };
</script>

<style scoped>
    #showcase {
        height: 91.35vh;
        border-radius: 20px;
        margin: 1rem;
        margin-left: 10rem;
        margin-right: 10rem;
        /* background: url('./assets/images/G_background.png') no-repeat center center/cover; */
    }

    #showcase input[name="r"] {
        position: relative;
        margin-bottom: 1vh;
        color: orangered;
    }

    .showcase-content {
        height: 91.35vh;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        background: rgba(255, 255, 255, 0);
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    .showcase-content img {
        height: 128px;
        border-radius: 100%;
        background: white;
        border: 2px solid gray;
        margin-top: 5px;
        margin-left: auto;
    }

    .showcase-content h1 {
        color: white;
        background: url(/assets/images/TEutera.png) no-repeat center center/cover;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        font-size: 2.5rem;
        padding-bottom: 1vh;
    }

    .s_btn {
        border: 1px solid gray;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.375);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        color: white;
        padding: 1rem 2rem;
        display: inline-block;
        font-weight: bold;
        text-decoration: none;
    }

    .showcase-content .s_btn {
        font-size: 1.25rem;
        padding: 1rem 5rem;
    }

    .showcase-content .s_btn:hover {
        background: rgba(255, 255, 255, 0.75);
        color: orangered;
    }

    .btn {
        border: 1px solid orangered;
        border-radius: 25px;
        background: rgba(0, 0, 0, 0.275);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        color: orangered;
        padding: 1rem 2rem;
        display: inline-block;
        font-weight: bold;
        text-decoration: none;
    }
</style>