<template>
  <div class="container">
    <form>
      Enter an ID number for your desired category, or leave blank for random<br>
      <input ref="number" placeholder="Category ID">
      <button @click.prevent="clickQuestionButton()">
        Get Question
      </button>
    </form>

    <div class="second-box">
      <br>
      <h3 ref="category" />
      <p id="question" ref="question" /><br>

      <button @click.prevent="clickAnswerButton()">
        Get Answer
      </button><br><br>
      <p ref="answer" />
    </div><br><br>

    <div class="third-box">
      <h1 id="idsaver" />
      <h2>Some category ID numbers:</h2>
      <ul>
        <li>Movies: 4</li>
        <li>Magazines: 752</li>
        <li>Stupid Answers: 136</li>
        <li>Old Testiment Books: 7969</li>
        <li>dictators & tyrants: 9238</li>
        <li>economics: 761</li>
        <li>you should know this: 17770</li>
        <li>1960s broadway: 1329</li>
        <li>antonyms: 1564</li>
        <li>movies by cast: 16271</li>
        <li>inventors: 1498</li>
        <li>5-letter words: 139</li>
        <li>chocolate: 212</li>
        <li>familiar tv faces: 4769</li>
        <li>spaced out: 5256</li>
      </ul>
    </div>
  </div>
</template>

<script>

import { Vue } from 'nuxt-property-decorator'

export default class extra extends Vue {
  // question = 'question goes here'
  answer = ''
  question = ''
  update = 0

  async clickQuestionButton () {
    console.log('in click question button')
    let number = this.$refs.number.value
    this.answer = ''
    this.$refs.category.textContent = ''
    this.$refs.answer.textContent = ''

    let url = ''
    if (number === '') {
      number = '1'
      url = 'https://jservice.io/api/random/?' + number + '?json'
    } else {
      url = 'https://jservice.io//api/category?id=' + number
      console.log('https://jservice.io//api/category?id=' + number)
    }

    try {
      let response = await fetch(url)
      response = await response.json()
      console.log('response.json: ', response)

      if (response.clues) {
        const randNum = Math.floor(Math.random() * response.clues.length)
        this.question = response.clues[randNum].question
        this.answer = response.clues[randNum].answer
        this.$refs.category.textContent = 'Category ID: ' + response.clues[randNum].category_id
      } else {
        this.question = response[0].question
        this.answer = response[0].answer
        this.$refs.category.textContent = response[0].category.id + ': ' + response[0].category.title
      }

      this.$refs.question.textContent = this.question
      console.log('question: ', this.question)
    } catch (e) {
      this.$refs.question.textContent = 'No questions found'
    }

  }

  clickAnswerButton () {
    this.$refs.answer.textContent = this.answer
  }
}
</script>

<style scoped>
* {
  text-align: center;
  list-style: none;
}

button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

input {
  margin: 14px;
  outline-style: auto;
}

.container {
  margin-top: 25px;
}

</style>
