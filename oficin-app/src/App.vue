<template>
	<v-app>
		<v-main>
			<router-view />
			<v-toolbar dark
				><v-toolbar-title class="headline text-uppercase"
					><span>Vuetify</span><v-spacer></v-spacer
					><v-btn flat target="_blank">CALENDAR TEST</v-btn></v-toolbar-title
			></v-toolbar>
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: 'App',

	data: () => ({
		//
	}),
};
</script>
