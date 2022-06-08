"use strict";

const app = Vue.createApp({
	data() {
		return {
			firstName: "John",
			lastName: "Doe",
			emailAddress: "email@email.com",
			picture: "https://randomuser.me/portraits/men/10.jpg",
			gender: "male",
		};
	},

	methods: {
		async getUser() {
			const fetchData = await fetch("https://randomuser.me/api/");
			const { results } = await fetchData.json();
			const [userInfo] = results;

			this.firstName = userInfo.name.first;
			this.lastName = userInfo.name.last;
			this.emailAddress = userInfo.email;
			this.picture = userInfo.picture.large;
			this.gender = userInfo.gender;
		},
	},
});

app.mount("#app");
