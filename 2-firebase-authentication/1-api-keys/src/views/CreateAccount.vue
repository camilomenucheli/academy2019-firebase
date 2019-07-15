<template>
  <div class="createaccount">
    <div class="content center">
      <img class="logo" :src="require('../assets/logo.png')" alt="Logo"/>

      <form class="createaccount-form" @submit.prevent="createAccount">
        <div class="input-control">
          <label for="email-input">E-mail</label>
          <input v-model="email" type="email" id="email-input" required name="email" class="input" placeholder="Digite seu e-mail">
        </div>

        <div class="input-control">
          <label for="password-input">Senha</label>
          <input v-model="password" type="password" id="password-input" required name="password" class="input" placeholder="Digite sua senha">
        </div>

        <div class="actions">
          <button type="submit" class="center">
            Criar conta
          </button>
        </div>

        <br/>

        <div class="actions">
          <button type="navigate" class="center" @click="returnToLogin">
            Voltar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data: () => ({
    email: '',
    password: ''
  }),

  methods: {
    createAccount () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert('Conta criada com sucesso!')
        }) 
        .catch(error => {
          alert('Erro ao criar conta! \n\n' + error)
        })
    },

    returnToLogin () {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style scoped>
  .createaccount {
    overflow: auto;
    background: url("../assets/fundo.png") no-repeat center center fixed;
    background-color: #54C780;
    background-size: cover;
    width: 100%;
    height: 100%;
  }

  .createaccount > .content {
    width: 320px;
    margin-top: 60px;
    margin-bottom: 60px;
  }

  .center {
    display: block;
    margin: 0 auto;
  }

  .createaccount-form {
    margin-top: 78px;
  }

  .input-control {
    margin-bottom: 20px;
  }

  .input-control > label {
    display: block;
  }

  .input-control > .input {
    height: 48px;
    width: calc(100% - 50px);
    border-radius: 24px;
    border-width: 0;
    background: #FFF;

    font-family: 'Montserrat', sans-serif;
    font-size: 14px;

    padding: 0 25px;
  }

  .input-control > .input:focus {
    background: #F2F2F2;
  }

  .createaccount-form > .actions > button[type="submit"] {
    background-color: #354463;
    border: 0;
    border-radius: 24px;
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 18px;
    width: 160px;
    height: 48px;
    cursor: pointer;
  }

  .createaccount-form > .actions > button[type="navigate"] {
    background-color: #354463;
    border: 0;
    border-radius: 24px;
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 18px;
    width: 160px;
    height: 48px;
    cursor: pointer;
  }

  .logo {
    margin: auto;
    display: block;
  }

  .createaccount > .content > .createaccount-form > .input-control > label {
    display: none;
  }
</style>
