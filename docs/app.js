const screens = [...document.querySelectorAll('[data-screen]')]
const appShell = document.querySelector('[data-app-shell]')
const welcome = document.querySelector('[data-welcome]')
const onboarding = document.querySelector('[data-onboarding]')
let step = 0
const questions = [...document.querySelectorAll('[data-question]')]

function showStandalone(target) {
  welcome.hidden = target !== 'welcome'
  onboarding.hidden = target !== 'onboarding'
  appShell.hidden = true
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function showApp(target = 'home') {
  welcome.hidden = true
  onboarding.hidden = true
  appShell.hidden = false
  screens.forEach((screen) => screen.hidden = screen.dataset.screen !== target)
  document.querySelectorAll('[data-nav]').forEach((button) => button.classList.toggle('active', button.dataset.nav === target))
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function renderQuestion() {
  questions.forEach((q, index) => q.hidden = index !== step)
  const progress = ((step + 1) / questions.length) * 100
  document.querySelector('[data-onboarding-progress]').style.width = `${progress}%`
  document.querySelector('[data-step-counter]').textContent = `${step + 1}/${questions.length}`
  document.querySelector('[data-next]').disabled = !questions[step].querySelector('.option-card--selected')
}

document.addEventListener('click', (event) => {
  const button = event.target.closest('button')
  if (!button) return
  if (button.dataset.start) { showStandalone('onboarding'); renderQuestion() }
  if (button.dataset.enter) showApp('home')
  if (button.dataset.nav) showApp(button.dataset.nav)
  if (button.dataset.go) showApp(button.dataset.go)
  if (button.dataset.backWelcome) showStandalone('welcome')
  if (button.classList.contains('option-card')) {
    const list = button.closest('.option-list')
    list.querySelectorAll('.option-card').forEach((item) => item.classList.remove('option-card--selected'))
    button.classList.add('option-card--selected')
    button.querySelector('.option-radio').textContent = '✓'
    document.querySelector('[data-next]').disabled = false
  }
  if (button.dataset.next) {
    if (step < questions.length - 1) { step += 1; renderQuestion() } else showApp('home')
  }
  if (button.dataset.prev) {
    if (step > 0) { step -= 1; renderQuestion() } else showStandalone('welcome')
  }
  if (button.dataset.complete) {
    button.classList.toggle('complete-button--done')
    button.textContent = button.classList.contains('complete-button--done') ? '✓' : '+'
  }
})

showStandalone('welcome')
