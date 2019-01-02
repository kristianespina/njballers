<template>
    <div class="custom-navbar">
        <span class="icon">
            <font-awesome-icon icon="home" size="lg" />
        </span>
        <span class="icon">
            <font-awesome-icon icon="file-word" size="lg" />
        </span>
        <span class="icon">
            <font-awesome-icon :icon="['fab', 'facebook']" size="lg" />
        </span>

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
        color: rgb(0, 204, 255);
    }
}
</style>