const app = new Vue({
  el: '#app',
  data: {
    submissions: submissions
  },
  computed: {
  	sortedSubmissions() {
  		return this.submissions.sort((a, b) => b.votes - a.votes);
  	}
  }
});