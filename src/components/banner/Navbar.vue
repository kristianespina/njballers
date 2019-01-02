<template>
    <div class="custom-navbar">
        <a class="icon" href="#">
            <font-awesome-icon icon="home" size="lg" />
        </a>
        <a class="icon" href="#">
            <font-awesome-icon icon="file-word" size="lg" />
        </a>
        <a class="icon" href="#">
            <font-awesome-icon :icon="['fab', 'facebook']" size="lg" />
        </a>

    </div>
</template>
<script>
export default {
    name: "Navbar"
};
</script>
<style lang="scss">
.custom-navbar {
    padding-top: 1rem;
}
.icon {
    padding: 0.5rem;
    &:hover {
        color: rgb(0, 204, 255) !important;
    }
}
a {
    color: white !important;
}
</style>