import { unref, watch, onBeforeUnmount } from 'vue'

const noop = () => {}

export function useEventListener(...args) {
  let [target, event, listener, options] = args

  if (!target) return noop

  let cleanup = noop

  const stopWatch = watch(
    () => unref(target),
    (el) => {
      cleanup()
      if (!el) return

      el.addEventListener(event, listener, options)

      cleanup = () => {
        el.removeEventListener(event, listener, options)
        cleanup = noop
      }
    },
    { immediate: true, flush: 'post' },
  )

  const stop = () => {
    stopWatch()
    cleanup()
  }

  onBeforeUnmount(stop)

  return stop
}
