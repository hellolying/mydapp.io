<template>
  <q-page padding class="flex flex-center">
    <q-card inline class="q-ma-sm">
      <q-card-media>
        <img v-bind:src=dapp.image>
      </q-card-media>
      <q-card-title class="relative-position">
        <q-btn fab color="primary" icon="place" class="absolute" style="top: 0; right: 8px; transform: translateY(-50%);" />

        <div class="ellipsis">{{dapp.name}}</div>
        <q-rating slot="subtitle" v-model="dapp.stars" :max="5" />
        <div slot="right" class="row items-center">
          <q-icon name="place" /> 250 ft
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
      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat>5:30PM</q-btn>
        <q-btn flat>7:30PM</q-btn>
        <q-btn flat>9:00PM</q-btn>
        <q-btn flat color="primary">Reserve</q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
import { openURL } from 'quasar'
import dapplist from 'assets/dapplist.json'
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
