import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ModernSideBarCurrency',
  setup(props, ctx) {
    return () => (
      <>
        <div
          // :class="containerClass()"
          // @click.exact="cycleResource(1)"
          // @click.shift.exact="cycleResource(-1)"
          class={['c-sidebar-resource', 'c-sidebar-resource-default']}
        >
          <h2
          // :class="resource.formatClass"
          // :style="styleObject()"
          >
            {/* {{ displayValue }} */}0
          </h2>
          <div class="c-sidebar-resource__information">
            <span class="c-sidebar-resource__name">
              {/* {{ resourceName }} */}
              resourceName
            </span>
          </div>
        </div>
      </>
    )
  },
})
