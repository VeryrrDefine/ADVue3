import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ModernTabButton',
    setup(props, ctx) {
        return () => (
            <>
                {(['1', '2', '3', '4'] as const).map((x) => (
                    <div
                        // v-if="!isHidden && isAvailable"
                        // :class="[classObject, tab.config.UIClass]"
                        class={[
                            'o-tab-btn',
                            'o-tab-btn--modern-tabs',
                            'o-tab-btn--subtabs',
                            x == '1' && 'o-tab-btn--active',
                        ]}
                    >
                        <div
                            class="l-tab-btn-inner"
                            // @click="tab.show(true)"
                        >
                            {x}
                            {/* <div
                // v-if="hasNotification"
                class="fas fa-circle-exclamation l-notification-icon"
              /> */}
                        </div>
                        <div class="subtabs">
                            {([Number(x) * 4, Number(x) ** 2] as const).map((y) => (
                                <div
                                    // v-if="subtabVisibilities[index]"
                                    // :key="index"
                                    class={[
                                        'o-tab-btn',
                                        'o-tab-btn--subtab',
                                        y == Number(x) * 4 && 'o-subtab-btn--active',
                                    ]}
                                    // :class="
                                    //   [tab.config.UIClass,
                                    //   {'o-subtab-btn--active': isCurrentSubtab(subtab.id)}]
                                    // "
                                    // @click="subtab.show(true)"
                                >
                                    {/* <span v-html="subtab.symbol" /> */}
                                    {y}
                                    {/* <div
                  // v-if="subtab.hasNotification"
                  class="fas fa-circle-exclamation l-notification-icon"
                /> */}
                                    <div class="o-subtab__tooltip">
                                        安提玛特带们森
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
