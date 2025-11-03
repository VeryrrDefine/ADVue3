import { defineComponent } from 'vue'
import GameComponentFixed from './components/GameComponentFixed'
import NewsTicker from './components/ui-modes/NewsTicker.vue'
import HeaderPrestigeGroup from './components/ui-modes/HeaderPrestigeGroup'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <div
          // v-if="view.initialized"
          id="ui-container"
          // :class="containerClass"
          class="ui-wrapper new-ui"
        >
          <div id="ui" class="c-game-ui">
            <div id="page">
              <div class="game-container">
                <NewsTicker />
                <div class="tab-container">
                  <HeaderPrestigeGroup />
                  Liuliu66686 est méchant
                </div>
              </div>
            </div>
            {/* 
            <S12DesktopIcons v-if="isThemeS12" />
            <link
              v-if="view.theme !== 'Normal'"
              type="text/css"
              rel="stylesheet"
              :href="themeCss"
            > */}
          </div>
          <GameComponentFixed />
          {/* <GameUiComponentFixed v-if="!isThemeS12" />
          <BackgroundAnimations v-if="!isThemeS12" />
          <S12UiFixed v-if="isThemeS12" /> */}
        </div>
      </>
    )
  },
})
