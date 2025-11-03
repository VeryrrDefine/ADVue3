import { defineComponent } from 'vue'
import HeaderPrestigeGroup from './HeaderPrestigeGroup'

export default defineComponent({
  name: 'GameHeader',
  setup() {
    return () => (
      <>
        <div>
          {/* <HeaderChallengeDisplay />
            <HeaderChallengeEffects /> */}
          <HeaderPrestigeGroup />
          {/* <GameSpeedDisplay v-if="hasReality" />
            <br v-if="hasReality">
            <HeaderBlackHole /> */}
        </div>
      </>
    )
  },
})
