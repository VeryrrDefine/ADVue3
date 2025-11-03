import { defineComponent } from 'vue'
import ModernAntimatterDimensionsTab from './ModernAntimatterDimensionsTab'

export default defineComponent({
  name: 'AntimatterDimensionsTab',
  setup(props, ctx) {
    return () => (
      <>
        <ModernAntimatterDimensionsTab />
      </>
    )
  },
})
