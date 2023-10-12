// create app then mount it to that particular sections

// mount to theid tag in the html
const app = Vue.createApp({
    data() {
        //ALWAYS RETURNS AND OBJECT
        return {
            courseGoal1: 'Learn advanced Javascript',
            courseGoal2: 'Learn Vue'
        }
    }
})

app.mount('#myGoals');