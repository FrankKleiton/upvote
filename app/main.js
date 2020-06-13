const app = new Vue({
  el: '#app',
  data: {
    submissions: Seed.submissions
  },
  computed: {
  	sortedSubmissions() {
  		return this.submissions.sort((a, b) => b.votes - a.votes);
  	}
  },
  methods: {
  	upvote(id) {
  		const submission = this.submissions.find(el => el.id === id);
  		submission.votes++;
  	}
  }
});