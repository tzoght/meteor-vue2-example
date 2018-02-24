<template>
<div>
  <h1>{{ message }}</h1>
  <input v-model="message" />
  <my-table></my-table>
</div>
</template>

<script>

import MyTable from "./MyTable";



export default {
    components: {MyTable}
}
</script>
