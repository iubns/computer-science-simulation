<template>
  <div>content !!{{ message }}</div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class GCSimulation extends Vue {
  private message = 'hello!';
  private mes = 'as';
}
</script>
