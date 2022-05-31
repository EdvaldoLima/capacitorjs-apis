<template>
	<div>
		<Back />
		<br />
		<img width="500" :src="imageLoaded" />
	</div>
</template>

<script>
import { takePicture } from "@/services/camera";
import Back from "@/components/Back.vue";
export default {
	name: "Camera",
	components: {
		Back,
	},
	data() {
		return {
			imageLoaded: null,
		};
	},
	methods: {
		async getImage() {
			const image = await takePicture();
			this.imageLoaded = image;
		},
	},
	mounted() {
		this.getImage();
	},
};
</script>

<style></style>
