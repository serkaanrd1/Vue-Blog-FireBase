<template>
  <div class="home">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post"></SinglePost>
    </div>
  </div>
  <footer>
    <center>
    <i>Designed by Serkan   </i> 
           </center>
  </footer>
</template>

<script>
import { ref } from "vue";
import SinglePost from "../components/SinglePost.vue";
import getPosts from "../composables/getPosts";
export default {
  name: "Home",
  components: { SinglePost },
  setup() {
    const posts = ref([]);
    getPosts().then((data) => {
      posts.value = data;
    });
    return { posts };
  },
};
</script>
<style>
footer{
  font-size: 14px;
  text-decoration:underline;
  position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    text-align: center;
    
    color: #999;
}
</style>
