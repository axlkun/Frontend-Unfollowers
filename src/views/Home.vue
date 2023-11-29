<template>
    <div>
        <!-- Seccion de inicio -->
        <HomeSection></HomeSection>

        <!-- Seccion del como funciona -->
        <HowWorks></HowWorks>

        <!-- seccion del video tutorial -->
        <VideoTutorial></VideoTutorial>
        
        <!-- seccion de Por que Unfollowers -->
        <WhyUnfollowers></WhyUnfollowers>

        <!-- seccion de contacto  -->
        <ContactSection></ContactSection>
        
        <CallToAction></CallToAction>

    </div>
</template>

<script>
import HomeSection from '../components/HomeSection.vue';
import HowWorks from '../components/HowWorks.vue';
import VideoTutorial from '../components/VideoTutorial.vue';
import WhyUnfollowers from '../components/WhyUnfollowers.vue';
import ContactSection from '../components/ContactSection.vue';
import CallToAction from '../components/CallToAction.vue';

export default {

    components: {
        HomeSection,
        HowWorks,
        VideoTutorial,
        WhyUnfollowers,
        ContactSection,
        CallToAction
    },

}

</script>

<style scoped>
</style>