import { computed, onMounted, onUnmounted, ref } from "vue"

export const useBreakpoints = () => {
  let windowWidth = ref(window.innerWidth)

  const onWidthChange = () => windowWidth.value = window.innerWidth
  onMounted(() => window.addEventListener('resize', onWidthChange))
  onUnmounted(() => window.removeEventListener('resize', onWidthChange))
  
  const isMobile = computed(() => {
    if (windowWidth.value > 600) return false;

    return true;
  })

  const width = computed(() => windowWidth.value)

  return { isMobile }
}