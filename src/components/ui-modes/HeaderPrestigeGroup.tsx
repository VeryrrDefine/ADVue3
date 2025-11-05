import { defineComponent } from 'vue'
import HeaderCenterContainer from './prestige-header/HeaderCenterContainer'

export default defineComponent({
    setup() {
        return () => (
            <>
                <div class="c-prestige-info-blocks">
                    <HeaderCenterContainer />
                    {/* <HeaderEternityContainer class="l-game-header__eternity" />
    <HeaderCenterContainer class="l-game-header__center" />
    <HeaderInfinityContainer class="l-game-header__infinity" /> */}
                </div>
                <div class="information-header">
                    <div></div>
                </div>
            </>
        )
    },
})
