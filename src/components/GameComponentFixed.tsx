import { defineComponent } from 'vue'
import ModernSideBar from './ui-modes/modern/ModernSideBar'

/**
 * This component manages tabs, antimatter left-up things, question, some icons,
and left-down save tip, time theorem shop
 */
export default defineComponent({
  name: 'GameComponentFixed',
  setup(props, ctx) {
    return () => (
      <>
        <div id="ui-fixed" class="c-game-ui--fixed">
          <div id="notification-container" class="l-notification-container" />
          <ModernSideBar />
          {/* <HowToPlay style="hideIfMatoFullscreen" />
    <TimeTheoremShop
      v-if="view.subtab === 'studies'"
      class="l-time-studies-tab__tt-shop"
    />
    <ModernSidebar
      v-if="view.newUI && view.theme !== 'S12'"
      style="hideIfMatoFullscreen"
    />
    <SaveTimer style="hideIfMatoFullscreen" />
    <SpeedrunStatus style="hideIfMatoFullscreen" />
    <template v-if="view.theme !== 'S12'">
      <ModalProgressBar v-if="view.modal.progressBar" />
      <CelestialQuoteModal
        v-else-if="view.quotes.current"
        quote="view.quotes.current"
      />
      <CelestialQuoteHistoryDisplay
        v-else-if="view.quotes.history"
        quotes="view.quotes.history"
      />
      <PopupModal
        v-else-if="view.modal.current"
        modal="view.modal.current"
      />
      <ModalProgressBar v-if="view.modal.progressBar" />
      <FadeAway v-if="ending" />
      <CreditsContainer v-if="ending" />
      <NewGame v-if="ending" />
      <SpectateGame />
    </template> */}
        </div>
      </>
    )
  },
})
