<template>
    <header class="header">
        <nav>
            <div class="logo" @click="redirectToHome">
                <a><span>Un</span>followers</a>
            </div>
            <input type="checkbox" id="menu-toggle">
            <label for="menu-toggle" class="menu-icon">&#9776;</label>
            <ul class="menu">
                <li><a @click="scrollToSection('steps', currentRoute)">Tutorial</a></li>
                <li><a @click="scrollToSection('contact', currentRoute)">Contacto</a></li>
            </ul>
        </nav>
    </header>
</template>
  
<script>
import { scrollToSection } from '../utils/utils';

export default {

    name: 'myHeader',

    data() {
        return {
            currentRoute: '', // Aquí almacenaremos la ruta actual
        };
    },

    methods: {
        scrollToSection, // se declara la función importada

        redirectToHome() { // función que reedirige al home
            console.log('aqui');
            this.$router.push('/');
        }
    },

    watch: {
        '$route.path'(newPath) { // observa cambios en las rutas que se visitan
            this.currentRoute = newPath;
        },
    },

    mounted() {
    // Inicializa la ruta actual cuando la aplicación se carga
    this.currentRoute = this.$route.path;
  }

}
</script>
  
<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    text-decoration: none;
    list-style: none;
}

.header {
    position: sticky;
    top: 0;
    width: 100%;
    background-color: #F5F5F5;
    z-index: 100;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
}

.logo a {
    font-size: 24px;
    font-weight: bold;
    color: #424242;
    cursor: pointer;
}

.logo a span {
    color: #E91E63;
}

.menu {
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu a {
    display: block;
    padding: 7px 15px;
    font-size: 17px;
    font-weight: 500;
    transition: 0.2s all ease-in-out;
    color: #424242;
    cursor: pointer;
}

.menu a:hover {
    color: #E91E63;
}

.menu-icon {
    display: none;
}

#menu-toggle {
    display: none;
}

#menu-toggle:checked~.menu {
    transform: scale(1, 1);
}

@media only screen and (max-width: 950px) {

    .header {
        position: static;
    }

    .menu {
        flex-direction: column;
        background-color: #F5F5F5;
        align-items: start;
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        z-index: 1;
        transform: scale(1, 0);
        transform-origin: top;
        transition: transform 0.3s ease-in-out;
    }

    .menu a {
        margin-left: 12px;
    }

    .menu li {
        margin-bottom: 10px;
    }

    .menu-icon {
        display: block;
        color: #E91E63;
        font-size: 28px;
        cursor: pointer;
    }


}
</style>