<script lang="ts" setup>
import { GameDatabase, type News } from '@/core/game-database'
import { chooseRandomElement } from '@/lib/chooseRandomElement'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

let nextNewsMessageId = undefined as string | undefined
let enableAnimation = ref(true)

const recentTickers = [] as string[]
onBeforeUnmount(() => {
  clearTimeouts()
})
let currentNews = null as News | null
let delayTimeout = -1,
  scrollTimeout = -1
const lineClass = computed(() => (enableAnimation ? undefined : 'c-disable-ticker-animation'))
const line = ref<HTMLSpanElement | null>(null)
const ticker = ref<HTMLDivElement | null>(null)
function clearTimeouts() {
  clearTimeout(delayTimeout)
  clearTimeout(scrollTimeout)
}
onMounted(() => {
  // document.addEventListener("visibilitychange", () => restart());
  // console.log('mounted, try restart...')
  restart()
})
function restart() {
  //   if (!GameUI.initialized) {
  //     setTimeout(this.restart.bind(this), 100);
  //     return;
  //   }
  clearTimeouts()
  if (document.hidden) {
    return
  }
  // console.log('timeouts cleared')
  if (!line.value) {
    // console.log('Cannot find line')
    setTimeout(restart, 100)
  }
  prepareNextMessage()
}
function scrollMessage() {
  // SCROLL_SPEED is in pixels per second
  //   const SCROLL_SPEED = player.options.news.speed * 100;
  const SCROLL_SPEED = 100
  if (!ticker.value) return
  if (!line.value) return
  const scrollDuration = (ticker.value.clientWidth + line.value.clientWidth) / SCROLL_SPEED

  line.value.style.transitionDuration = `${scrollDuration}s`
  if (currentNews && currentNews.id === 'a244') {
    line.value.style.transform = 'translateX(0)'
  } else {
    line.value.style.transform = 'translateX(-100%)'
  }

  //   NewsHandler.addSeenNews(this.currentNews.id);
  //   if (NewsHandler.uniqueTickersSeen >= 50) Achievement(22).unlock();

  scrollTimeout = setTimeout(prepareNextMessage, scrollDuration * 1000)
}
function prepareNextMessage() {
  // console.log('preparing next messages...')
  if (!line.value) return

  //   const news = {} as News;
  // Prevent tickers from repeating if they aren't unlocked or were seen recently
  const canShow = (news: News) => (news.unlocked ?? true) && !recentTickers.includes(news.id)

  const findNews = chooseRandomElement(GameDatabase.news.filter(canShow))
  //   if (
  //     nextNewsMessageId &&
  //     findNews
  //   ) {
  //     nextNewsMessageId = undefined
  //   }
  if (!findNews) {
    // console.log('Cannot find news.')
    return
  }
  currentNews = findNews

  //   else if (this.currentNews && this.currentNews.id === 'a236') {
  //     this.currentNews = GameDatabase.news
  //       .filter((message) => message.isAdvertising && canShow(message))
  //       .randomElement()
  //   } else {
  //     const isAI = Math.random() < player.options.news.AIChance
  //     this.currentNews = GameDatabase.news
  //       .filter((message) => message.id.includes('ai') === isAI)
  //       .filter((message) => canShow(message))
  //       .randomElement()
  //   }

  //   this.recentTickers.push(this.currentNews.id)
  //   while (this.recentTickers.length > player.options.news.repeatBuffer)
  //     this.recentTickers.shift()

  //   if (this.currentNews.reset) {
  //     this.currentNews.reset()
  //   }

  let text = currentNews.text
  //   if (STEAM) {
  //     window.openNewsLink = openExternalLink
  //     text = text.replace(
  //       /href=['"]([^"']+)['"]/gu,
  //       'href onClick=\'window.openNewsLink("$1"); return false;\'',
  //     )
  //   }
  line.value.innerHTML = text

  line.value.style.transitionDuration = '0ms'
  if (currentNews?.id === 'a244' || currentNews?.id === 'ai63') {
    line.value.style.transform = 'translateX(-100%)'
  } else {
    line.value.style.transform = 'translateX(0)'
  }

  const DELAY = 1000
  // console.log('timeout seeted, ' + DELAY + 'ms.')
  delayTimeout = setTimeout(scrollMessage, DELAY)
}
</script>

<template>
  <div ref="ticker" class="c-news-ticker">
    <span
      ref="line"
      class="c-news-line c-news-ticker__line"
      :class="lineClass"
      click="onLineClick"
    />
  </div>
</template>
