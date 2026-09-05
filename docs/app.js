const workoutData = {
  push: {
    day: 'TREINO A · SEGUNDA', title: 'Upper Push', subtitle: 'Peito, ombros e tríceps', duration: 52,
    exercises: [
      ['peito','Supino inclinado com halteres','4','8–10','90s','Controle a descida e mantenha as escápulas estáveis.'],
      ['peito','Supino reto na máquina','3','10–12','75s','Mantenha o peito aberto e evite tirar os ombros do encosto.'],
      ['ombros','Desenvolvimento com halteres','3','8–10','90s','Suba sem bater os halteres e preserve a posição da lombar.'],
      ['ombros','Elevação lateral','3','12–15','60s','Suba até a linha dos ombros com cotovelos levemente flexionados.'],
      ['peito','Crucifixo no cabo','3','12–15','60s','Pense em aproximar os cotovelos mantendo tensão contínua.'],
      ['bracos','Tríceps na corda','3','12–15','60s','Cotovelos estáveis e extensão completa no final.']
    ]
  },
  lower: {
    day: 'TREINO B · TERÇA', title: 'Lower Body', subtitle: 'Quadríceps, glúteos e posterior', duration: 58,
    exercises: [
      ['pernas','Agachamento livre','4','6–8','120s','Pés firmes, joelhos acompanhando a linha dos pés e tronco estável.'],
      ['pernas','Leg press 45°','4','10–12','90s','Desça controlando sem perder o contato da lombar com o banco.'],
      ['pernas','Cadeira extensora','3','12–15','60s','Segure um segundo no topo e controle a volta.'],
      ['pernas','Stiff com halteres','3','8–10','90s','Leve o quadril para trás mantendo a coluna neutra.'],
      ['pernas','Mesa flexora','3','10–12','75s','Evite tirar o quadril do banco durante a flexão.'],
      ['pernas','Panturrilha em pé','4','12–15','45s','Amplitude completa e pausa curta no topo.']
    ]
  },
  pull: {
    day: 'TREINO C · QUINTA', title: 'Upper Pull', subtitle: 'Costas, bíceps e deltoide posterior', duration: 50,
    exercises: [
      ['costas','Puxada alta pronada','4','8–10','90s','Puxe levando os cotovelos para baixo sem inclinar demais o tronco.'],
      ['costas','Remada baixa no cabo','4','10–12','75s','Inicie o movimento aproximando as escápulas.'],
      ['costas','Remada unilateral com halter','3','10–12','75s','Tronco estável e cotovelo próximo ao corpo.'],
      ['ombros','Crucifixo inverso','3','12–15','60s','Movimento controlado e sem embalo.'],
      ['bracos','Rosca direta com barra W','3','8–10','75s','Cotovelos estáveis e punhos neutros.'],
      ['bracos','Rosca martelo','3','10–12','60s','Evite girar o tronco e controle a descida.']
    ]
  },
  core: {
    day: 'TREINO D · SÁBADO', title: 'Lower + Core', subtitle: 'Posterior, glúteos e abdômen', duration: 54,
    exercises: [
      ['pernas','Levantamento terra romeno','4','8–10','90s','Quadril para trás, barra próxima às pernas e coluna neutra.'],
      ['pernas','Afundo búlgaro','3','10 cada','90s','Desça em linha reta e mantenha o pé da frente inteiro apoiado.'],
      ['pernas','Hip thrust','4','10–12','75s','Contraia glúteos no topo sem hiperestender a lombar.'],
      ['pernas','Cadeira flexora','3','12–15','60s','Controle todo o arco do movimento.'],
      ['core','Prancha frontal','3','40–50s','45s','Mantenha costelas fechadas e glúteos ativos.'],
      ['core','Abdominal no cabo','3','12–15','45s','Flexione o tronco usando o abdômen, sem puxar com os braços.']
    ]
  }
}

const library = Object.values(workoutData).flatMap(w => w.exercises).filter((e,i,a)=>a.findIndex(x=>x[1]===e[1])===i)
const welcome = document.querySelector('[data-welcome]')
const onboarding = document.querySelector('[data-onboarding]')
const app = document.querySelector('[data-app]')
const screens = [...document.querySelectorAll('[data-screen]')]
const questions = [...document.querySelectorAll('[data-question]')]
let step = 0
let currentWorkout = 'push'
let currentExerciseIndex = 0
const completed = {push:new Set(),lower:new Set(),pull:new Set(),core:new Set()}

