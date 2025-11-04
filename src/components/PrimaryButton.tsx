import { computed, defineComponent, useAttrs, type PropType } from 'vue'

export default defineComponent({
  name: 'PrimaryButton',
  props: {
    enabled: {
      type: Boolean,
      required: false,
      default: true,
    },
    class: {
      type: [Array, String] as PropType<Array<string> | string>,
      default: [],
    },
  },
  setup(props, ctx) {
    const a = computed(() => {
      return {
        'o-primary-btn': true,
        'o-primary-btn--disabled': !props.enabled,
      }
    })
    const attrs = useAttrs()

    const eventListeners = Object.keys(attrs).reduce(
      (listeners, key) => {
        if (key.startsWith('on')) {
          listeners[key] = attrs[key] as (x: Event) => void
        }
        return listeners
      },
      {} as Record<string, (x: Event) => void>,
    )
    return () => (
      <button class={[a.value, props.class]} {...eventListeners}>
        {ctx.slots.default && ctx.slots.default()}
      </button>
    )
  },
})
