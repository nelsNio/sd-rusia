<template>
<div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>Foto 
        <input type="file" id="file" ref="file"  v-on:change="handleFileUpload()"/>
      </label>
      <button v-on:click="submitFile()">Subir</button>
    </div>
  </div>
</template>
<script>
  export default {
    /*
      Defines the data used by the component
    */
    data(){
      return {
        file: ''
      }
    },

    methods: {
      /*
        Submits the file to the server
      */
      submitFile(){
        /*
                Initialize the form data
            */
            let formData = new FormData();

            /*
                Add the form data we need to submit
            */
            formData.append('file', this.file);

        /*
          Make the request to the POST /single-file URL
        */
        
      },

      /*
        Handles a change on the file upload
      */
      handleFileUpload(){
        this.file = this.$refs.file.files[0];
      }
    }
  }
</script>