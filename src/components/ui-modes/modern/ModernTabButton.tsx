import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ModernTabButton',
  setup(props, ctx) {
    return () => (
      <>
        {['1', '2'].map(() => (
          <div
            // v-if="!isHidden && isAvailable"
            // :class="[classObject, tab.config.UIClass]"
            class="o-tab-btn o-tab-btn--modern-tabs o-tab-btn--subtabs o-tab-btn--active"
          >
            <div
              class="l-tab-btn-inner"
              // @click="tab.show(true)"
            >
              何意味
              <div
                // v-if="hasNotification"
                class="fas fa-circle-exclamation l-notification-icon"
              />
            </div>
            <div class="subtabs">
              {(['那', '我', '问', '你'] as const).map((x) => (
                <div
                  // v-if="subtabVisibilities[index]"
                  // :key="index"
                  class="o-tab-btn o-tab-btn--subtab"
                  // :class="
                  //   [tab.config.UIClass,
                  //   {'o-subtab-btn--active': isCurrentSubtab(subtab.id)}]
                  // "
                  // @click="subtab.show(true)"
                >
                  {/* <span v-html="subtab.symbol" /> */}
                  {x}
                  {/* <div
                  // v-if="subtab.hasNotification"
                  class="fas fa-circle-exclamation l-notification-icon"
                /> */}
                  <div class="o-subtab__tooltip">
                    {x.charCodeAt(0)}
                    {/* {{ subtab.name }} */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </>
    )
  },
})
