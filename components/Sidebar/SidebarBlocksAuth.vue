<template lang="pug">
  .sidebar-auth
    button.sidebar-auth__link(
      @click="azure"
    ) Войти с Microsoft Account
    .sidebar-separator
    .sidebar-auth__form
      .sidebar-auth__form-header Локальная авторизация
      .sidebar-auth__input-field.sidebar-auth__input-field--user
        input.sidebar-auth__input(
          :value="username"
          placeholder="Логин")
      .sidebar-auth__input-field.sidebar-auth__input-field--pass
        input.sidebar-auth__input(
          :value="password"
          placeholder="Пароль")
      
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class SidebarBlocksAuth extends Vue {
  $auth: any

  username: string | null = null
  password: string | null = null
  
  azure(): void {
    // this.$auth.loginWith('social')
    console.log(this)
  }

  local(): void {
    this.$auth.loginWith('local', {
      data: {
        username: this.username,
        password: this.password,
      }
    })
  }
}
</script>

<style lang="sass" scoped>
.sidebar-auth
  display: flex
  flex-direction: column
  padding: var(--sidebar-padding)


  &__link
    display: flex
    align-items: center
    font-size: 16px
    line-height: 20px
    letter-spacing: -0.1px
    text-decoration: none
    border: none
    outline: none
    height: 48px
    color: white
    border-radius: 5px
    font-weight: bold
    cursor: pointer
    background-color: var(--color-accent)
    box-shadow: 0 0 8px rgba(#1861F2, 0.1), 0 8px 16px -8px rgba(#1861F2, 0.3)

    &::before
      margin-left: 12px
      margin-right: 10px
      content: ''
      width: 24px
      height: 24px
      background: center no-repeat
      background-size: 24px 24px
      background-image: url('/icons/auth-azure.svg')


  &__form
    display: flex
    flex-direction: column
    background-color: #22262A
    border-radius: 5px
    padding: 10px


  &__form-header
    color: #c7ccd1
    font-weight: bold
    font-size: 16px
    display: flex
    align-items: center
    padding-top: 2px
    padding-bottom: 12px
    &::before
      content: ''
      display: flex
      width: 24px
      height: 24px
      margin-right: 10px
      background: center no-repeat
      background-size: 24px 24px
      background-image: url('/icons/auth-local.svg')


  &__input-field
    border-radius: 5px
    color: #c7ccd1
    background-color: #454D54
    display: flex
    height: 38px
    align-items: center
    padding-left: 7px
    margin-bottom: 10px

    &:last-child
      margin-bottom: 0


    &::before
      content: ''
      width: 24px
      height: 24px
      background: center no-repeat
      background-size: 24px 24px

    &--user
      &::before
        background-image: url('/icons/auth-user.svg')

    &--pass
      &::before
        background-image: url('/icons/auth-pass.svg')

  &__input
    margin-left: 7px
    border: none
    outline: none
    font-size: 14px
    line-height: 18px
    width: calc(100% - 40px)
    background: transparent
    color: white

    &::placeholder
      color: #c7ccd1
</style>
