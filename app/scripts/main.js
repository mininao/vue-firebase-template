var app = new Vue({
	el: '#app',
	data: {
		cities: {}
	}
})

var ref = new Firebase("https://publicdata-weather.firebaseio.com");

ref.on("value",function(snap){
	app.cities = snap.val()
});
