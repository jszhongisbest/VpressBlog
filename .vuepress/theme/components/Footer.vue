<template>
  <v-footer dark padless>
    <v-card flat tile color="secondary" class="white--text text-center w-100">
      <v-card-text>
        <v-btn
          v-for="item in $themeConfig.socialMedia"
          :key="item.link"
          :href="item.link"
          target="_blank"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ 'mdi-' + item.type.toLowerCase() }}</v-icon>
        </v-btn>
      </v-card-text>

      <!-- <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text> -->

      <v-divider></v-divider>

      <v-card-text class="white--text">
        <template v-if="$themeConfig.copyright">
          {{ $themeConfig.copyright }}
        </template>
        <template v-else> Copyright © {{ new Date().getFullYear() }} - {{ $siteTitle }} All rights reserved. </template>

        Powered by
        <a href="https://sidstraw.dev" target="_blank" class="white--text text-decoration-none"> SidStraw </a>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
  }),
}
</script>
