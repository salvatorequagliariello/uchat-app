<script setup lang="ts">
  useSeoMeta({
    title: 'uChat',
    ogTitle: 'uChat',
    description: 'A complete and easy to use chat web application to chat with your friends. Totally free to use.',
    ogDescription: 'A complete and easy to use chat web application to chat with your friends. Totally free to use.',
    author: 'Salvatore Quagliariello',
    contentType: 'text/html; charset=utf-8',
    robots: 'noindex, nofollow'
  })

 const firebaseUser = useFirebaseUser();
</script>


<template>
  <div>
    <NuxtPage />
  </div>
</template>
