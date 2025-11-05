import { clickSubtab, clickTab, isSubtabOpened, isTabOpened, tab } from '@/core/tabs'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ModernTabButton',
    setup(props, ctx) {
        return () => (
            <>
                {tab.map((x) => (
                    <div
                        // v-if="!isHidden && isAvailable"
                        // :class="[classObject, tab.config.UIClass]"
                        class={[
                            'o-tab-btn',
                            'o-tab-btn--modern-tabs',
                            'o-tab-btn--subtabs',
                            isTabOpened(x.id) && 'o-tab-btn--active',
                        ]}
                    >
                        <div
                            class="l-tab-btn-inner"
                            onClick={() => clickTab(x.id)}
                            // @click="tab.show(true)"
                        >
                            {x.name}
                            {/* <div
                // v-if="hasNotification"
                class="fas fa-circle-exclamation l-notification-icon"
              /> */}
                        </div>
                        <div class="subtabs">
                            {x.subtabs.map((y) => (
                                <div
                                    // v-if="subtabVisibilities[index]"
                                    // :key="index"
                                    class={[
                                        'o-tab-btn',
                                        'o-tab-btn--subtab',
                                        isSubtabOpened(x.id, y.id) && 'o-subtab-btn--active',
                                    ]}
                                    onClick={() => clickSubtab(x.id, y.id)}
                                    // :class="
                                    //   [tab.config.UIClass,
                                    //   {'o-subtab-btn--active': isCurrentSubtab(subtab.id)}]
                                    // "
                                    // @click="subtab.show(true)"
                                >
                                    {/* <span v-html="subtab.symbol" /> */}
                                    {y.symbol}
                                    {/* <div
                  // v-if="subtab.hasNotification"
                  class="fas fa-circle-exclamation l-notification-icon"
                /> */}
                                    <div class="o-subtab__tooltip">
                                        {y.name}
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
