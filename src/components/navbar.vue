<template>
    <div id = "navbar">
        <div class = "nav-button">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <ul class = "nav-links">
            <li><a href = "#home">HOME</a></li>
            <li><a href = "#about">ABOUT</a></li>
            <li><a href = "#projects">PROJECTS</a></li>
            <li><a href = "#contact">CONTACT</a></li>
            <li><a href = "#social">SOCIAL</a></li>
        </ul>
    </div>
</template>

<script>
    import $ from 'jquery'

    export default {
        name: 'navbar'
    };

    $('#navbar a, #about a , .btn').on('click', function(event) {
    if(this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 80
            }, 800);
    }
});
</script>

<style scoped>
    #navbar {
    top: 0;
    z-index: 1;
    height: 8vh;
    position: sticky;
    color: black;
    background: rgb(245, 245, 245);
    }

    .nav-links {
        height: 100%;
        margin-left: auto;
        display: flex;
        list-style: none;
        align-items: center;
        justify-content: space-around;
    }

    .nav-links li a {
        border-radius: 10px;
        color: black;
        padding: 1rem;
        font-size: 16px;
        text-decoration: none;
        transition: background-color 0.25s;
    }

    .nav-links li a:hover {
        color: white;
        background-color: orangered;
    }
</style>