<template>
  <div>
    <p>accueil</p>
    <img alt="Vue logo" src="../assets/logo.png" />
    <br />
    <h1>Veille techno</h1>
    <Form @add="saveTechno" />
    <br />
    
    <TechnoList :technos="technos" @delete-techno="deleteTechno" @edit-techno="editTechno" />
  </div>
</template>

<script>
import Form from "@/components/Form";
import TechnoList from "@/components/TechnoList";
import { ref } from 'vue';
export default {
  name: 'Accueil',
  components : {
    Form,
    TechnoList
  },

  setup() {
    let technos = ref([]);

    const saveTechno = function(data) {
      console.log("App | saveTechno() | data", data);
      technos.value = [...technos.value, { techno: data, id: Date.now() }];
      console.log("App | saveTechno() | technos.value", technos.value);
    };

    const editTechno = function(tech) {
      technos.value = technos.value.map(t => t.id !== tech.id ? t : tech);
    };

    const deleteTechno = function(tech) {
      console.log("App | deleteTechno() | tech", tech);
      technos.value = technos.value.filter(t => t.id !== tech.id);
    };

    return {
      saveTechno,
      deleteTechno,
      technos,
      editTechno
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
</style>
