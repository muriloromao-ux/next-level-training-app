import { useMemo, useState } from 'react'
import { AppShell } from './layout/AppShell'
import { HomeScreen } from './screens/Home'
import { Onboarding } from './screens/Onboarding'
import { PlanScreen } from './screens/Plan'
import { ProfileScreen } from './screens/Profile'
import { ProgressScreen } from './screens/Progress'
import { Welcome } from './screens/Welcome'
import { WorkoutScreen } from './screens/Workout'
import type { Screen } from './types'

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome')
  const appScreen = useMemo(() => !['welcome', 'onboarding'].includes(screen), [screen])

  if (!appScreen) {
    if (screen === 'onboarding') return <Onboarding onBack={() => setScreen('welcome')} onFinish={() => setScreen('home')} />
    return <Welcome onStart={() => setScreen('onboarding')} onEnter={() => setScreen('home')} />
  }

  return (
    <AppShell screen={screen} setScreen={setScreen}>
      {screen === 'home' && <HomeScreen goWorkout={() => setScreen('workout')} goPlan={() => setScreen('plan')} />}
      {screen === 'workout' && <WorkoutScreen goHome={() => setScreen('home')} />}
      {screen === 'progress' && <ProgressScreen />}
      {screen === 'plan' && <PlanScreen />}
      {screen === 'profile' && <ProfileScreen reset={() => setScreen('welcome')} />}
    </AppShell>
  )
}
