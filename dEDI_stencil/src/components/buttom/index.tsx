import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'app-buttom',
  shadow: true,
  styleUrls: ['style.css'],
})
export class Buttom {
  @Prop()
  loginbutton: string = 'Login'
  @Prop()
  rootClassName: string = ''

  render() {
    return (
      <div class={`container ${this.rootClassName} `}>
        <button
          id="login_button"
          name="Login"
          type="submit"
          class="loginbutton thqButton"
        >
          {this.loginbutton}
        </button>
      </div>
    )
  }
}
