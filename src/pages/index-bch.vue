<template>
  <q-page padding class="docs-tab-pane row justify-center row items-start">
    <q-card inline class="q-ma-sm"
              v-for="dapp in dapplist"
              v-bind:key="dapp.name"
              v-bind:dapp="dapp">
      <q-item>
        <q-item-side avatar="statics/icons/favicon_16+32.ico" />
        <q-item-main>
          <q-item-tile label >{{dapp.category}}</q-item-tile>
        </q-item-main>
      </q-item>
      <q-card-media>
        <img v-bind:src=dapp.image>
      </q-card-media>
      <q-card-title>
        {{dapp.name}}
        <q-rating slot="subtitle" v-model="dapp.stars" :max="5" />
      </q-card-title>
      <q-card-actions>
        <q-btn color="primary" icon="directions" icon-right="send" label="Detail" @click="goToDappDetail(dapp.dapp_id)"/>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<style lang="stylus">
.card-examples
  .q-card
    width 300px
  .bigger
    width 450px
    max-width 90vw
  @media (max-width $breakpoint-xs-max)
    .q-card
      width 100%
  .docs-tab-pane
  .q-tab-pane
    display flex
    align-items center
    justify-content center
    height 65px
</style>

<script>

import dapplist from 'assets/dapplist-eos.json'

export default {
  data () {
    return {
      dapplist: dapplist
    }
  },
  methods: {
    goToDappDetail (myDappId) {
      this.$router.push({ path: `/mydapp/${myDappId}/detail` })
    }
  }
}
</script>
