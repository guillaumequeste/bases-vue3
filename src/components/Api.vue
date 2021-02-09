<template>
  <div>

    <div :key="index" v-for="(pays, index) in pays">
        <p>{{ pays.name }} : {{ pays.population }} habitants</p>
    </div>

  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Api',
  data () {
    return {
      pays: null
    }
  },
  mounted () {
    axios
      .get('http://restcountries.eu/rest/v2/all')
      .then((response) => {
        this.pays = response.data;
        console.log(this.pays);
      })
  }
}

  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