function toast(message){const el=document.querySelector('#toast');el.textContent=message;el.hidden=false;clearTimeout(window.__toastTimer);window.__toastTimer=setTimeout(()=>el.hidden=true,2300)}
function showStandalone(target){welcome.hidden=target!=='welcome';onboarding.hidden=target!=='onboarding';app.hidden=true;scrollTo({top:0,behavior:'smooth'})}
function showApp(target='home'){welcome.hidden=true;onboarding.hidden=true;app.hidden=false;screens.forEach(s=>s.hidden=s.dataset.screen!==target);document.querySelectorAll('[data-nav]').forEach(b=>b.classList.toggle('active',b.dataset.nav===target));scrollTo({top:0,behavior:'smooth'});if(target==='program')renderLibrary()}
function renderQuestion(){questions.forEach((q,i)=>q.hidden=i!==step);document.querySelector('[data-onboarding-progress]').style.width=`${((step+1)/questions.length)*100}%`;document.querySelector('[data-step-counter]').textContent=`${step+1}/${questions.length}`;document.querySelector('[data-next]').disabled=!questions[step].querySelector('.option-card.selected')}
function selectOption(button){button.parentElement.querySelectorAll('.option-card').forEach(b=>b.classList.remove('selected'));button.classList.add('selected');document.querySelector('[data-next]').disabled=false}
function muscleLabel(m){return ({peito:'Peito',costas:'Costas',pernas:'Pernas',ombros:'Ombros',bracos:'Braços',core:'Core'})[m]||m}
function renderWorkout(key){currentWorkout=key;const data=workoutData[key];document.querySelector('[data-workout-day]').textContent=data.day;document.querySelector('[data-workout-title]').textContent=data.title;document.querySelector('[data-workout-subtitle]').textContent=data.subtitle;document.querySelector('[data-workout-duration]').textContent=data.duration;document.querySelector('[data-total-count]').textContent=data.exercises.length;const list=document.querySelector('[data-exercise-list]');list.innerHTML='';data.exercises.forEach((e,i)=>{const isDone=completed[key].has(i);const card=document.createElement('article');card.className=`exercise-card${isDone?' done':''}`;card.innerHTML=`<button class="exercise-thumb" data-exercise-detail="${i}">${i+1}</button><div class="exercise-info"><span>${muscleLabel(e[0]).toUpperCase()}</span><h3>${e[1]}</h3><div class="meta"><span>${e[2]} × ${e[3]}</span><span>descanso ${e[4]}</span></div></div><button class="complete-btn" data-complete-exercise="${i}">${isDone?'✓':'+'}</button>`;list.appendChild(card)});updateWorkoutProgress();showApp('workout')}
function updateWorkoutProgress(){const total=workoutData[currentWorkout].exercises.length;const done=completed[currentWorkout].size;document.querySelector('[data-done-count]').textContent=done;document.querySelector('[data-workout-progress]').style.width=`${(done/total)*100}%`}
function toggleExercise(i){const set=completed[currentWorkout];set.has(i)?set.delete(i):set.add(i);renderWorkout(currentWorkout)}
function openExercise(i){currentExerciseIndex=i;const e=workoutData[currentWorkout].exercises[i];document.querySelector('[data-modal-muscle]').textContent=muscleLabel(e[0]).toUpperCase();document.querySelector('[data-modal-name]').textContent=e[1];document.querySelector('[data-modal-desc]').textContent=e[5];document.querySelector('[data-modal-sets]').textContent=e[2];document.querySelector('[data-modal-reps]').textContent=e[3];document.querySelector('[data-modal-rest]').textContent=e[4];const logger=document.querySelector('[data-set-logger]');logger.innerHTML='';const count=parseInt(e[2])||3;for(let s=1;s<=count;s++){const row=document.createElement('div');row.className='set-row';row.innerHTML=`<span>S${s}</span><label><input inputmode="decimal" placeholder="0"><small>kg</small></label><label><input inputmode="numeric" placeholder="${String(e[3]).replace(/[^0-9]/g,'').slice(0,2)||'10'}"><small>reps</small></label><button data-set-done>${s===1?'✓':'○'}</button>`;if(s===1)row.querySelector('button').classList.add('done');logger.appendChild(row)}document.querySelector('[data-exercise-modal]').hidden=false;document.body.style.overflow='hidden'}
function closeModal(){document.querySelector('[data-exercise-modal]').hidden=true;document.body.style.overflow=''}
function renderLibrary(){const grid=document.querySelector('[data-library-grid]');if(!grid)return;const search=(document.querySelector('[data-exercise-search]')?.value||'').toLowerCase();const active=document.querySelector('[data-filter].active')?.dataset.filter||'all';grid.innerHTML='';library.filter(e=>(active==='all'||e[0]===active)&&e[1].toLowerCase().includes(search)).forEach((e,i)=>{const card=document.createElement('article');card.className='library-card';card.innerHTML=`<div class="library-thumb"></div><div><span>${muscleLabel(e[0]).toUpperCase()}</span><strong>${e[1]}</strong><button data-library-open="${e[1]}">Ver execução →</button></div>`;grid.appendChild(card)})}

addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return
  if(b.dataset.start){showStandalone('onboarding');renderQuestion();return}
  if(b.dataset.enter){showApp('home');return}
  if(b.dataset.nav){showApp(b.dataset.nav);return}
  if(b.dataset.go){showApp(b.dataset.go);return}
  if(b.classList.contains('option-card')){selectOption(b);return}
  if(b.dataset.next!==undefined){if(step<questions.length-1){step++;renderQuestion()}else{toast('Seu programa foi recomendado com base no seu perfil.');showApp('home')}return}
  if(b.dataset.prev!==undefined){if(step>0){step--;renderQuestion()}else showStandalone('welcome');return}
  if(b.dataset.programTab){document.querySelectorAll('[data-program-tab]').forEach(x=>x.classList.toggle('active',x===b));document.querySelectorAll('[data-program-panel]').forEach(p=>p.hidden=p.dataset.programPanel!==b.dataset.programTab);if(b.dataset.programTab==='library')renderLibrary();return}
  if(b.dataset.filter){document.querySelectorAll('[data-filter]').forEach(x=>x.classList.toggle('active',x===b));renderLibrary();return}
  if(b.dataset.openWorkout){renderWorkout(b.dataset.openWorkout);return}
  if(b.dataset.completeExercise!==undefined){toggleExercise(Number(b.dataset.completeExercise));return}
  if(b.dataset.exerciseDetail!==undefined){openExercise(Number(b.dataset.exerciseDetail));return}
  if(b.dataset.closeModal!==undefined){closeModal();return}
  if(b.dataset.setDone!==undefined){b.classList.toggle('done');b.textContent=b.classList.contains('done')?'✓':'○';return}
  if(b.dataset.completeFromModal!==undefined){completed[currentWorkout].add(currentExerciseIndex);closeModal();renderWorkout(currentWorkout);toast('Exercício concluído. Boa!');return}
  if(b.dataset.finishWorkout!==undefined){if(completed[currentWorkout].size<workoutData[currentWorkout].exercises.length){toast('Você ainda tem exercícios pendentes — mas pode finalizar quando quiser.')}else{toast('Treino concluído. Mais uma sessão feita ✓');showApp('home')}return}
  if(b.dataset.upgrade!==undefined){toast('No produto final, este botão abre o checkout do plano Personal.');return}
  if(b.dataset.profileEdit!==undefined){toast('Edição de perfil simulada neste protótipo.');return}
  if(b.dataset.libraryOpen){const found=Object.entries(workoutData).flatMap(([k,w])=>w.exercises.map((ex,i)=>({k,ex,i}))).find(x=>x.ex[1]===b.dataset.libraryOpen);if(found){currentWorkout=found.k;openExercise(found.i)}return}
})

document.querySelector('[data-exercise-search]')?.addEventListener('input',renderLibrary)
document.querySelector('[data-exercise-modal]')?.addEventListener('click',e=>{if(e.target.matches('[data-exercise-modal]'))closeModal()})
showStandalone('welcome')
