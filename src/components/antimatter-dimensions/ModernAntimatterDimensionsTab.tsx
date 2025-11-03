import { defineComponent } from 'vue'
import PrimaryButton from '../PrimaryButton'

export default defineComponent({
  name: 'ModernAntimatterDimensionsTab',
  setup() {
    return () => (
      <>
        <div class="l-antimatter-dim-tab">
          <div class="modes-container">
            <button
              class="o-primary-btn l-button-container"
              // @click="changeBuyMode"
            >
              Buy 1{/* {{ getUntil10Display() }} */}
            </button>
            <PrimaryButton
              // v-show="isSacrificeUnlocked"
              // v-tooltip="sacrificeTooltip"
              // :enabled="isSacrificeAffordable && !isFullyAutomated"
              class="o-primary-btn--sacrifice"
              // @click="sacrifice"
            >
              <span>Dimensional Sacrifice (×0.00)</span>
              {/* <span v-if="isFullyAutomated">
          Dimensional Sacrifice is Automated (Achievement 118)
        </span>
        <span v-else-if="isSacrificeAffordable">Dimensional Sacrifice ({{ formatX(sacrificeBoost, 2, 2) }})</span>
        <span v-else>Dimensional Sacrifice Disabled ({{ disabledCondition }})</span> */}
            </PrimaryButton>
            <button
              class="o-primary-btn l-button-container"
              // @click="maxAll"
            >
              Max All (M)
            </button>
          </div>
          {/* <span>{{ multiplierText }}</span>
    <TickspeedRow />
    <div class="l-dimensions-container">
      <AntimatterDimensionRow
        v-for="tier in 8"
        :key="tier"
        :tier="tier"
      />
    </div>
    <div class="resets-container">
      <DimensionBoostRow />
      <PrimaryButton
        v-if="isQuickResetAvailable"
        class="o-primary-btn--quick-reset"
        onclick="softReset(-1, true, true)"
      >
        Perform a Dimension Boost reset
        <span v-if="hasDimensionBoosts"> but lose a Dimension Boost</span>
        <span v-else> for no gain</span>
      </PrimaryButton>
      <AntimatterGalaxyRow />
    </div>
    <AntimatterDimensionProgressBar /> */}
        </div>
      </>
    )
  },
})
