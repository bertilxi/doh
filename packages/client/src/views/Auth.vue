<template></template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as netlifyIdentity from "netlify-identity-widget";

@Component
export default class Auth extends Vue {
  mounted() {
    netlifyIdentity.init({});
    netlifyIdentity.open();
  }
}
</script>
