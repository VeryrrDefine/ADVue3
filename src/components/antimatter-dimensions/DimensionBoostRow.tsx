import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DimensionBoostRow',
  setup(props, ctx) {
    return () => (
      <>
        <div class="reset-container dimboost">
          {/* <h4>Dimension Boost ({{ boostCountText }})</h4> */}
          <h4>Dimension Boost (0)</h4>
          {/* <span>Requires: {{ formatInt(requirement.amount) }} {{ dimName }} Antimatter D</span> */}
          <span>Requires: NaN 9th Antimatter D</span>
          <button
            class={{
              'o-primary-btn o-primary-btn--new o-primary-btn--dimension-reset': true,
              // "tutorial--glow": this.isBuyable && this.hasTutorial,
              // "o-primary-btn--disabled": !this.isBuyable,
              // "o-pelle-disabled-pointer": this.creditsClosed
            }}
            //   :class="classObject"
            //   @click.exact="dimensionBoost(true)"
            //   @click.shift.exact="dimensionBoost(false)"
          >
            {/* {{ unlockedByBoost }} */}
            <div v-if="hasTutorial" class="fas fa-circle-exclamation l-notification-icon" />
          </button>
        </div>
      </>
    )
  },
})
