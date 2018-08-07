<template>
  <q-page padding class="flex flex-center">
    <q-card inline class="q-ma-sm" style="width:500px">
      <q-card-title class="relative-position">
        <div class="ellipsis">{{dapp.name}}</div>
        <q-rating slot="subtitle" v-model="dapp.stars" :max="5" />
        <div slot="right" class="image-box">
          <img v-bind:src=dapp.image class="img-logo">
        </div>
      </q-card-title>
      <q-card-main>
        <a class="text-faded" v-bind:link=dapp.url />
        <q-item @click.native="openURL(dapp.url)">
          <q-item-side icon="school" />
          <q-item-main label="URL" :sublabel="dapp.url" />
        </q-item>
      </q-card-main>
      <q-card-separator />
      <q-card-main>
        <p class="text-faded">{{dapp.description}}</p>
      </q-card-main>
      <q-card-separator />
      <q-card-actions>
        <q-btn align="around" class="btn-fixed-width" color="primary" label="DOWNLOAD" icon="lightbulb_outline" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<style lang="stylus">
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
import { openURL } from 'quasar'
import dapplist from 'assets/dapplist-eos.json'
export default {
  name: 'PageIndex',
  data () {
    for (let i = 0; i < dapplist.length; i++) {
      if (dapplist[i].dapp_id === this.$route.params.myDappId) {
        var dapp = dapplist[i]
        break
      }
    }
    return {
      dapp
    }
  },
  methods: {
    openURL
  }
}
</script>
