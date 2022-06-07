<!--<template>-->
<!--  <div>-->
<!--    <form>-->
<!--      Enter an ID number for your desired category, or leave blank for random<br>-->
<!--      <input placeholder="Category ID" id="number">-->
<!--      <button @click.prevent="clickQuestionButton()">Get Question</button>-->
<!--    </form>-->

<!--    <div class="second-box">-->
<!--      <br>-->
<!--      <h3 id="category"></h3>-->
<!--      <p id="question" v-model="question" :key="question"></p>-->
<!--      <p id="answer" v-model="answer"></p>-->

<!--      <br>-->
<!--      <button id="answerButton" class="pure-button pure-button-primary">Get Answer</button>-->
<!--      <p id="answerShown"></p>-->
<!--      <p id="answer"></p>-->
<!--    </div>-->

<!--    <div class="third-box">-->
<!--      <h1 id="idsaver"></h1>-->
<!--      <h2>Some category ID numbers:</h2>-->
<!--      <ul>-->
<!--        <li>Movies: 4</li>-->
<!--        <li>Magazines: 752</li>-->
<!--        <li>Stupid Answers: 136</li>-->
<!--        <li>Old Testiment Books: 7969</li>-->
<!--        <li>dictators & tyrants: 9238</li>-->
<!--        <li>economics: 761</li>-->
<!--        <li>you should know this: 17770</li>-->
<!--        <li>1960s broadway: 1329</li>-->
<!--        <li>antonyms: 1564</li>-->
<!--        <li>movies by cast: 16271</li>-->
<!--        <li>inventors: 1498</li>-->
<!--        <li>5-letter words: 139</li>-->
<!--        <li>chocolate: 212</li>-->
<!--        <li>familiar tv faces: 4769</li>-->
<!--        <li>spaced out: 5256</li>-->
<!--      </ul>-->
<!--    </div>-->

<!--  </div>-->

<!--</template>-->

<!--<script>-->

<!--import {Vue} from "nuxt-property-decorator";-->

<!--//document.getElementById('getQuestion').addEventListener('click', clickQuestionButton);-->

<!--export default class extra extends Vue {-->
<!--  question = ''-->
<!--  answer = ''-->

<!--  async clickQuestionButton() {-->

<!--    console.log('in click question button')-->
<!--    let number = document.getElementById("number").value;-->

<!--    let url = "";-->
<!--    if (number === "") {-->
<!--      number = "1";-->
<!--      url = "http://jservice.io/api/random/?" + number + "?json";-->
<!--    }-->
<!--    else {-->
<!--      url = "http://jservice.io//api/category?id=" + number;-->
<!--      console.log("http://jservice.io//api/category?id=" + number);-->
<!--    }-->

<!--    let response = await fetch(url)-->
<!--    console.log('response.json: ', response.json)-->
<!--    this.question = response.json.question-->
<!--  }-->

<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--* {-->
<!--  text-align: center;-->
<!--}-->
<!--</style>-->
