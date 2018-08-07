<template>
  <q-page padding class="docs-tab-pane row justify-center row items-start">
    <q-card inline class="q-ma-sm" style="width:350px"
              v-for="dapp in dapplist"
              v-bind:key="dapp.name"
              v-bind:dapp="dapp">
      <!-- <q-card-media class="bg-blue-1 ">
        <div style="width:500px;heigth:300px" class="row justify-center">
            <img v-bind:src=dapp.image width="100px" height="100px">
        </div>
      </q-card-media> -->
      <q-card-separator />
      <q-card-title>
        {{dapp.name}}
        <q-rating slot="subtitle" v-model="dapp.stars" :max="5" />
        <div slot="right" class="image-box">
          <img v-bind:src=dapp.image class="img-logo">
        </div>
      </q-card-title>
      <!-- <q-card-main>
        <p>$・Italian, Cafe</p>
        <p class="text-faded">{{dapp.description}}</p>
      </q-card-main> -->
      <q-item>
        <q-item-main>
          <q-item-tile label >{{dapp.category}}</q-item-tile>
        </q-item-main>
        <q-item-side avatar="statics/icons/favicon_16+32.ico" />
      </q-item>
      <q-card-separator />
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
.img-logo
  display flex;
  width  atuo;
  height atuo;
  max-width 100%;
  max-height 100%;
.image-box
 width 100px;
 height 100px

</style>

<script>

import dapplist from 'assets/dapplist.json'

export default {
  data () {
    return {
      dapplist: dapplist,
      isMainFrame: true
    }
  },
  methods: {
    goToDappDetail (myDappId) {
      this.$router.push({ path: `/mydapp/detail/eth/${myDappId}` })
    }
  }
}
</script>
