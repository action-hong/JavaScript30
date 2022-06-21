const audios = {

}

const keys = {

}

document.addEventListener('keyup', event => {
  const key = event.keyCode
  /**
   * @type {HTMLElement} 
   */
  let el = keys[key]
  if (!el) {
    el = document.querySelector(`div[data-key="${key}"]`)
    el.addEventListener('transitionend', _ => {
      el.classList.remove('playing')
    })
    keys[key] = el
  }

  /**
   *@type {HTMLAudioElement}
   */
  let audio = audios[key]
  if (!audio) {
    audio = document.querySelector(`audio[data-key="${key}"]`)
    audios[key] = audio
  }

  el.classList.add('playing')
  audio.currentTime = 0
  audio.play()


})