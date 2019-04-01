<template>
    <video width="490" height="460">
        <source
                type="video/mp4"
                src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
        />
    </video>
</template>

<script>
    import "mediaelement/src/css/mediaelementplayer.css";
    if (process.browser) {
        require("mediaelement");
    }

    export default {
        name: "VideoPlayer",
        data: () => ({
            player: null
        }),
        mounted() {
            this.player = new MediaElementPlayer(this.$el, {
                pluginPath: "https://cdnjs.com/libraries/mediaelement/",
                success: function(mediaElement, originalNode, instance) {}
            });
            if (this.player) {
                // this.player.on("play", () => {
                //   this.$emit("play");
                // });
            }
        },
        beforeDestroy() {
            this.player.remove();
        }
    };
</script>
