<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          MyDapp
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs v-if="this.$route.meta.isMainFrame">
        <q-route-tab slot="title" icon="view_quilt" to="/mydapp/eth" replace label="ETH" default="true" />
        <q-route-tab slot="title" icon="view_day" to="/mydapp/eos" replace label="EOS" />
        <q-route-tab slot="title" icon="input" to="/mydapp/bch" replace label="BCH" />
      </q-tabs>
    </q-layout-header>
    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Essential Links</q-list-header>
        <q-item
            to="/mydapp"
            exact
            replace
          >
            <q-item-side icon="home" />
            <q-item-main label="MyDapp Home" />
        </q-item>
        <q-item-separator />
        <q-item @click.native="openURL('https://chainbow.io')">
          <q-item-side icon="school" />
          <q-item-main label="ChainBow" sublabel="ChainBow.io" />
        </q-item>
        <q-item @click.native="openURL('https://github.com/baryon/mydapp.io')">
          <q-item-side icon="code" />
          <q-item-main label="GitHub" sublabel="github.com/mydapp" />
        </q-item>
        <q-item @click.native="openURL('https://twitter.com/ChainbowJapan')">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@ChainbowJapan" />
        </q-item>
      </q-list>
    </q-layout-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
