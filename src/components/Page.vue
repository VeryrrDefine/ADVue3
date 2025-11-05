<script setup lang="ts">
import AntimatterDimensionsTab from './antimatter-dimensions/AntimatterDimensionsTab'
import HeaderPrestigeGroup from './ui-modes/HeaderPrestigeGroup'
import NewsTicker from './ui-modes/NewsTicker.vue'
</script>

<template>
    <div id="page">
        <div class="game-container">
            <NewsTicker />
            <div class="tab-container">
                <HeaderPrestigeGroup />
                <AntimatterDimensionsTab />
                Je voudrais un thé et un café
            </div>
        </div>
    </div>
</template>
